import React from 'react';
import logo from '../assets/images/planet.png';

const Navigation = () => (
  <header>
    <nav className="navigation">
      <div className="brand">
        <img className="logo" src={logo} alt="logo" />
        <span> Space Travelers&apos; Hub</span>
      </div>
    </nav>
  </header>

);

export default Navigation;

// import React from 'react';

// const Navigation = () => {
//   <header>
//     <nav className="navigation">
//       Menu will go here
//     </nav>
//   </header>;
// };

// export default Navigation;
