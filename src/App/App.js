import React from "react";
import {SeasonDisplay} from '../SeasonDisplay/index'
import {Loader} from '../Loader/index'
import {ErrorMessage} from '../ErrorModal/index'

export class App extends React.Component {
 state = {latitude: null, errorMsg: ''};
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        position =>this.setState({ latitude: position.coords.latitude}),
        err => this.setState({ errorMsg: err.message,})  
      );
  }

  render() {
    return (
      <div>
          {!this.state.latitude && !this.state.errorMsg  && <Loader/>}
         {this.state.latitude && <SeasonDisplay lat = {this.state.latitude} />}
         {this.state.errorMsg && <ErrorMessage ErrorMessage ={this.state.errorMsg} /> }
      </div>
    );
  }
}
