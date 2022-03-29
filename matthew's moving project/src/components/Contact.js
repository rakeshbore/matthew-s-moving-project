import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibWF5b2ppY2giLCJhIjoiY2pla3Q3MzVvMWRoYTJybnVyMndxM2hmdCJ9.nWZlYcpKaMqz6m7xTsnJGA",
});

const Contact = () => {
  return (
    <div>
      <div className="Service ">
        <div className="Service-title ">Contact us</div>
      </div>
      <div className=" my-5"></div>
      <div className="container-fluid">
        <div className="row justify-content-evenly mt-5">
          <div className="col-md-5    ">
           
              <h3>COMPLETE THE FROM TO RECEIVE A QUOTE</h3>
       
            <form className="row g-3 mt-2 ">
              <div className="col-12">
                <h6>Name*</h6>
                <input
                  type="text"
                  id="formsize"
                  className=" form-control"
                  placeholder=""
                />
              </div>
              <div className="col-md-6">
                <h6>Email*</h6>
                <input
                  type="email"
                  id="formsize"
                  className="form-control"
                  placeholder=""
                />
              </div>
              <div className="col-md-6">
                <h6>Phone*</h6>
                <input
                  type="number"
                  id="formsize"
                  className="form-control"
                  placeholder=""
                />
              </div>
              <div className="col-md-4">
                <h6>type of move*</h6>
                <input
                  type="text"
                  id="formsize"
                  className="form-control"
                  placeholder=""
                />
              </div>
              <div className="col-md-4">
                <h6>Bedroom count*</h6>
                <input
                  type="text"
                  id="formsize"
                  className="form-control"
                  placeholder=""
                />
              </div>
              <div className="col-md-4">
                <h6>Move Date*</h6>
                <input
                  type="date"
                  id="formsize"
                  className="form-control"
                  placeholder=""
                />
              </div>
              <div className="col-md-6">
                <h6>Moving FROM address*</h6>
                <input
                  type="text"
                  id="formsize"
                  className="form-control"
                  placeholder=""
                />
              </div>
              <div className="col-md-6">
                <h6>Moving To Address*</h6>
                <input
                  type="text"
                  id="formsize"
                  className="form-control"
                  placeholder=""
                />
              </div>
              <div className="col-md-6">
                <h6>Need Help Packaging*</h6>
                <input
                  type="text"
                  id="formsize"
                  className="form-control"
                  placeholder=""
                />
              </div>
              <div className="col-md-6">
                <h6>Why did you here about us*</h6>
                <input
                  type="text"
                  id="formsize"
                  className="form-control"
                  placeholder=""
                />
              </div>
              <div className="col-md-12">
                <h6>Additional Details*</h6>
                <textarea
                  id="formsize1"
                  type="text"
                  rows="3"
                  cols="3"
                  className="form-control"
                />
              </div>

              <div className="col-md-12 text-center ">
                <button type="submit" id="buttons">
                  submit
                </button>
              </div>
            </form>
          </div>
          {/* this is google map */}
          <div className="col-md-5  ">
            <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30449.88443781667!2d78.37413606402978!3d17.448436284677626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sMadhapur%2C%20Telangana!5e0!3m2!1sen!2sin!4v1647948572237!5m2!1sen!2sin">
              {" "}
            </a>
            <Map
              style="mapbox://styles/mapbox/streets-v8"
              zoom={[10]}
              center={[101.8224, 2.955139]}
              containerStyle={{
                height: "100vh",
              }}
            >
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}
              >
                <Feature coordinates={[101.8224, 2.955139]} />
              </Layer>
            </Map>
          </div>
        </div>

     
        {/* this is a container fluid div */}
      </div>
    </div>
  );
};

export default Contact;