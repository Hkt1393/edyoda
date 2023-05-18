import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <div className="navb">
      <div className="container">
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="title" href="#">
              EDYODA
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <Dropdown title="Course" />
                <Dropdown title="Programs" />
              </ul>
              <button
                class="btn btn-outline-dark"
                type="submit"
                style={{ border: "transparent" }}
              >
                <AiOutlineSearch />
              </button>
              <div className="login mx-4">
                <a href="#" className="login">
                  Log in
                </a>
              </div>
              <button className="join mx-4">JOIN NOW</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
