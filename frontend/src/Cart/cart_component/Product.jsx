import React from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux"

const Product = ({ el , total}) => {

  const[val,setVal] = useState(1)

// console.log(el,"elem")


  return (



    <div>
      <div className="prod_grid">
        <div className="product">
          <div className="product_img">
            <img style={{width:"200px", height:"200px"}} src={el.thumbnail} alt=""/>
          </div>
          <div className="product_title">
            <div>
              DIOR SQUARE SUNGLASSES DIORBYDIOR 2 00086 GOLD 58MM BY DIOR Gold
            </div>
            <div className="btndiv">
              <button>remove</button>
            </div>
          </div>
        </div>

        <div className="prduct_info">
          <div className="price info">
            <label htmlFor="rate">price</label>
            <div className="rate">{el.price.raw}</div>
          </div>
          <div className="quanty info">
            <label htmlFor="quant">quantity</label>
            <div className="quant">
              <input
                type="number"
                min={1}
                value={val}
                onChange={(e) => setVal(e.target.value)}
              />
            </div>
          </div>
          <div className="total info">
            <label htmlFor="all">Total</label>
            <div className="all">{val * Number(el.price.extracted.$numberDecimal)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
