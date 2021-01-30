import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from "react-bootstrap/Form"
 

import InputGroup from "react-bootstrap/InputGroup"


function Search(props) {
    return (
        <Row>
        <Col>
        <InputGroup>
  <InputGroup.Prepend>
    <InputGroup.Text>Search</InputGroup.Text>
  </InputGroup.Prepend>
  <Form.Control type="text" placeholder="Type here to search for an employee" onChange={props.handleInputChange} value={props.search} name="search"/>
</InputGroup>
        </Col>
      </Row> 
    );
}

export default Search;