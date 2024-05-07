import React from 'react';
import styles from './Main.module.scss';
import coffeeBeansImage from '../../Assets/images/coffee_beans.jpg';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>We Love Coffee </h1>
          <h1>And all the people who made it</h1>
        </div>
        <img src={coffeeBeansImage} alt="Coffee Beans" />
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <h2>The right beans</h2>
          <p>Our journey begins with a deep-rooted connection to the land,
            as we seek out farmers who uphold enviromentally-friendly 
            åractices and prioritize the well-being of their
            communities. Through personal relationships and mutual
            rescept, we collaborate closely with these farmers,
            understanding their methods and values.
          </p>
          <img src="src/Assets/images/beans_hand.jpg" alt="Coffee beans in hand" />
        </div>
        <div className={styles.gridItem}>
          <h2>Carefully handled</h2>
          <p>Each bean is carefully handpicked at the peak of ripeness,
            ensuring optimal flavor and aroma. We embrace diversity in 
            our selection, cherishing the unique charasteristics of each
            region and varietal. From the lush mountainsides to the sunkissed
            valleys, we travere the landscapes in search of perfection.
             </p>
          <img src="src/Assets/images/coffee_beans_in_stack.jpg" alt="Coffee beans bags in stack" />
        </div>
        <div className={styles.gridItem}>
          <h2>From us to you</h2>
          <p>Our communities to organic farming means that our beans are
            free from harmful chemicals, allowing the natural flavors to
            shine through. We believe in transparency and traceability,
            providing our customers with a genuine connection to the 
            origins of their coffee.
          </p>
          <img src="src/Assets/images/coffee_in_hands.jpg" alt="Image" />
        </div>
      </div>

      <div className={styles.shopNow}>
        <h2>Shop now</h2>
        <p>Our delicious coffees will get you brewing the best cup of coffee you ever tasted
            in no time at all. And the best part of it? It is totally organic, 
            fair trade and sustainable sourced. So get brewing
        </p>
        <Link to="/products"> <button>Go to products</button></Link>
      </div>

      <div className={styles.testimonies}>
        <h2>Testimonies</h2>
        <div className={styles.testimonyGrid}>
          <div className={styles.testimony}>
            <h3>John</h3>
            <p>"Sunshine Coffee really delivers a great product.
              I love their coffee and the guided flow is great..."
              </p>
          </div>
          <div className={styles.testimony}>
            <h3>Eva</h3>
            <p>"Sunshine Coffee really delivers a great product.
              I love their coffee and the guided flow is great..."
              </p>
          </div>
          <div className={styles.testimony}>
            <h3>Peter</h3>
            <p>"Sunshine Coffee really delivers a great product.
              I love their coffee and the guided flow is great..."
              </p>
          </div>
          <div className={styles.testimony}>
            <h3>Michelle</h3>
            <p>"Sunshine Coffee really delivers a great product.
              I love their coffee and the guided flow is great..."
              </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
