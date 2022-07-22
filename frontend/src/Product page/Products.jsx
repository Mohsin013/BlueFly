import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { useParams, useNavigate } from "react-router-dom";
import { description_data, sorted_data,product_data } from "../Redux/Data/Action";
import styles from "./styles.module.css";
import BlackSlider from "../Landing page/bannerslider/blackSlider";
import { useEffect } from "react";
import axios from "axios";


const Products = () => {
  const data = useSelector((state) => state.data)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const [state, setState] = useState(false)
useEffect(()=>{
  axios.get("https://blueflycloneunitv.herokuapp.com/products/all").then(res => {
    product_data(dispatch,res.data);
  }).catch(err => {
  
    console.log(err,"err")
  
  })
},[])
// console.log(data , "the data")
  const handleclick = (payload) => {
    description_data(dispatch, payload);
    navigate("/description");
  };

  const filterData = data.filter((item) => {
    return item.title.includes(id);
  });



  //the sort

  const sortedData = useSelector((state) => state.sortedData);
  console.log(sortedData,"sortedata");

  const handlesort = (e) => {

    if (e.target.value === "asc") {
      const data = filterData.sort((a, b) => {
        return Number(a.price.extracted.$numberDecimal) - Number(b.price.extracted.$numberDecimal);
      });
      sorted_data(dispatch, data);
      setState(true);
    } else if (e.target.value === "desc") {
      const data = filterData.sort((a, b) => {
        return Number(b.price.extracted.$numberDecimal) - Number(a.price.extracted.$numberDecimal);
      });
      sorted_data(dispatch, data);
      setState(true);
    }
  };


  
  //   console.log(filterData,"filter")
// return;
  return <>
      <div style={{ width:"100%", marginTop:"80px"} }>
    <div className={styles.blackdiv}>
      <BlackSlider />
    </div>
    </div>

    {/* <div className={styles.welcome} ><p>WELCOME TO BLUEFLY: Luxury brands at discounted prices</p></div> */}
    <h1 style={{marginLeft:"50%"}} >{id} </h1>
    <div className={styles.main}>


      <div className={styles.top1div}>
        <p className={styles.left2}>Showing {filterData.length} results for "{id}" products</p>


        <select onChange={handlesort} className={styles.sortdiv}>
          <option className={styles.option} value="">Bestselling</option>
          <option style={{ fontSize: "13px" }} value="asc">PRICE: LOW TO HIGH</option>
          <option value="desc">PRICE: HIGH TO LOW</option>
          <option value="">TITLE: A-Z</option>
          <option value="">TITLE: Z-A</option>
          <option value="">DATE: OLD TO NEW</option>
          <option value="">DATE: NEW TO OLD</option>
          <option value="">DISCOUNT: HIGH TO LOW</option>
          <option value="">TRENDING</option>


        </select>
      </div>

      <div className={styles.topdiv}>


        {/* side bar div */}
        <div className={styles.sidebar__1}>
          <Navigation
            onSelect={({ itemId }) => {
            }}
            items={[
              {
                itemId: "/dashboard",
              },
              {
                title: <p style={{ fontWeight: "800" }}>COLLECTIONS</p>,
                itemId: "/1",
                subNav: [
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >

                          Women
                        </lable>
                      </div>
                    ),

                    itemId: "/11",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          Men
                        </lable>
                      </div>
                    ),
                    itemId: "/12",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >

                          Shop All
                        </lable>
                      </div>
                    ),
                    itemId: "/13",
                  }
                ],
              },
              {
                title: <p style={{ fontWeight: "800" }}>CATEGORY</p>,
                itemId: "/2",
                subNav: [
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          {" "}
                          Women's Shoes
                        </lable>
                      </div>
                    ),
                    itemId: "/21",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >

                          Mens's Shoes
                        </lable>
                      </div>
                    ),
                    itemId: "/22",
                  }
                ],
              },

              {
                title: <p style={{ fontWeight: "800" }}>BRAND</p>,
                itemId: "/3",
                subNav: [
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          Alice
                        </lable>
                      </div>
                    ),
                    itemId: "/31",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >

                          Philip
                        </lable>
                      </div>
                    ),
                    itemId: "/32",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >

                          Akris
                        </lable>
                      </div>
                    ),
                    itemId: "/33",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          {" "}
                          Queen
                        </lable>
                      </div>
                    ),
                    itemId: "/34",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          {" "}
                          Bardon
                        </lable>
                      </div>
                    ),
                    itemId: "/35",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          Billabog
                        </lable>
                      </div>
                    ),
                    itemId: "/36",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          {" "}
                          Frame
                        </lable>
                      </div>
                    ),
                    itemId: "/37",
                  },
                ],
              },

              {
                title: <p style={{ fontWeight: "800" }}>COLOR</p>,
                itemId: "/4",
                subNav: [
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          {" "}
                          Beige
                        </lable>
                      </div>
                    ),
                    itemId: "/41",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          {" "}
                          Black
                        </lable>
                      </div>
                    ),
                    itemId: "/42",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          {" "}
                          Green
                        </lable>
                      </div>
                    ),
                    itemId: "/43",
                  },

                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          {" "}
                          Brown
                        </lable>
                      </div>
                    ),
                    itemId: "/45",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          {" "}
                          No Color
                        </lable>
                      </div>
                    ),
                    itemId: "/45",
                  },
                ],
              },
              {
                title: <p style={{ fontWeight: "800" }}>SHOE SIZE</p>,
                itemId: "/5",
                subNav: [
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          3(27)
                        </lable>
                      </div>
                    ),
                    itemId: "/management/teams",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          {" "}
                          3.5(1)
                        </lable>
                      </div>
                    ),
                    itemId: "/management/teams",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          {" "}
                          4(109)
                        </lable>
                      </div>
                    ),
                    itemId: "/management/teams",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          4.5(1)
                        </lable>
                      </div>
                    ),
                    itemId: "/management/teams",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          5(10)
                        </lable>
                      </div>
                    ),
                    itemId: "/management/teams",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          5.5(12)
                        </lable>
                      </div>
                    ),
                    itemId: "/management/teams",
                  },

                ],
              },
              {
                title: <p style={{ fontWeight: "800" }}>PRODUCT CONDITION</p>,
                itemId: "/6",
                subNav: [
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          New
                        </lable>
                      </div>
                    ),
                    itemId: "/61",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          {" "}
                          Preowned
                        </lable>
                      </div>
                    ),
                    itemId: "/management/teams",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          {" "}
                          Preowned-Good
                        </lable>
                      </div>
                    ),
                    itemId: "/62",
                  },
                  {
                    title: (
                      <div className={styles.flex__div}>
                        <input style={{ width: "20px" }} type="checkbox" />
                        <lable
                          style={{ fontSize: "0.8rem" }}
                        >
                          {" "}
                          Preowned VeryGood
                        </lable>
                      </div>
                    ),
                    itemId: "/63",
                  },
                ],
              },
            ]}
          />
        </div>


        {/* products */}
        <div>



          <div className={styles.grid___1}>
            {
              state
                ? sortedData.map((e) => {
                  return (
                    <>
                      <div
                        onClick={() => {
                          handleclick(e);
                        }}
                        className={styles.productContainer}
                      >
                        <div>
                          <img className={styles.theimg} src={e.thumbnail} alt="" />
                        </div>
                        <div>
                          <p className={styles.title}>{e.title}</p>
                          <p>{e.condition}</p>
                          <p className={styles.price}>{e.price.raw}</p>
                          {/* <p className={styles.shipping}>{e.shipping}</p> */}
                          {/* <p className={styles.sold}>{e.extensions}</p> */}
                        </div>
                      </div>
                    </>
                  );
                })
                :
                filterData.map((e) => {
                  return (
                    <>
                      <div
                        onClick={() => {
                          handleclick(e);
                        }}
                        className={styles.productContainer}
                      >
                        <div>
                          <img className={styles.theimg} src={e.thumbnail} alt="" />

                        </div>
                        <div>
                          <p className={styles.title}>{e.title}</p>
                          <p>{e.condition}</p>
                          <p className={styles.price}>{e.price.raw}</p>
                          {/* <p className={styles.shipping}>{e.shipping}</p> */}
                          {/* <p className={styles.sold}>{e.extensions}</p> */}
                        </div>
                      </div>
                    </>
                  );
                })}
          </div>

        </div>


      </div>





    </div>

  </>
}

export default Products