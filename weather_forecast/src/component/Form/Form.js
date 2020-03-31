import React, { Component } from "react";
import { Button, FormControl } from "react-bootstrap";
import { AsyncTypeahead, Typeahead } from "react-bootstrap-typeahead";

export class Form extends Component {
  state = {
    country: "",
    searchText: ""
  };

  handleSubmit = async () => {};

  //Fetching cities after selecting country is pending
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 form-group">
              <Typeahead
                id="country"
                labelKey="EnglishName"
                options={this.props.countries}
                selectHintOnEnter={true}
                onChange={e => {
                  if (e.length != 0) {
                    this.setState({ country: e[0].EnglishName });
                  }
                }}
                placeholder="Country..."
              />
            </div>
            <div className="col-sm-4 form-group field">
              <FormControl
                id="city"
                type="text"
                name="city"
                onChange={e => this.setState({ searchText: e.target.value })}
                placeholder="  City... "
              />
            </div>
            <div className="col-sm-2 form-group field">
              <Button variant="primary" type="submit">
                {" "}
                Go{" "}
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
