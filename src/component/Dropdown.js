import { BsChevronDown } from "react-icons/bs";
import "./Dropdown.css";

function Dropdown(props) {
  return (
    <div className="dropmenu">
      <li class="nav-item dropdown">
        <a
          class="nav-link text-reset dropmenu mx-2"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {props.title}
          <BsChevronDown style={{ fontSize: "12px", marginLeft: "10px" }} />
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a class="dropdown-item" href="#">
              React js
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Node js
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Mongo DB
            </a>
          </li>
        </ul>
      </li>
    </div>
  );
}

export default Dropdown;
