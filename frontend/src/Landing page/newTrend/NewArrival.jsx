import styles from "../home.module.css";
const NewArrived = () => {
  return (
    <div className={styles.NewArrived}>
      <h1>new arrivals</h1>
      <button className={styles.whitebutton}>view all</button>
      <div className={styles.NewArriveddiv}>
        <div>
          <div>
            <img src="./images/newArrived/1.jpg" alt="top" />
          </div>
          <p>"DIVA!" T-SHIRT</p>
          <div className={styles.prices}>
            <p className={styles.stikethrough}>$660</p>
            <p>from</p>
            <p>$415.23</p>
            <p className={styles.red}>Save 37%</p>
          </div>
        </div>
        <div>
          <div>
            <img src="./images/newArrived/2.jpg" alt="top" />
          </div>
          <p>"LA MEDUSA" RUBBER MULES</p>
          <div className={styles.prices}>
            <p className={styles.stikethrough}>$468</p>
            <p>from</p>
            <p>$355.26</p>
            <p className={styles.red}>Save 24%</p>
          </div>
        </div>
        <div>
          <div>
            <img src="./images/newArrived/3.jpg" alt="top" />
          </div>
          <p>"THE FLUORO MOTO SHOT" BAG</p>
          <div className={styles.prices}>
            <p className={styles.stikethrough}>$468</p>
            <p>from</p>
            <p>$331.39</p>
            <p className={styles.red}>Save 29%</p>
          </div>
        </div>
        <div>
          <div>
            <img src="./images/newArrived/4.jpg" alt="top" />
          </div>
          <p>'McQUEEN GRAFFITI' RUBBER SLIDERS</p>
          <div className={styles.prices}>
            <p className={styles.stikethrough}>$324</p>
            <p>from</p>
            <p>$253.73</p>
            <p className={styles.red}>Save 22%</p>
          </div>
        </div>
        <div>
          <div>
            <img src="./images/newArrived/5.jpg" alt="top" />
          </div>
          <p>#USETHEEXISTING™ SNEAKERS</p>
          <div className={styles.prices}>
            <p className={styles.stikethrough}>$594</p>
            <p>from</p>
            <p>$438.78</p>
            <p className={styles.red}>Save 26%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewArrived;
