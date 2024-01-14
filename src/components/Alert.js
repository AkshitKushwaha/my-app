import React from 'react'

//different properties of alert object can be accessed as below.

//NOTE:- "props.alert && " means saying "if props.alert is not null-> do this..."

//Added a captialize function to capitalize first letter of success

export default function Alert(props) {

  const capitalize = (word)=> {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
)
}
