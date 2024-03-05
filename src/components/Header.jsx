import React from 'react';
import Nav from './Nav';
import HeaderImg from '../assets/Michael-Baxter.jpg';

export default function Header() {
  return (
    <div>
      <div className="bg-primary bg-gradient">
      <Nav />
      <div className="row-3 col-12 text-center bg-primary bg-gradient">
      <h1 className="mb-3 pt-5 pb-5" >
        Michael Baxter
        <img className="rounded mx-5 " alt="Michael Baxter Image" width="125px" height="100" src={HeaderImg}  />
      </h1> 
      </div>
      </div>
    </div>
  );
}

 // export default Header;
