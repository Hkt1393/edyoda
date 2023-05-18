import "./Lstsec.css";
import { AiOutlineFieldTime } from "react-icons/ai";

function Lstsec(props) {
  return (
    <div className="d-flex justify-content-between lstsec">
      <div className="text-start mx-3">
        <div className="fw-bold">Limited time offer</div>
        <div>
          <AiOutlineFieldTime />
          Offer valid till 25th May 2023
        </div>
      </div>
      <div className="mx-3">{`₹${-18400}`}</div>
    </div>
  );
}

export default Lstsec;
