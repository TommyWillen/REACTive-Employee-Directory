import React from "react";
import Table from "react-bootstrap/Table"

function EmployeeTable(props) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Profile Pic</th>
          <th>First     <span onClick={props.sortByFirstName}>&#8595;</span></th>
          <th>Last     <span onClick={props.sortByLastName}>&#8595;</span></th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
          {props.children}
      </tbody>
    </Table>
  );
}

export default EmployeeTable;
