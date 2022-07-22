import styles from "../home.module.css";
import { Carousel } from "react-bootstrap";

const BlackSlider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2000}>
          <div
            className={styles.BlackSlidermargin}
            style={{
              display: "flex",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              height: "100%",
              width: "100%",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Free shipping
            </p>
            <p>On Orders Over $99</p>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div
            className={styles.BlackSlidermargin}
            style={{
              display: "flex",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Welcome to Bluefly:
            </p>
            <p>Luxury brands at discounted prices</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BlackSlider;
