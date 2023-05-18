import "./Form.css";
import Radiobutton from "./RadioButton";
import Signup from "./Signup";
import Fee from "./Fee";
import Lstsec from "./Lstsec";
import Btn from "./Btn";
import img from "./Assets/Frame 12537razor.jpg";
import { useState } from "react";

function Form() {
  let obj = {
    value: 99,
  };
  return (
    <div className="form">
      <Signup />
      <div className="fw-bold my-3">Select your subcription plan</div>
      <Radiobutton
        title="12 Months Subscription"
        ppa={`₹${99}`}
        ppm="₹8"
        value={99}
        disable={true}
      />
      <Radiobutton
        title="12 Months Subscription"
        ppa="₹179"
        ppm="₹15"
        disable={false}
        value={179}
      />
      <Radiobutton
        title="6 Months Subscription"
        ppa="₹149"
        ppm="₹25"
        disable={false}
        value={149}
      />
      <Radiobutton
        title="3 Months Subscription"
        ppa="₹99"
        ppm="₹33"
        disable={false}
        value={99}
      />
      <hr />
      <Fee charges={`₹${18500}`} title="Subscription fee" />
      <Lstsec />
      <Fee charges={`₹${obj.value}`} title="Total (Incl. of 18% GST)" />
      <Btn />
      <img src={img} alt="img" className="img" />
    </div>
  );
}

export default Form;
