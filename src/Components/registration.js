import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [patients, setpatient] = useState([]);
  const { register, handleSubmit } = useForm();

  async function onSubmit(patient, e) {
    e.preventDefault();
    await setpatient([...patients, patient]);
    navigate("/", { replace: true });
  }
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const onError = (errors, e) => console.log(errors, e);

  return (
    <div className="container" style={{ padding: "40px" }}>
      <h2 className="d-flex">Register new patient</h2>
      <form className="row g-3" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="col-md-8">
          <label className="form-label"></label>
          <input
            type="text"
            {...register("fullname")}
            className="form-control"
            id="inputEmail4"
            placeholder="Fullname"
          />
        </div>
        <div className="d-flex">
          <div className="col-md-1" style={{ margin: "0px 4px 0px 0px" }}>
            <label className="form-label"></label>
            <select id="inputcountry" className="form-select">
              <option defaultValue>+91</option>
              <option>+01</option>
            </select>
          </div>
          <div className="col-3">
            <label className="form-label"></label>
            <input
              {...register("phone")}
              type="number"
              className="form-control"
              id="inputnumber4"
              placeholder="Contact number"
            />
          </div>
        </div>
        <div className="col-6">
          <label className="form-label"></label>
          <input
            {...register("email")}
            type="email"
            className="form-control"
            id="inputemail"
            placeholder="Email address"
          />
        </div>
        <div className="d-flex">
          <div className="col-md-6">
            <label className="form-label"></label>
            <select
              {...register("gender")}
              id="inputgender"
              className="form-select"
              placeholder="Gender"
            >
              <option defaultValue>Gender</option>
              <option>Male</option>
              <option>female</option>
              <option>Non-confirming</option>
            </select>
          </div>
        </div>
        <div className="d-flex col-md-12">
          <label className="form-label">Date of Birth</label>
        </div>
        <div className="col-md-2 col-sm-3 col-xs-3">
          <input
            {...register("birth_date")}
            type="number"
            className="form-control"
            id="inputdate"
            placeholder="DD"
          />
        </div>
        <div className="col-md-2 col-sm-3 col-xs-3">
          <input
            {...register("birth_month")}
            type="number"
            className="form-control"
            id="inputmonth"
            placeholder="MM"
          />
        </div>
        <div className="<col-md-2 col-sm-4 col-xs-4">
          <input
            {...register("birth_year")}
            type="number"
            className="form-control"
            id="inputyear"
            placeholder="YYYY"
          />
        </div>
        <div className="col-8">
          <label className="d-flex form-label">
            <strong>Contact details</strong>
          </label>
          <input
            {...register("address1")}
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Address line 1"
          />
        </div>
        <div className="col-8">
          <input
            {...register("address2")}
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Address line 2"
          />
        </div>
        <div className="d-flex">
          <div className="col-4" style={{ margin: "0px 10px 0px 0px" }}>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="City"
            />
          </div>
          <div className="col-4">
            <select id="inputState" className="form-select">
              <option defaultValue>State</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div className="d-flex col-4">
          <input
            {...register("postalcode")}
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="Postalcode"
          />
        </div>
        <div className="col-4">
          <select id="inputCountry" className="form-select">
            <option defaultValue>Country</option>
            <option>...</option>
          </select>
        </div>
        <div className="d-flex col-12">
          {" "}
          <button
            type="submit"
            className="btn btn-primary"
            style={{ margin: "0px 10px 0px 0px" }}
          >
            ADD PATIENT
          </button>
          <button type="button" className="btn btn-outline-danger">
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
