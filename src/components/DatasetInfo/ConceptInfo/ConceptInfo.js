import React from 'react';
import classes from  './ConceptInfo.scss';

const conceptInfo = (props) => {

   

    //console.log(props.table)
    let  row  =  props.table.map( value => (    
             <tr key={value._id}>
              <td>{value._id}</td>
              <td>{value.name}</td>
            </tr>
        ));

    
    //console.log(row);
    return (
        <div className={classes.Conceptnfo}>
        <p className={classes.ConceptUrl}><span>Concept: </span>{props.url}</p>
        <h3 className={classes.Property}>Properties</h3>
        <div className={classes.Metadata}>
            <div className={classes.Metbox}>
                <h3>Description</h3>
                <p className={classes.description}>
                {props.description}</p>
            </div>
            <div className={classes.Metbox}>
              <h3>Type</h3>
               <p className={classes.description}>
                {props.type}</p>
            </div>
        </div> 

        <table>
            <thead>
                <tr>
                   <th>_id</th>
                   <th>name</th>
                </tr>
            </thead>
            <tbody>
            {row}
            </tbody>
        </table>

        
   </div>       
    )
}
export default conceptInfo;