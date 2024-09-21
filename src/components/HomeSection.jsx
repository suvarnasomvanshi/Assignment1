import React from "react";
import { Button } from "react-bootstrap";
import Image from "../../public/images/Image.png";
const HomeSection = () => {
  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-center flex-column text-center "
        style={{ height: "280px", background: "#dedbd7" }}
      >
        <h1 className="fw-bolder">Title</h1>
        <h6 className="lighter text-secondary">Subtilte</h6>
        <div className="mt-3">
          <Button
            className="bg-secondary border border-secondary "
            style={{ width: "110px" }}
          >
            Button
          </Button>
          <Button
            className="bg-dark border border-secondary ms-2"
            style={{ width: "110px" }}
          >
            Button
          </Button>
        </div>
      </div>

      <div className="container px-0 py-5">
        <div className="row px-0">
          <div
            className=" py-2 px-0 col-12 col-md-6 d-flex justify-content-center"
            style={{ height: "300px" }}
          >
            <img src={Image} alt="img" className="img-fluid" />
          </div>

          <div
            className="col-12 py-2 px-0 col-md-6 d-flex justify-content-center"
            style={{ height: "300px" }}
          >
            <img src={Image} alt="img" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
