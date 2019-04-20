import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';

export const Sidebar =  props => {
  return (
    <Menu>
      <a className="menu-item" href="/ Html">
        Html
      </a>

      <a className="menu-item" href="/css">
      css
      </a>

      <a className="menu-item" href="/Jav-script">
        Jav-script
      </a>

      <a className="menu-item" href="/Node">
        Node
      </a>

      <a className="menu-item" href="/ Database">
        Database
      </a>

      <a className="menu-item" href="/React">
        React
      </a>
    </Menu>
    
  );
};