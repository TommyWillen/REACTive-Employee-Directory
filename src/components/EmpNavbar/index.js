import React from "react";
import Navbar from 'react-bootstrap/Navbar'

function EmpNavbar() {
    return (
        <Navbar variant="dark" style={{backgroundColor: "#576d9b"}}>
        {/* <Container fluid> */}
          <Navbar.Brand className="mb-0 h1">Employee Directory</Navbar.Brand>
        {/* </Container> */}
      </Navbar>
    );
}

export default EmpNavbar;