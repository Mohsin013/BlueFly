import Styles from "./Bottompart.module.css";

const BottomPart = () => {
  const data = [
    {
      title: "Michael Kors Lexington Two Tone Watch MK8344",
      condition: "New (Other)",
      price: {
        raw: "$78.22",
        extracted: 11.21
      },
      thumbnail: "https://the-collective.imgix.net/img/app/product/6/628111-6125836.jpg"
    },
    {
      title: "Versace Jeans CoutureMen White Bold Brand Print Court Shoes",
      condition: "New (Other)",
      price: {
        raw: "$85.32",
        extracted: 78.22
      },
      thumbnail: "https://the-collective.imgix.net/img/app/product/7/709222-7727484.jpg"
    },
    {
      title: "Women Tan Branded Buckle Belt",
      condition: "New (Other)",
      price: {
        raw: "$76.23",
        extracted: 12.31
      },
      thumbnail: "https://the-collective.imgix.net/img/app/product/6/686730-7285500.jpg"
    },
    {
      title: "Amouage Journey Woman EDP 100 ml",
      condition: "New (Other)",
      price: {
        raw: "$96.01",
        extracted: 16.0
      },
      thumbnail: "https://the-collective.imgix.net/img/app/product/5/531073-4032206.jpg"
    },
    {
      title: "ROJA Parfums Vetiver Pour Homme",
      condition: "Brand New",
      price: {
        raw: "$93.56",
        extracted: 12.2
      },
      thumbnail: "https://the-collective.imgix.net/img/app/product/7/708076-7704059.jpg"
    }
  ]
  return <>
    <div className={Styles.banner}>
      <h1>YOU MAY ALSO LIKE</h1>
    </div>
    <div className={Styles.container}>
      {data.map((i) => {
        return <>
          <div className={Styles.commondiv}>
            <img src={i.thumbnail} alt="" />
            <h5>{i.title}</h5>
            <div className={Styles.pricediv}>
              <p className={Styles.pitag}>${i.price.extracted + 23}</p>
              <p>${i.price.extracted}</p>
            </div>
          </div>
        </>
      })}
    </div>

  </>
}

export default BottomPart;