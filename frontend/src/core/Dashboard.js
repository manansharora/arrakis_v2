import React from "react";
import Menu from "./Menu";
import ifrc from "../../src/IRFC.png";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
      <Menu />
      {/* <footer className="footer mt-auto py-3" style ={{background: "#fffef2"}}>
        <div className="container-fluid bg-dark  text-center py-3" style ={{color: "#fffef2"}}>
          <h4>If you got any questions, reach me out at instagram</h4>
          <button className="btn btn-dark btn-lg bg-secondary">Contact Us</button>
          <div className="container">
            <span className="" style ={{color: "#fffef2"}}>
            We make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation.
            </span>
          </div>
        </div>
      </footer> */}
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5 ">
            <div className="card bg-success" style={{ width: 20 + "rem" }}>
              <img className="card-img-top" src={ifrc} alt="Card cap"></img>
              <div className="card-body">
                <h5 className="card-title text-white ">
                  Indian Railway Finance Corp.
                </h5>
                <p className="card-text text-white ">
                  Segment : Corporate | Type : PSU
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Face Value: 10000/- </b>
                </li>
                <li className="list-group-item">
                  <b>Coupon Rate: 7.04%</b>
                </li>
                <li className="list-group-item text-success">
                  <b> Maturity Date: 10-September-2026</b>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 mt-5 ">
            <div className="card bg-success" style={{ width: 20 + "rem" }}>
              <img className="card-img-top" src={ifrc} alt="Card cap"></img>
              <div className="card-body">
                <h5 className="card-title text-white ">
                  Indian Railway Finance Corp.
                </h5>
                <p className="card-text text-white ">
                  Segment : Corporate | Type : PSU
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Face Value: 10000/- </b>
                </li>
                <li className="list-group-item">
                  <b>Coupon Rate: 7.04%</b>
                </li>
                <li className="list-group-item text-success">
                  <b> Maturity Date: 10-September-2026</b>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 mt-5 ">
            <div className="card bg-danger" style={{ width: 20 + "rem" }}>
              <img className="card-img-top" src={ifrc} alt="Card cap"></img>
              <div className="card-body">
                <h5 className="card-title text-white ">
                  Indian Railway Finance Corp.
                </h5>
                <p className="card-text text-white ">
                  Segment : Corporate | Type : PSU
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Face Value: 10000/- </b>
                </li>
                <li className="list-group-item">
                  <b>Coupon Rate: 7.04%</b>
                </li>
                <li className="list-group-item text-danger">
                  <b> Maturity Date: 22-July-2023</b>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 mt-5 ">
            <div className="card bg-success" style={{ width: 20 + "rem" }}>
              <img className="card-img-top" src={ifrc} alt="Card cap"></img>
              <div className="card-body">
                <h5 className="card-title text-white ">
                  Indian Railway Finance Corp.
                </h5>
                <p className="card-text text-white ">
                  Segment : Corporate | Type : PSU
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Face Value: 10000/- </b>
                </li>
                <li className="list-group-item">
                  <b>Coupon Rate: 7.04%</b>
                </li>
                <li className="list-group-item text-success">
                  <b> Maturity Date: 10-September-2026</b>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 mt-5 ">
            <div className="card bg-danger" style={{ width: 20 + "rem" }}>
              <img className="card-img-top" src={ifrc} alt="Card cap"></img>
              <div className="card-body">
                <h5 className="card-title text-white ">
                  Indian Railway Finance Corp.
                </h5>
                <p className="card-text text-white ">
                  Segment : Corporate | Type : PSU
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Face Value: 10000/- </b>
                </li>
                <li className="list-group-item">
                  <b>Coupon Rate: 7.04%</b>
                </li>
                <li className="list-group-item text-danger">
                  <b> Maturity Date: 4-October-2022</b>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 mt-5 ">
            <div className="card bg-success" style={{ width: 20 + "rem" }}>
              <img className="card-img-top" src={ifrc} alt="Card cap"></img>
              <div className="card-body">
                <h5 className="card-title text-white ">
                  Indian Railway Finance Corp.
                </h5>
                <p className="card-text text-white ">
                  Segment : Corporate | Type : PSU
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Face Value: 10000/- </b>
                </li>
                <li className="list-group-item">
                  <b>Coupon Rate: 7.04%</b>
                </li>
                <li className="list-group-item text-success">
                  <b> Maturity Date: 10-September-2026</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Base;
