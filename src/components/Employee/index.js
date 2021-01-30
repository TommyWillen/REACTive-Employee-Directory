import React from "react";


function Employee(props) {
    return (
        <tr>
        <td scope="row"><img src={props.thumbnail} /></td>
        <td>{props.first}</td>
        <td>{props.last}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
      </tr>
    );
}

export default Employee;