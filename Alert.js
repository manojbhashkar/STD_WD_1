import React from 'react';

function Alert(props) {
  
  let word = (props?.alert?.type);
  let formet=word?.charAt(0).toUpperCase()+word?.slice(1);

  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show "  style={{background:"#CFD797"}} role="alert">
        <h3>{formet} : {props.alert.msg} </h3> 
        
    </div>
  )
}

export default Alert
