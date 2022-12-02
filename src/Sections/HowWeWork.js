import React from 'react';
import HowWeWorkCard from '../Components/Card/HowWeWorkCard';
import MainHeading from '../Components/MainHeading'
import '../Styles/HowWeWork.css'

let howWeWorkData = [
  {
    number: '01',
    title: 'Concept',
    description: 'Far far away, behind the word far from the countries Vokalia and Consonantia, there live.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Far far away, behind the word far from the countries Vokalia and Consonantia, there live.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Far far away, behind the word far from the countries Vokalia and Consonantia, there live.',
  }
]

const HowWeWorkCompo = howWeWorkData.map((HowWeWorkCardData, key)=>{
  return <HowWeWorkCard HowWeWorkCardData={HowWeWorkCardData} key={key} />
})

const HowWeWork = () => {
  return (
    <section id="howWeWork">
      <div className="container">
        <MainHeading content='How we work' bgText='WORK' />
        <div className='workBox'>
          {HowWeWorkCompo}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
