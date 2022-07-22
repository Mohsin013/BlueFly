import styles from "../home.module.css";
const ShopCat = () => {
  return (
    <div className={styles.ShopCat}>
      <h1>shop by category</h1>
      <div className={styles.ShopCatdiv}>
        <div>
          <div>
            <img src="./images/categoryImg/top.jpg" alt="top" />
          </div>
          <p>dresses</p>
        </div>
        <div>
          <div>
            <img src="./images/categoryImg/sandle.jpg" alt="top" />
          </div>
          <p>pumps & heels</p>
        </div>
        <div>
          <div>
            <img src="./images/categoryImg/bag.jpg" alt="top" />
          </div>
          <p>handbags</p>
        </div>
        <div>
          <div>
            <img src="./images/categoryImg/goggles.jpg" alt="top" />
          </div>
          <p>sunglasses</p>
        </div>
        <div>
          <div>
            <img src="./images/categoryImg/shoe.jpg" alt="top" />
          </div>
          <p>women's sneakers</p>
        </div>
        <div>
          <div>
            <img src="./images/categoryImg/sneakers.jpg" alt="top" />
          </div>
          <p>men's sneakers</p>
        </div>
        <div>
          <div>
            <img src="./images/categoryImg/tshirt.jpg" alt="top" />
          </div>
          <p>men's t-shirts</p>
        </div>
        <div>
          <div>
            <img src="./images/categoryImg/night.jpg" alt="top" />
          </div>
          <p>women's top</p>
        </div>
        <div>
          <div>
            <img src="./images/categoryImg/jeans.jpg" alt="top" />
          </div>
          <p>women's denim</p>
        </div>
        <div>
          <div>
            <img src="./images/categoryImg/ring.jpg" alt="top" />
          </div>
          <p>jewelry</p>
        </div>
      </div>
    </div>
  );
};
export default ShopCat;
