import React from 'react';
import MainHeading from '../Components/MainHeading';
import LatestNewsCard from './Card/LatestNewsCard';

import '../Styles/LatestNews.css';

const latestNewsData = [
    {
        newsCategory: 'Design',
        newsLink: '/',
        imgLink: 'img/blog1.jpg',
        title: 'The 5 Secrets to Pulling Off Simple, Minimal Design',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.. ',
        buttonText: 'Read More'
    },
    {
        newsCategory: 'Design',
        newsLink: '/',
        imgLink: 'img/blog2.jpg',
        title: 'The 5 Secrets to Pulling Off Simple, Minimal Design',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.. ',
        buttonText: 'Read More'
    },
    {
        newsCategory: 'Design',
        newsLink: '/',
        imgLink: 'img/blog3.jpg',
        title: 'The 5 Secrets to Pulling Off Simple, Minimal Design',
        description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.. ',
        buttonText: 'Read More'
    }
]

const LatestNewsSec = () => {
  return (
    <section id='latestNews'>
      <div className="container">
        <MainHeading content='Latest News' bgText='News' />
        <div className="newsCardWrapper">
            {latestNewsData.map((newsData, key)=>{
                return <LatestNewsCard newsData={newsData} key={key} />
            })}
        </div>
      </div>
    </section>
  );
}

export default LatestNewsSec;
