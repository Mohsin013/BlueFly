import styles from "../home.module.css";
import { Carousel } from "react-bootstrap";

const BottomSlider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item
          interval={2500}
          style={{
            height: "400px",
            overflowY: "hidden",
          }}
        >
          <img
            className="d-block brightness image-fit"
            style={{ width: "100%" }}
            src="./images/banner img/Bottega_Veneta.jpg"
            alt="First slide"
          />
          {/* <div
            style={{
              backgroundImage: "url(./images/banner img/Bottega_Veneta.jpg)",
              height: "200px",
              width: "100%",
            }}
          > 
            khfsdhfk 
          </div> */}
          <Carousel.Caption style={{ position: "absolute", bottom: "20%" }}>
            <h1 className={styles.bannerh1}>Bottega Veneta</h1>
            <h1 className={styles.bannerh1}>up to 65% off</h1>
            <p className={styles.bannerp}>
              UNSURPASSED CRAFTSMANSHIP & THE SIGNATURE WOVEN LEATHER
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item
          interval={2500}
          style={{ height: "400px", overflowY: "hidden" }}
        >
          <img
            className="d-block brightness image-fit"
            style={{ width: "100%" }}
            src="./images/banner img/gucci.jpg"
            alt="Third slide"
          />

          <Carousel.Caption style={{ position: "absolute", bottom: "20%" }}>
            <h1 className={styles.bannerh1}>gucci</h1>
            <h1 className={styles.bannerh1}>up to 70% off</h1>
            <p className={styles.bannerp}>
              THIS ICONIC BRAND IS REPRESENTED WITH GREAT DESIGN & CONTEMPORARY
              LIFESTYLE
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={2500}
          style={{ height: "400px", overflowY: "hidden" }}
        >
          <img
            className="d-block brightness image-fit"
            style={{ width: "100%" }}
            src="./images/banner img/Prada.jpg"
            alt="Third slide"
          />

          <Carousel.Caption style={{ position: "absolute", bottom: "20%" }}>
            <h1 className={styles.bannerh1}>PRADA</h1>
            <h1 className={styles.bannerh1}>up to 75% off</h1>
            <p className={styles.bannerp}>
              AN ITALIAN FASHION HOUSE MADE WITH classNameIC & ECCENTRIC STYLE
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BottomSlider;
