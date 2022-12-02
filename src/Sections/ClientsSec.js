import React from 'react';
import ClientCard from '../Components/Card/ClientCard';
import '../Styles/ClientsSec.css';

const clientNumData = [
  {
    num: 175,
    description: 'Clients'
  },
  {
    num: 175,
    description: 'Clients'
  },
  {
    num: 175,
    description: 'Clients'
  },
  {
    num: 175,
    description: 'Clients'
  },
  {
    num: 175,
    description: 'Clients'
  }
]

const clientNum =  clientNumData.map((clientNum, key)=>{
  const {num, description} = clientNum;
  return <ClientCard num={num} description={description} key={key} />
})

const ClientsSec = () => {
  return (
    <section id='count'>
      <div className="container">
        {clientNum}
      </div>
    </section>
  );
}

export default ClientsSec;
