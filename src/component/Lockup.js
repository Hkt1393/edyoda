import "./Lockup.css";
import Header from "./Header";
import Pointers from "./Pointers";

function Lockup() {
  const obj = {};
  return (
    <div className="lockup py-5">
      <Header />
      <Pointers />
    </div>
  );
}

export default Lockup;
