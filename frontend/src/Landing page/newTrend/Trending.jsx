import styles from "../home.module.css";
const Trending = () => {
  return (
    <div className={styles.NewArrived}>
      <h1>new arrivals</h1>

      <div className={styles.NewArriveddiv}>
        <div>
          <div>
            <img src="./images/trending/1.jpg" alt="top" />
          </div>
          <p>Stuart Weitzman Lowland Suede Over-The-Knee Boot</p>
          <div className={styles.prices}>
            <p className={styles.stikethrough}>$499</p>
            <p>from</p>
            <p>$248.98</p>
            <p className={styles.red}>Save 50%</p>
          </div>
        </div>
        <div>
          <div>
            <img src="./images/trending/2.jpg" alt="top" />
          </div>
          <p>Roxy Womens Down Winter Puffer Coat</p>
          <div className={styles.prices}>
            <p className={styles.stikethrough}>$795</p>
            <p>from</p>
            <p>$344.99</p>
            <p className={styles.red}>Save 66%</p>
          </div>
        </div>
        <div>
          <div>
            <img src="./images/trending/3.jpg" alt="top" />
          </div>
          <p>Valentino By Mario Valentino Mia Leather Crossbody</p>
          <div className={styles.prices}>
            <p className={styles.stikethrough}>$781</p>
            <p>from</p>
            <p>$578.05</p>
            <p className={styles.red}>Save 29%</p>
          </div>
        </div>
        <div>
          <div>
            <img src="./images/trending/4.jpg" alt="top" />
          </div>
          <p>Stuart Weitzman Jocey Suede Over-The-Knee Boot</p>
          <div className={styles.prices}>
            <p className={styles.stikethrough}>$324</p>
            <p>from</p>
            <p>$253.73</p>
            <p className={styles.red}>Save 22%</p>
          </div>
        </div>
        <div>
          <div>
            <img src="./images/trending/5.jpg" alt="top" />
          </div>
          <p>Stella McCartney Women's Elyse Platform Sneakers White</p>
          <div className={styles.prices}>
            <p className={styles.stikethrough}>$594</p>
            <p>from</p>
            <p>$438.78</p>
            <p className={styles.red}>Save 26%</p>
          </div>
        </div>
        <div>
          <div>
            <img src="./images/trending/6.jpg" alt="top" />
          </div>
          <p>Saint Laurent Tribute 75 Leather Platform Sandal</p>
          <div className={styles.prices}>
            <p className={styles.stikethrough}>$660</p>
            <p>from</p>
            <p>$415.23</p>
            <p className={styles.red}>Save 37%</p>
          </div>
        </div>
        <div>
          <div>
            <img src="./images/trending/7.jpg" alt="top" />
          </div>
          <p>Saint Laurent Tribute Leather Sandal</p>
          <div className={styles.prices}>
            <p className={styles.stikethrough}>$468</p>
            <p>from</p>
            <p>$355.26</p>
            <p className={styles.red}>Save 24%</p>
          </div>
        </div>
        <div>
          <div>
            <img src="./images/trending/8.jpg" alt="top" />
          </div>
          <p>
            I/VS .50Ct Diamond Screwback Studs Lab Grown Diamond Eco Friendly
            14K White Gold
          </p>
          <div className={styles.prices}>
            <p className={styles.stikethrough}>$468</p>
            <p>from</p>
            <p>$331.39</p>
            <p className={styles.red}>Save 29%</p>
          </div>
        </div>
        <div>
          <div>
            <img src="./images/trending/9.jpg" alt="top" />
          </div>
          <p>Bottega Veneta Flash Leather Bootie</p>
          <div className={styles.prices}>
            <p className={styles.stikethrough}>$324</p>
            <p>from</p>
            <p>$253.73</p>
            <p className={styles.red}>Save 22%</p>
          </div>
        </div>
        <div>
          <div>
            <img src="./images/trending/10.jpg" alt="top" />
          </div>
          <p>Saint Laurent Tribute 105 Patent Platform Sandal</p>
          <div className={styles.prices}>
            <p className={styles.stikethrough}>$594</p>
            <p>from</p>
            <p>$438.78</p>
            <p className={styles.red}>Save 26%</p>
          </div>
        </div>
      </div>
      <button className={styles.blackbotton}> view all</button>
    </div>
  );
};
export default Trending;
