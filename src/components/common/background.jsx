import React, { Component } from "react";
import NET from "vanta/dist/vanta.net.min";
import BannerImage from "../../assets/ITCbanner.png";

class FogComponent extends Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xffffff,
      backgroundColor: 0x0,
      spacing: 17.0,
    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    return (
      <div className="h-full w-full" ref={this.vantaRef}>
        {this.props.children}
        <img
          className="opacity-30 top-0 right-0 absolute w-full h-full object-cover"
          src={BannerImage}
          alt=""
        />
      </div>
    );
  }
}

export default FogComponent;
