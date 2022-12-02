import React from 'react';
import BlogCard from './BlogCard';

const BlogsData = [
  {
    blogLink: '/',
    imgLink: 'img/blog1.jpg',
    title: 'The 5 Secrets to Pulling Off Simple, Minimal Design',
    description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.. ',
    buttonText: 'Read More'
  },
  {
    blogLink: '/',
    imgLink: 'img/blog2.jpg',
    title: 'The 5 Secrets to Pulling Off Simple, Minimal Design',
    description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.. ',
    buttonText: 'Read More'
  },
  {
    blogLink: '/',
    imgLink: 'img/blog3.jpg',
    title: 'The 5 Secrets to Pulling Off Simple, Minimal Design',
    description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.. ',
    buttonText: 'Read More'
  },
  {
    blogLink: '/',
    imgLink: 'img/blog1.jpg',
    title: 'The 5 Secrets to Pulling Off Simple, Minimal Design',
    description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.. ',
    buttonText: 'Read More'
  },
  {
    blogLink: '/',
    imgLink: 'img/blog2.jpg',
    title: 'The 5 Secrets to Pulling Off Simple, Minimal Design',
    description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.. ',
    buttonText: 'Read More'
  },
  {
    blogLink: '/',
    imgLink: 'img/blog3.jpg',
    title: 'The 5 Secrets to Pulling Off Simple, Minimal Design',
    description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.. ',
    buttonText: 'Read More'
  },
  {
    blogLink: '/',
    imgLink: 'img/blog1.jpg',
    title: 'The 5 Secrets to Pulling Off Simple, Minimal Design',
    description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.. ',
    buttonText: 'Read More'
  },
  {
    blogLink: '/',
    imgLink: 'img/blog2.jpg',
    title: 'The 5 Secrets to Pulling Off Simple, Minimal Design',
    description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.. ',
    buttonText: 'Read More'
  },
  {
    imgLink: 'img/blog3.jpg',
    title: 'The 5 Secrets to Pulling Off Simple, Minimal Design',
    description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.. ',
    buttonText: 'Read More'
  }
]

const BlogCardCompo = BlogsData.map((BlogData, key)=>{
  return  <BlogCard BlogData={BlogData} key={key} />
})

const BlogsCardsWrapper = () => {
  return (
    <section id='blogsSec'>
      <div className="container">
        {BlogCardCompo}
      </div>
    </section>
  );
}

export default BlogsCardsWrapper;
