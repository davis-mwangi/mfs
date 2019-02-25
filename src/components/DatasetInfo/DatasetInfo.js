import React, { Component } from 'react';
import { connect} from 'react-redux';

import classes from './DatasetInfo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/Button/Button';
import *as actions from '../../store/actions';

import ConceptInfo from './ConceptInfo/ConceptInfo';
import SliceInfo from './SliceInfo/SliceInfo';

class DatasetInfo extends Component {

    state = {
        clickedSet:  ""
    }


    conceptInfoHandler= (dataUrl)=>{
        console.log(dataUrl)
        this.props.history.replace(dataUrl);
        this.props.onFetchConceptInfo(dataUrl);
        this.setState({
            clickedSet: "concept"
        })     
        
    } 

    sliceInfoHandler= (dataUrl)=>{
        //console.log(dataUrl)
        this.props.history.replace(dataUrl);
        this.props.onFetchSliceInfo(dataUrl);
        this.setState({
            clickedSet: "slice"
        })     
        
    } 

    render(){

        let conceptName = null;
        if(!this.props.loading){
             conceptName = this.props.concepts.map(value =>(
             <li onClick={()=> this.conceptInfoHandler(value._links[0].href)} key ={value.id}><FontAwesomeIcon  className={classes.Icon} 
                icon={faAngleRight} />{value.description} </li> 
             ));
        }

        let sliceName =  null;
        if(!this.props.loading){
           sliceName=  this.props.slices.map(value => (
            <li onClick={()=> this.sliceInfoHandler(value._links[0].href)} key ={value.id}><FontAwesomeIcon  className={classes.Icon} icon={faAngleRight}/>{value.name}</li>
             ));
        }
        let data = [];
        if(!this.props.loading && "table" in this.props.conceptInfo ){
          data = this.props.conceptInfo.table.data
        }
        
     //console.log(this.props.sliceInfo.results)
        return (
            
           <div className={classes.DatasetInfo}>
               <div className={classes.SideNav}>
                  <h2 className={classes.HeaderSecondary}>Slices</h2>
                  <ul>
                     {sliceName}
                  </ul>
                  
                  <h2 className={classes.HeaderSecondary}>Concepts</h2>
                  <ul>
                    {conceptName}
                  </ul>
               </div>
               <div className={classes.Content}>
                    <div className={classes.DatasetContent}>
                         <h1 className={classes.Heading1}>{this.props.dataInfo.name}</h1>
                         <p className={classes.Description}>{this.props.dataInfo.description}</p>
                        <a href={this.props.dataInfo.url}   target="_blank" rel="noopener noreferrer"><Button btnType ="Green" >View Details</Button></a>
                         <div className={classes.Line}></div>
                    </div>
                    <div className={classes.SliceConceptContainer}>
                      {
                          this.state.clickedSet === "concept" ?
                          <ConceptInfo                            
                            description= {this.props.conceptInfo.description}
                            type={this.props.conceptInfo.type}
                            table ={data}
                            />
                          : <SliceInfo
                             dataset= {this.props.sliceInfo.dataset}
                             table ={this.props.sliceInfo.results}
                            /> 

                      }
                        
                    </div>
               </div>
           </div>
        );
    }
}
const mapStateToProps = state=>{
    return{
        dataInfo: state.datInfo.datasetInfo,
        loading: state.datInfo.loading,
        slices:  state.datInfo.slices,
        concepts: state.datInfo.concepts,
        conceptInfo: state.cpi.conceptInfo,
        sliceInfo: state.sci.sliceInfo
    };
  };

const mapDispatchToProps = dispatch => {
    return  {
        onFetchConceptInfo: (dataUrl) => dispatch(actions.fetchConceptInfo(dataUrl)),
        onFetchSliceInfo: (dataUrl) => dispatch(actions.fetchSliceInfo(dataUrl))
    }
}  
export default connect(mapStateToProps, mapDispatchToProps)(DatasetInfo);