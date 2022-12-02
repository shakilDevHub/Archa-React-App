import React from 'react';
import HeroSecondary from '../../Components/HeroSecondary'
import BlogsCardsWrapper from './BlogsCardsWrapper';

import '../../Styles/Blogs.css';

const Blogs = () => {
  return (
    <>
      <HeroSecondary bannerBg='img/blog-banner.jpg' bannerTitle='Our Blogs' />
      <BlogsCardsWrapper />
    </>
  );
}

export default Blogs;
