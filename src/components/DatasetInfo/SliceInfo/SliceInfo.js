import React, {Component } from 'react';
import {connect} from 'react-redux';
import Input from '../../UI/Input/Input';
import classes from './SliceInfo.scss';
import Button from  '../../UI/Button/Button';
import *as actions from '../../../store/actions';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class SliceInfo  extends Component {
    state = {
        queryForm :{
            select: {
                elementType:'input',
                elementConfig:{
                    type: 'text',
                    placeholder: 'SELECT'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched: false
            },
            where: {
                elementType:'input',
                elementConfig:{
                    type: 'text',
                    placeholder: 'WHERE'
                },
                value:'',
                validation:{
                    required:false
                },
                valid:false,
                touched: false
            },
           
            groupBy:{
                elementType:'input',
                elementConfig:{
                    type: 'text',
                    placeholder:'GROUP BY'
                },
                value:'',
                validation:{
                    required:false
                },
                valid: false,
                touched:false
            },
            orderBy:{
                elementType:'input',
                elementConfig:{
                    type: 'text',
                    placeholder:'ORDER BY'
                },
                value:'',
                validation:{
                    required:false
                },
                valid: false,
                touched:false
            },
            offset:{
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'OFFSET'
                },
                value:'',
                validation:{
                    required:false,
                },
                valid: false,
                touched:false
            },
            limit:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'LIMIT'
                },
                value:'',
                validation:{
                    required:false
                },
                valid:false,
                touched:false
            }
          
        },
        formIsValid:false
    }

    // Check validity
    checkValidity = (value, rules)=>{
        let isValid = true;
        //If no rule privided return true
        if(!rules){
            return true;
        }
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
    
        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    // input handler
    inputChangeHandler= (event, inputIdentifier) =>{
        const updatedQueryForm = {
            ...this.state.queryForm
        };
        const updatedFormElement = {
            ...updatedQueryForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(event.target.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedQueryForm[inputIdentifier] = updatedFormElement;

        let formIsValid =  true;
        for (let inputIdentifier in updatedQueryForm){
            formIsValid =  updatedQueryForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({queryForm:updatedQueryForm, formIsValid: formIsValid});

    }
 
    //Bind info from from input fields
    queryInfoHandler = (event) =>{
        event.preventDefault();
        const formData = {
            select: this.state.queryForm.select.value,
            where:this.state.queryForm.where.value,
            group:this.state.queryForm.groupBy.value,
            orderBy:this.state.queryForm.orderBy.value,
            limit:this.state.queryForm.limit.value,
            offset:this.state.queryForm.offset.value,
 
        }
        this.props.onSubmit(formData)
        this.setState({
            queryForm: ""
        })
    } 
    
    render(){

        //Create an  array of form elements with key value objects
      const formElementArray = [];
      for(let key in this.state.queryForm){
          formElementArray.push({
                id:key,
                config: this.state.queryForm[key]
          });
      }
      let button  = <Button btnType="Blue" disabled={!this.state.formIsValid} clicked={this.userInfoHandler}>Query Slice</Button>
      let form  =(
          <form onSubmit={this.userInfoHandler}>
             {formElementArray.map(formElement =>(
                    <Input
                          key={formElement.id}
                          elementType={formElement.config.elementType}
                          elementConfig={formElement.config.elementConfig}
                          value ={formElement.config.value}
                          invalid ={!formElement.config.valid}
                          shouldValidate = {formElement.config.validation}
                          touched={formElement.config.touched}
                          changed ={(event) => this.inputChangeHandler(event,formElement.id)} />

             ))}
            
             
             
          </form>
      );
     
    
      //Function to get all keys from an object array
    const columns = [{
        Header: 'census_tract_number',
        accessor:"census_tract_number"
    }, 
    {
        Header: 'census_tracts',
        accessor:"census_tracts"
    },{
        Header: 'county_code',
        accessor:"county_code"
    },{
        Header: 'msamd',
        accessor:"state_code"
    }]

      //Get keys from slice array
        return (
            <div className={classes.SliceInfo}>
                <p className={classes.Heading2}><span>Slice: </span>{this.props.dataset}</p>
                <h3 className={classes.Property}>Properties</h3>
                <p className={classes.Heading3}><span>Name: </span>{this.props.url}</p>
                <p className={classes.Heading3}><span>Description: </span>{this.props.url}</p>
                <p className={classes.Heading2}><span>Query Slice: </span>{this.props.url}</p>
                {form}
                {button}

                 <ReactTable data={this.props.table}  
                  columns={columns}/>
            </div>
     );
    }
    
}
const mapStateToProps = state=>{
    return{
 
    }
 };
 
 const mapDispatchToProps = dispatch =>{
     return{
         onSubmit:(formData) =>dispatch(actions.querySlice(formData))
     }
 }
 export default connect( mapStateToProps, mapDispatchToProps)(SliceInfo);

