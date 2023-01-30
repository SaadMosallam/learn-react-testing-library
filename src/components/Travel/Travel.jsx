import React from "react";
import airPlane from "src/assets/airplane.svg";
const Travel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center mt-5">
          <div
            className="card text-center p-3"
            style={{ width: 400, height: 400 }}
          >
            <img src={airPlane} alt="air plane" />
            <h4>Travel Anywhere</h4>
            <p className="p-1">
              Our premium package allows you to take exotic trips anywhere at
              the cheapest prices!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
