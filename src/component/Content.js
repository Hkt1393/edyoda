import "./Content.css";
import Lockup from "./Lockup";
import Form from "./Form";

function Content() {
  return (
    <div className="content">
      <Lockup />
      <div className="right-content">
        <Form />
      </div>
    </div>
  );
}

export default Content;
