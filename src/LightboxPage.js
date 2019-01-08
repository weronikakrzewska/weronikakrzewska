import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";

class LightboxPage extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg'
  ]
}

renderImages = () => {
  let photoIndex = -1;
  const { images } = this.state;

return images.map(imageSrc => {
  photoIndex++;
  const privateKey = photoIndex;
  return (
    <MDBCol md="4" key={photoIndex}>
      <figure>
        <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={()=>
        this.setState({ photoIndex: privateKey, isOpen: true })
        }
        />
      </figure>
    </MDBCol>
    );
  })
}

render() {
const { photoIndex, isOpen, images } = this.state;
  return (
      <MDBContainer className="mt-5">
        <div className="mdb-lightbox">
          <MDBRow>
            {this.renderImages()}
          </MDBRow>
        </div>
        {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          imageTitle={photoIndex + 1 + "/" + images.length}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default LightboxPage;