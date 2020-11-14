import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export default class LightboxExample extends Component {

  render() {
    const { days, isOpenPicture, photoIndex, closePicture, handleMovePrevRequest, handleMoveNextRequest } = this.props;
    const index = days.length && !days[photoIndex] ? days.length -1 : days.length && days[photoIndex] ? photoIndex : 0
    return (
      <div>
        {isOpenPicture ? (<Lightbox
            mainSrc={require(`${days[index].url}`)}
            nextSrc={require(`${days[(index + 1) % days.length].url}`)}
            prevSrc={require(`${days[(index + days.length - 1) % days.length].url}`)}
            onCloseRequest={() => closePicture()}
            onMovePrevRequest={() => handleMovePrevRequest(index, days)}
            onMoveNextRequest={() => handleMoveNextRequest(index, days)}
            imageTitle={days[index].date}
            clickOutsideToClose={true}
          />) : null}
      </div>
    );
  }
}