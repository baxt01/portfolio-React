import React from 'react';
import Nav from './Nav';
import './Header.css'
import HeaderImg from '../assets/Michael-Baxter.jpg';

export default function Header() {
  return (
    <div className='header'>
      <div>
      <Nav />
      <div className="row-3 col-12 text-center">
      <h1 className="pt-2 pb-3" >
        Michael Baxter
        <img className="Himg mx-5 " alt="Michael Baxter Image" width="75px" height="75" src={HeaderImg}  />
      </h1> 
      </div>
      </div>
    </div>
  );
}
