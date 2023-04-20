import React from "react";
import { FaShoppingCart, FaRegTimesCircle } from "react-icons/fa";
const Home = (props) => {
  
  console.log(props);
  return (
    <React.Fragment>
      <div className="container mt-5 shadow-sm">
        <div className="card border-primary">
          <div className="card-header border-0">Wishlists</div>
          <div className="card-body border-0">
            <div
              className="row shadow-sm rounded p-2 bg-light"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="col-md-2">
                <img
                  width={"50px"}
                  src={`https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png/mxw_640,f_auto`}
                  className="img-fluid rounded"
                  alt="Iphone 14 pro max"
                />
              </div>
              <div className="col-md-6">Iphone 14 pro max</div>
              <div className="col-md-1">Qty: 2</div>
              <div className="col-md-1">$1200.00</div>
              <div className="col-md-2">
              <button
                onClick={()=>{
                  props.removeToCartHandler()
                }}
                  className="btn btn-outline-danger border-0 shadow-sm"
                  style={{ float: "right" }}
                >
                  <FaRegTimesCircle/>
                </button>
                <button
                onClick={()=>{
                  props.addToCartHandler({
                    price:1200,
                    name:"Iphone 14 pro max"
                  })
                }}
                  className="btn btn-outline-success border-0 shadow-sm"
                  style={{ float: "right" }}
                >
              <FaShoppingCart/>
                </button>
               
              </div>
            </div>

            <br />

            <div
              className="row shadow-sm rounded p-2 bg-light"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="col-md-2">
                <img
                  width={"50px"}
                  src={`https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71TPda7cwUL._SL1500_.jpg`}
                  className="img-fluid rounded"
                  alt="Iphone 14 pro max"
                />
              </div>
              <div className="col-md-6">Apple Macbook Air</div>
              <div className="col-md-1">Qty: 1</div>
              <div className="col-md-1">$1500.00</div>
              <div className="col-md-2">
              <button
                onClick={()=>{
                  props.removeToCartHandler()
                }}
                  className="btn btn-outline-danger border-0 shadow-sm"
                  style={{ float: "right" }}
                >
                 <FaRegTimesCircle/>
                </button>

                <button
                onClick={()=>{
                  props.addToCartHandler({
                    price:1500,
                    name:"Apple Macbook Air"
                  })
                }}
                  className="btn btn-outline-success border-0 shadow-sm"
                  style={{ float: "right" }}
                >
               <FaShoppingCart/>
                </button>
              </div>
            </div>

            <br />

            <div
              className="row shadow-sm rounded p-2 bg-light"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="col-md-2">
                <img
                  width={"50px"}
                  src={`https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/914hFeTU2-L._SL1500_.jpg`}
                  className="img-fluid rounded"
                  alt="Iphone 14 pro max"
                />
              </div>
              <div className="col-md-6">Cannon EOS 1500D</div>
              <div className="col-md-1">Qty: 1</div>
              <div className="col-md-1">$520.00</div>
              <div className="col-md-2">

              <button
                onClick={()=>{
                  props.removeToCartHandler()
                }}
                  className="btn btn-outline-danger border-0 shadow-sm"
                  style={{ float: "right" }}
                >
                 <FaRegTimesCircle/>
                </button>

                <button
                onClick={()=>{
                  props.addToCartHandler({
                    price:520,
                    name:"Cannon EOS 1500D"
                  })
                }}
                  className="btn btn-outline-success border-0 shadow-sm"
                  style={{ float: "right" }}
                >
                <FaShoppingCart/>
                </button>
              </div>
            </div>

            <br />
          </div>
          <div className="card-footer border-0"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
