// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from './NavBar.module.scss';
// import coffeeCupImage from '../../Assets/images/icons8-coffee-52.png';
// import cartIcon from '../../Assets/images/icons8-shopping-cart-50.png';
// import userIcon from '../../Assets/images/icons8-user-32.png';

// const NavBar = () => {
//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.circle}>
//         <div className={styles.content}>
//           <h3>Sunshine Coffee</h3>
//           <img src={coffeeCupImage} alt="Coffee Cup" className={styles.logo} />
//         </div>
//       </div>
//       <div className={styles.linksContainer}>
//       <Link to="/"> <button className={styles.button}>Europa</button></Link>
//         <Link to="/Cart" className={styles.link}>
//           <img src={cartIcon} alt="Cart" className={styles.icon} />
//         </Link>
//         <Link to="/Login" className={styles.link}>
//           <img src={userIcon} alt="User" className={styles.icon} />
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import coffeeCupImage from '../../Assets/images/icons8-coffee-52.png';
import cartIcon from '../../Assets/images/icons8-shopping-cart-50.png';
import userIcon from '../../Assets/images/icons8-user-32.png';
import Cart from '../../Pages/Cart/Cart';

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.circle}>
        <div className={styles.content}>
          <h3>Sunshine Coffee</h3>
          <img src={coffeeCupImage} alt="Coffee Cup" className={styles.logo} />
        </div>
      </div>
      <div className={styles.linksContainer}>
        <NavLink to="/" className={styles.button} activeClassName={styles.active}>Europa</NavLink>
        <NavLink to="/Cart" className={styles.link} activeClassName={styles.active} onClick={toggleCart}>
          <img src={cartIcon} alt="Cart" className={styles.icon} />
        </NavLink>
        <NavLink to="/Login" className={styles.link} activeClassName={styles.active}>
          <img src={userIcon} alt="User" className={styles.icon} />
        </NavLink>
      </div>
      {isCartOpen && <Cart />} {/* Render the Cart component when isCartOpen is true */}
    </nav>
  );
};

export default NavBar;

