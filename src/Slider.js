import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
    this.onNext = _ => this.state.currentPage + 1 < Math.ceil(this.props.children.length / (this.props.slidesToShow || 1)) ? this.setState({currentPage: this.state.currentPage + 1}) : null;
    this.onPrev = _ => this.state.currentPage > 0 ? this.setState({currentPage: this.state.currentPage - 1}) : null;
  }

  render() {
    const {children, slidesToShow, containerStyle} = this.props;
    const {currentPage} = this.state;

    const numSlidesPerView = slidesToShow || 1;
    const setSize = Math.ceil(children.length / numSlidesPerView);
    const bottomIndex = currentPage * setSize;
    const topIndex = (currentPage + 1) * setSize;
    const showingChildren = children.filter((_, i) => i >= bottomIndex && i < topIndex);

    return (
      <div style={containerStyle} >
        <i
        className='fa fa-arrow-left'
        style={{
          color: currentPage === 0 ? 'lightgrey' : 'grey',
          cursor: 'pointer',
          userSelect: 'none',
          fontSize: '1.2em',
        }}
        onClick={this.onPrev}
        aria-hidden='true'
        />
        <div className='vertical-center'>
        {showingChildren.map((child, i) => <div key={`photo-${i}`} style={{margin: 5}} >{child}</div>)}
        </div>
        <i
        className='fa fa-arrow-right'
        style={{
          color: currentPage + 1 === setSize ? 'lightgrey' : 'grey',
          cursor: 'pointer',
          userSelect: 'none',
          fontSize: '1.2em',
        }}
        onClick={this.onNext}
        aria-hidden='true'
        />
      </div>
      );
  }
}

export default Slider;
