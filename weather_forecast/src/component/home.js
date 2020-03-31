import React, { Component } from "react";
import Form from "./Form/Form";
import WeatherDetails from "./Weather/WeatherDetails";
import * as Const from "../types/Constants";
import axios from "axios";

const location = Const.locationAPIUrl;
const apikey = Const.apiKey;

export class Home extends Component {
  state = {
    weather: {
      error: ""
    },
    countries: [],
    city: null
  };

  getCountries = () => {
    axios
      .get(`${location}/countries?apikey=${apikey}`)
      .then(resp => {
        this.setState({ countries: resp.data });
        console.log(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getCountries();
  }

  render() {
    return (
      <div className="container content panel">
        <div className="container">
          <div className="row">
            <div className="form-container">
              <WeatherDetails weather={this.state.weather} />
              <Form countries={this.state.countries} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
