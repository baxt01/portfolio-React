import React from 'react';
import Nav from './Nav';
import './Header.css'
import HeaderImg from '../assets/Michael-Baxter.jpg';

export default function Header() {
  return (
    <div className='header'>
      <div className="bg-primary bg-gradient">
      <Nav />
      <div className="row-3 col-12 text-center bg-primary bg-gradient">
      <h1 className="mb-2 pt-2 pb-2" >
        Michael Baxter
        <img className="rounded mx-5 " alt="Michael Baxter Image" width="75px" height="50" src={HeaderImg}  />
      </h1> 
      </div>
      </div>
    </div>
  );
}
