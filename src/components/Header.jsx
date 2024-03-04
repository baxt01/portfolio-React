import React from 'react';
import Nav from './Nav';

export default function Header() {
  return (
    <div>
      <div className="bg-primary bg-gradient">
      <Nav />
      </div>
      <div className="row-3 col-12 text-center bg-primary bg-gradient">
      <h1 className="p display-1 mb-3 pt-5 pb-5" >
        Michael Baxter
      </h1> 
      </div>
    </div>
  );
}

// export default Header;
