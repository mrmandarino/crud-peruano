import React from 'react';

import Logout from '../Logout';
import Datalist from './Datalist';


const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header className="header">
      <h1>Employee Management Software</h1>
      <div >
        <button onClick={() => setIsAdding(true)}>Add Employee</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
        <Datalist/>
      </div>
    </header>
  );
};

export default Header;
