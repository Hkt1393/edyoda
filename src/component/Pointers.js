import "./Pointers.css";
import { GoBook } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { SlScreenDesktop } from "react-icons/sl";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";

export default function Pointers() {
  return (
    <div className="mx-5">
      <div className="pointer_offer my-4">
        <GoBook style={{ marginRight: "50px" }} />
        <span className="text-primary">100+</span> Job relevant courses{" "}
      </div>
      <div className="pointer_offer my-4">
        <BiTimeFive style={{ marginRight: "50px" }} />
        <span className="text-primary">20,000+</span> Hours of content{" "}
      </div>
      <div className="pointer_offer my-4">
        <SlScreenDesktop style={{ marginRight: "50px" }} />
        <span className="text-primary">Exclusive</span> webinar access{" "}
      </div>
      <div className="pointer_offer my-4">
        <FaUserGraduate style={{ marginRight: "50px" }} />
        Scholarship worth <span className="text-primary">₹94,500</span>{" "}
      </div>
      <div className="pointer_offer my-4">
        <AiOutlineStop style={{ marginRight: "50px" }} />
        <span className="text-primary">Ad Free</span> learning experience{" "}
      </div>
    </div>
  );
}
