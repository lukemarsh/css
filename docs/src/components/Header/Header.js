import React from 'react';
import { Link } from 'gatsby';
import Search from '../Search';

const searchIndices = [
  { name: `Content`, title: `Content`, hitComp: `PageHit` },
]

const Header = () => (
  <div className="Header position-sticky top-0">
    <div className="d-flex flex-items-center">
      <Link
        className="h4 text-bold"
        to="/"
      >
        CSS Design System
      </Link>
      <Search collapse indices={searchIndices} />
    </div>
  </div>
)

export default Header;
