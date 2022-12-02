import React from 'react';
import '../Styles/Gallery.css'

const galleryImg = [
  {
    imgLink: 'img/gallery1.jpg',
    imgTitle: 'Gallery Image 01'
  },
  {
    imgLink: 'img/gallery2.jpg',
    imgTitle: 'Gallery Image 02'
  },
  {
    imgLink: 'img/gallery1.jpg',
    imgTitle: 'Gallery Image 01'
  },
  {
    imgLink: 'img/gallery3.jpg',
    imgTitle: 'Gallery Image 03'
  },
  {
    imgLink: 'img/gallery4.jpg',
    imgTitle: 'Gallery Image 04'
  },
  {
    imgLink: 'img/gallery5.jpg',
    imgTitle: 'Gallery Image 05'
  }
]

const Gallery = () => {
  return (
    <div id='gallery'>
      {galleryImg.map((Img, key)=>{
        return  <div className="imgBox" key={key}>
                  <img src={Img.imgLink} alt={Img.Title} />
                </div>
      })}
    </div>
  );
}

export default Gallery;
