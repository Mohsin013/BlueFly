import styles from "../home.module.css";

const BannerGrid = () => {
  return (
    <div className={styles.bannerGrid}>
      {/* <div className={styles.bannerGrid1}>
        <div>
          <p>dresses for every occasion</p>
          <h1>Up to 94% off</h1>
          <p>Featuring BCBGMaxazria, Halston, Kay Unger & More</p>
        </div>
      </div>
      <div className={styles.bannerGrid2}>
        <div>
          <p>Designer Boutique</p>
          <h1>Up to 84% Off</h1>
          <p>
            Best-Selling Styles from: Gucci, Valentino, Balenciaga, Stuart
            Weitzman & More
          </p>
        </div>
      </div>
      <div className={styles.bannerGrid3}>
        <div>
          <p>Trending Tops for the new season</p>
          <h1>Up to 85% Off</h1>
          <p>Featuring Gracia, Theory, Trina Turk & More</p>
        </div>
      </div>*/}

      <div className="card">
        <img
          className="card-img"
          src="./images/sliderBottom/1.jpg"
          style={{ height: "100%", width: "auto" }}
          alt="Cardimage"
        />
        <div className="card-img-overlay">
          {/* <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p> */}
          <p className={styles.upperbold}>dresses for every occasion</p>
          <h1>Up to 94% off</h1>
          <p>Featuring BCBGMaxazria, Halston, Kay Unger & More</p>
        </div>
      </div>

      <div className="card">
        <img
          className="card-img"
          src="./images/sliderBottom/2.jpg"
          style={{ height: "100%", width: "auto" }}
          alt="Cardimage"
        />
        <div className="card-img-overlay">
          {/* <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p> */}
          <p className={styles.upperbold}>Designer Boutique</p>
          <h1>Up to 84% Off</h1>
          <p>
            Best-Selling Styles from: Gucci, Valentino, Balenciaga, Stuart
            Weitzman & More
          </p>
        </div>
      </div>

      <div className="card">
        <img
          className="card-img"
          style={{ height: "100%", width: "auto" }}
          src="./images/sliderBottom/3.jpg"
          alt="Cardimage"
        />
        <div className="card-img-overlay">
          {/* <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p> */}

          <p className={styles.upperbold}>Trending Tops for the new season</p>
          <h1>Up to 85% Off</h1>
          <p>Featuring Gracia, Theory, Trina Turk & More</p>
        </div>
      </div>
    </div>
  );
};
export default BannerGrid;
