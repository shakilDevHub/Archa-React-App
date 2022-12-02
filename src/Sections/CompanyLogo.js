import React from 'react';
import '../Styles/CompanyLogo.css';

const logoImgData = [
  {
    imgLink: 'img/company-logo.png',
    imgTitle: 'Lorem ipsum'
  },
  {
    imgLink: 'img/company-logo.png',
    imgTitle: 'Lorem ipsum'
  },
  {
    imgLink: 'img/company-logo.png',
    imgTitle: 'Lorem ipsum'
  },
  {
    imgLink: 'img/company-logo.png',
    imgTitle: 'Lorem ipsum'
  },
  {
    imgLink: 'img/company-logo.png',
    imgTitle: 'Lorem ipsum'
  }
]

const CompanyLogo = () => {
  return (
    <section id='companyLogo'>
      <div className="container">
        {
          logoImgData.map((ImageData, key)=>{
            const {imgLink, imgTitle} = ImageData;
            return  (<div className="imgBox" key={key} >
                      <img src={imgLink} alt={imgTitle} />
                    </div>)
          })
        }
      </div>
    </section>
  );
}

export default CompanyLogo;
