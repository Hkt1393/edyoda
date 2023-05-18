import "./Btn.css";

function Btn() {
  return (
    <div className="d-flex justify-content-evenly">
      <button className="cancel">CANCEL</button>
      <button className="pay">PROCEED TO PAY</button>
    </div>
  );
}

export default Btn;
