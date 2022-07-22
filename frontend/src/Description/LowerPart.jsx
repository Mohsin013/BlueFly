import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { card_data } from "../Redux/Data/Action";
import styles from "./Lowerpart.module.css"

const LowerPart = () => {

    const Desdata = useSelector((state) => state.descriptionData);
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleClick = (payload) => {
        card_data(dispatch, payload);
    }

    return <>
        <div className={styles.lowerdiv}>
            <p style={{ marginBottom: "0" }}>SIZE</p>
            <h6>(Please reference sizing images on a product if available; if unavailable please use our size and conversion guide for proper sizing.)</h6>
            <div className={styles.sizediv}>
                <h4>S</h4>
                <h4>M</h4>
                <h4>L</h4>
                <h4>X</h4>
                <h4>Xl</h4>
                <h4>XXL</h4>
            </div>

            <h3>Colors : Dark Blue / Olive Green / White/Black / Mustard</h3>
        </div>

        <button className={styles.btn} onClick={() => {
            navigate("/cart")
            handleClick(Desdata)
        }}>ADD TO CART</button>


    </>
}


export default LowerPart