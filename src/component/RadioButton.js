import "./RadioButton.css";
import { useState } from "react";

export default function RadioButton(props) {
  const [ppa, setPpa] = useState();
  return (
    <div className="container align-items-center hkt">
      <div className="d-flex fw-bold">
        <input
          type="radio"
          name="Annual-subscription"
          disabled={props.disable}
          onclick={e=>setPpa(e.target.value)}
        />
        <div className="mx-3">{props.title}</div>
      </div>
      <div>
        <div>
          total <span className="fw-bold">{`₹${props.value}`}</span>
        </div>
        <div>
          <span>{props.ppm}</span> /mo
        </div>
      </div>
    </div>
  );
}
