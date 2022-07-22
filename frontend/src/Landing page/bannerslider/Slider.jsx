import styles from "../home.module.css";
import { Carousel } from "react-bootstrap";

const Slider = () => {
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
            src="./images/banner img/Designer_Shoes.jpg"
            alt="Second slide"
          />

          <Carousel.Caption style={{ position: "absolute", bottom: "20%" }}>
            <h1 className={styles.bannerh1}>DESIGNER SHOES</h1>
            <p className={styles.bannerp}>
              Step Into The New Season With New Designer Shoes
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
            <p className={styles.bannerp}>
              AN ITALIAN FASHION HOUSE MADE WITH classNameIC & ECCENTRIC STYLE
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
            src="./images/banner img/saint_laurent.jpg"
            alt="Third slide"
          />

          <Carousel.Caption style={{ position: "absolute", bottom: "20%" }}>
            <h1 className={styles.bannerh1}>LUXE HANDBAGS</h1>
            <p className={styles.bannerp}>
              Styles from Gucci, Prada, Saint Laurent, Bottega Veneta, Fendi &
              More
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
            src="./images/banner img/sunglasses1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption style={{ position: "absolute", bottom: "20%" }}>
            <p className={styles.topcaption}>Sunnies For Him & Her</p>
            <h1 className={styles.bannerh1}>ICONIC SUNGLASSES</h1>
            <p className={styles.bannerp}>
              Featuring Dior, Tom Ford, Fendi & More
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
            src="./images/banner img/Valentino.jpg"
            alt="Third slide"
          />

          <Carousel.Caption
            interval={2500}
            style={{ position: "absolute", bottom: "20%" }}
          >
            <h1 className={styles.bannerh1}>World Of Valentino</h1>
            <p className={styles.bannerp}>
              Shop Handbags, Shoes, Apparel, Accessories & More
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
