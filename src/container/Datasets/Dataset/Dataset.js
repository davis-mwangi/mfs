import React, { Component} from 'react';
import classes from './Dataset.scss';
import Button from '../../../components/UI/Button/Button';

class DataSet extends Component {

   render(){
    if(!this.props.loading){
        console.log(this.props.datasets)

    } 

    let stripeTags = this.props.description.replace(/<\/?[^>]+>/gi, '');
     return (
        <div className={classes.Dataset} >
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">
        <h3 className={classes.Heading}>{this.props.name}</h3></a>

        <p className={classes.Description}>{stripeTags}</p>
        <div className={classes.DatasetBtnBox}>
          <Button btnType ="DarkBlue" clicked={this.props.viewDetailsClicked}>View Details</Button>
        </div>      
    </div>
     );
   }
}


export default DataSet;



