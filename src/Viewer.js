import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import * as p5 from 'p5';
import "react-p5-wrapper/node_modules/p5/lib/addons/p5.dom.js";

class Viewer extends Component {
  render() {
    return (
        <P5Wrapper sketch={sketch} />
    );
  }
}

export function sketch (p) {
  let rotation = 0;

  let video;

  p.setup = function () {
    let canvas = p.createCanvas(0,0);
    //canvas.parent('root');
    video = p.createCapture({
      audio: false,
      video: {
        facingMode: "user"
      }
    });
    video.size(p.windowWidth, p.windowHeight);
    video.position(0,0);
  };

  /*p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };*/

  p.windowResized = function () {
    resizeCanvas(windowWidth, windowHeight);
  }

  p.draw = function () {
    console.log(video.get(40,20));
  };
};

export default Viewer;