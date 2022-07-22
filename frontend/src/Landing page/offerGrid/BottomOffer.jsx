import styles from "../home.module.css";
const BottomOffer = () => {
  return (
    <div className={styles.BottomOffer}>
      <div>
        <div className={styles.jeans}></div>
        <h4>UP TO 85% OFF THE DENIM SHOP FOR HIM & HER</h4>
        <p>From Hudson Jeans, Joe's Jeans, J Brand & More</p>
        <button className={styles.whitebutton}>shop denim</button>
      </div>

      <div>
        <div className={styles.girl}></div>
        <h4>UP TO 80% OFF LIGHTWEIGHT JACKETS & COATS</h4>
        <p>Must-Haves From Cole Haan, Burberry, & More</p>
        <button className={styles.whitebutton}>shop outerwear</button>
      </div>

      <div>
        <div className={styles.mobile}></div>
        <h4>UP TO 90% OFF WOMEN'S MUST-HAVE ACCESSORIES</h4>
        <p>Shop Wallets, Belts, Hats, Sunglasses & More</p>
        <button className={styles.whitebutton}>shop women's accessories</button>
      </div>
    </div>
  );
};
export default BottomOffer;
