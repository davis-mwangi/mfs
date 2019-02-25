import React, { Component } from 'react';
import Dataset from './Dataset/Dataset';
import classes  from './Datasets.scss';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';

class Datasets extends Component{

    componentDidMount(){
        this.props.onFetchDatasets()
    }
 
    viewDetailsHandler= (href)=>{
     console.log(href)
     this.props.history.push(href);
     this.props.onFetchDatasetInfo(href);     
     
     }
 
     render(){
         let datasets = <Spinner/>
         let datasetsArray = []
         if(!this.props.loading){
             
             this.props.datasets.forEach(value => {
                 
                 let obj = {};
                  obj["description"] = value.description;
                  obj["name"] = value.name;
                  obj["url"] = value.url; 
                  value._links.forEach(val => {
                   obj["rel"] =val.rel;
                   obj["href"] = val.href                
                  });
              
             // console.log(obj) 
             datasetsArray.push(obj) 
             }); 
            
             console.log(this.props.dataInfo)
            datasets = datasetsArray.map(dataset =>(
                     <Dataset
                     key={Math.random()*100}
                     name= {dataset.name}
                     url = {dataset.url}
                     description= {dataset.description}
                     href = {dataset.href}
                     viewDetailsClicked= {()=>this.viewDetailsHandler(dataset.href)}
                           
          />
              ))
          }
         return(
             <div className={classes.Datasets}>
                    {datasets}
             </div>
         );
        
     }
 }
 
 const mapStateToProps = state=>{
     return{
         datasets: state.dat.datasets,
         loading: state.dat.loading
     };
 };
 const mapDispatchToProps = dispatch =>{
     return{
         onFetchDatasets:() => dispatch(actions.fetchDatasets()),
         onFetchDatasetInfo: (dataUrl) => dispatch(actions.fetchDatasetInfo(dataUrl)),
     }
 }
 export default  connect(mapStateToProps,mapDispatchToProps) (Datasets);
   
 