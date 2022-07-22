import { useSelector } from "react-redux";
import Styles from "./Description.module.css"
import UpperPart from "./UpperPart";
import LowerPart from "./LowerPart";
import BottomPart from "./BottomPart";
import BlackSlider from "../Landing page/bannerslider/blackSlider";

const Description = () => {
    const Desdata = useSelector((state) => state.descriptionData);
    console.log(Desdata, "desdata")
    return <>
     <div style={{ width:"100%", marginTop:"80px"} }>
       <div className={Styles.blackdiv}>
      <BlackSlider />
    </div>
    </div>
        <div className={Styles.maindiv}>
            <div className={Styles.imgdiv}>
                ,<img src={Desdata.thumbnail} alt="" />
            </div>
            <div className={Styles.infodiv}>
                <UpperPart {...Desdata} />
                <LowerPart />
            </div>
        </div>
        <div className={Styles.btmdiv}>
            <BottomPart />
        </div>
    </>
}


export default Description