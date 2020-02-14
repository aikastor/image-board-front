import React from 'react';



const styles = {
  width: '100px',
  height: '100px',
  marginRight: '10px'
};

const ImageThumbnail = props => {
  let image = null;
  if (props.image) {
    image = 'http://localhost:8000/uploads/' + props.image;
  }

  return <img alt="image" src={image} style={styles} className="img-thumbnail"/>;
};

export default ImageThumbnail;