import React from 'react';
import Search from '../Search';

const searchIndices = [
  { name: `Content`, title: `Content`, hitComp: `PageHit` },
]

const Header = () => (
  <div className="Header position-sticky top-0">
    <Search collapse indices={searchIndices} />
  </div>
)

export default Header;
