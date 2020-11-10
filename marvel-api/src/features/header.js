import React from 'react';

function Header() {
  return (
    <div className="headerWrapper">
      <h1>Marvel</h1>
      <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
      <i class="fas fa-search" aria-hidden="true"></i>
      <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
      aria-label="Search" />
    </form>
   </div>
  )
};

export default Header;