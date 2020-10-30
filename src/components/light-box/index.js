import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export default class LightboxExample extends Component {

  render() {
    const { days, isOpenPicture, photoIndex, closePicture, handleMovePrevRequest, handleMoveNextRequest } = this.props;

    return (
      <div>
        {isOpenPicture ? (<Lightbox
            mainSrc={require(`${days[photoIndex].url}`)}
            nextSrc={require(`${days[(photoIndex + 1) % days.length].url}`)}
            prevSrc={require(`${days[(photoIndex + days.length - 1) % days.length].url}`)}
            onCloseRequest={() => closePicture()}
            onMovePrevRequest={() => handleMovePrevRequest(photoIndex, days)}
            onMoveNextRequest={() => handleMoveNextRequest(photoIndex, days)}
            imageTitle={days[photoIndex].date}
            clickOutsideToClose={true}
          />) : null}
      </div>
    );
  }
}