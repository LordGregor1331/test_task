import React, { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  prevSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0 ? this.props.images.length - 1 : prevState.currentIndex - 1,
    }));
  };

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === this.props.images.length - 1 ? 0 : prevState.currentIndex + 1,
    }));
  };

  render() {
    const images = this.props.images || [];
    const { currentIndex } = this.state;

    return (
      <div className="slider">
        <button onClick={this.prevSlide} className="slider-button">
          &#8592;
        </button>
        <div className="slider-container">
          {images.length > 0 ? (
            <img
              src={images[currentIndex].original}
              alt=""
              className="slider-image"
            />
          ) : (
            <p>No data</p>
          )}
        </div>
        <button onClick={this.nextSlide} className="slider-button">
          &#8594;
        </button>
      </div>
    );
  }
}

export default Slider;
