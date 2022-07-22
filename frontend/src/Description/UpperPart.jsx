import styles from "./Upperpart.module.css"

const UpperPart=(props)=>{
    return <>
     <div className={styles.upperdiv}>
        <h2>{props.condition}</h2>
        <h1>{props.title}</h1>
        <div className={styles.pdiv}>
        <p className={styles.ptag}>${props.price.extracted.$numberDecimal}</p>
        <p>{props.price.raw}</p>
        </div>
       <h5>FREE SHIPPING ON ORDERS OVER $99</h5>
     </div>
    </>
}


export default UpperPart