import React, { Component } from "react";
import EmployeeTable from "../../components/EmployeeTable/index";
import Employee from "../../components/Employee/index";
import EmpNavbar from "../../components/EmpNavbar/index";
import Search from "../../components/Search/index";
import Container from "react-bootstrap/Container";
import API from "../../utils/API";

class Directory extends Component {
  state = {
    results: [],
    search: "",
    sortOrder: ""
  };

  componentDidMount() {
    API.getUser()
      .then((res) => {
        this.setState({ results: res.data.results });
        console.log(this.state.results);
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    if (event.target.name === "search") {
      const searchVal = event.target.value.toLowerCase();
      this.setState({
        search: searchVal,
      });
    }
  };

  sortByFirstName = () => {
    const empSort = this.state.results.sort((a, b) => {
      a.name.first.toLowerCase().localeCompare(b.name.first.toLowerCase());
    });

    if (this.state.sortOrder === "down") {
      empSort.reverse();
      this.setState({ sortOrder: "up" });
    } else {
      this.setState({ sortOrder: "down" });
    }
    this.setState({ results: empSort });
  };

  sortByLastName = () => {
    const empSort = this.state.results.sort((a, b) => {
      a.name.last.toLowerCase().localeCompare(b.name.last.toLowerCase());
    });

    if (this.state.sortOrder === "down") {
      empSort.reverse();
      this.setState({ sortOrder: "up" });
    } else {
      this.setState({ sortOrder: "down" });
    }
    this.setState({ results: empSort });
    
  };

  render() {
    return (
      <div>
        <Container>
          <EmpNavbar />
          <Search
            handleInputChange={this.handleInputChange}
            search={this.state.search}
          />
          <EmployeeTable sortByFirstName={this.sortByFirstName} sortByLastName={this.sortByLastName}>
            {this.state.results && this.state.results.map((item) =>
              item.name.first.toLowerCase().includes(this.state.search) ? (
                <Employee key={item.login.uuid} first={item.name.first} last={item.name.last} phone={item.phone} email={item.email} thumbnail={item.picture.thumbnail} />
              ) : item.name.last.toLowerCase().includes(this.state.search) ? (
                <Employee key={item.login.uuid} first={item.name.first} last={item.name.last} phone={item.phone} email={item.email} thumbnail={item.picture.thumbnail}/>
              ) : null
            )}
          </EmployeeTable>
        </Container>
      </div>
    );
  }
}

export default Directory;
