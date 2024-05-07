import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import styles from './CookieBanner.module.scss'; // Import CSS module

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  // Check if the user has already accepted
  useEffect(() => {
    if (localStorage.getItem("cookieAccept")) {
      setShowBanner(false);
      if (JSON.parse(localStorage.getItem("cookieAccept")) === true) {
        ReactGA.initialize(import.meta.env.VITE_PUBLIC_GA_ID); // Your Google Analytics G-ID
      }
    }
  }, []);

  // Accept and set a local state
  const accept = () => {
    localStorage.setItem("cookieAccept", true);
    setShowBanner(false);
  };

  // Decline and set a local state
  const deny = () => {
    localStorage.setItem("cookieAccept", false);
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <section className={styles.cookie}> {/* Use CSS module class */}
          <p>
            Denne side bruger cookies til at analysere data trafik. For at
            optimere siden. Hvis du acceptere at dine data bruges til at
            forbedre brugeroplevelsen bedes du venligts trykke accepter. Ellers
            tryk afslå.
          </p>

          <div>
            <button onClick={() => accept()}>Accepter</button>
            <button onClick={() => deny()}>Afslå</button>
          </div>
        </section>
      )}
    </>
  );
};
