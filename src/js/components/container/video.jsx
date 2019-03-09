import React, { Component } from "react";
import ReactDOM from "react-dom";
import {EVENTS} from './../../core/events.js'

class Video extends Component {
    constructor(props) {
      super(props);
      this._videoElementRef = React.createRef();
    }

    _onVideoElementLoad(){
      this.props.onVideoElementLoad(this._videoElementRef.current);
    }

    componentDidMount(){
      if (this._videoElementRef.current){
        this._onVideoElementLoad();
      }
    }

    render() {
      return (
        <React.Fragment>
            <video ref={this._videoElementRef} src={this.props.config.src} autoPlay controls playsInline></video>
        </React.Fragment>
      );
    }
  }
  export {Video};