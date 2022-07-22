import React, { useEffect } from 'react';
import { useState } from 'react';

const Order = () => {

  var theTotal = localStorage.getItem("total")
  console.log(theTotal,"from local")

  const [coup, setCoup] = useState({});
  const [total, setTotal] = useState(500);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const localdata = localStorage.getItem('coupon_code');
    setCoup({ ...coup, coupon: localdata });
  }, []);

  const Inputval = (e) => {
    const val = e.target.value;
    setCoup({ ...coup, apply: val });
  };
  const applybtn = (e) => {
    e.preventDefault();
    const val = e.target.value;
    // console.log(val);
    if (coup.coupon == coup.apply) {
      const data = 1 - 30 / 100;
      let totalval = total * data;
      setTotal(totalval);
      setFlag(true);
    }
  };
  return (
    <>
      <h1>Order details</h1>
      <div className="coupon_input" name="coupon">
        <div style={{ width: '80%' }}>
          <label htmlFor="coupon">Gift Card or Discount Code</label>
          <br />
          <input name="coupon" type="text" onChange={(e) => Inputval(e)} />
        </div>
        <div className="btn">
          <div className="coupon_btn" onClick={applybtn}>
            Apply
          </div>
          <br />
        </div>
      </div>
      <label htmlFor="coupon_input">
        {flag ? (
          <h3 style={{ taxtAlign: 'center', color: 'green' }}>
            coupon Applied Successfully
          </h3>
        ) : (
          <h3 style={{ taxtAlign: 'center', color: 'red' }}>
            {' '}
            Coupon not applied
          </h3>
        )}
      </label>

      <div className="cart_detail">
        <hr />
        <div className="details">
          <div className="subtotals">
            <p>subtotal</p>
            <p>$ {theTotal}</p>
          </div>
          <div className="sipping">
            <p>shipping</p>
            <p>free</p>
          </div>
          <div className="tax">
            <p>Taxes(estimate)</p>
            <p>$0.00</p>
          </div>
        </div>
        <hr />
        <div className="total_pay">
          <p>Totol</p>
          <p>${theTotal}</p>
        </div>
      </div>
    </>
  );
};

export default Order;
