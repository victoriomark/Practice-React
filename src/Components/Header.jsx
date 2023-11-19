import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="container d-flex justify-content-between align-items-center ">
            <a className="navbar-brand text-warning fw-bold " href="#">
              E-commerce
            </a>
            <button
              className="navbar-toggler bg-warning"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto  d-flex justify-content-center gap-2">
              <li className="nav-item text-align-center">
              <a className="nav-link active text-warning fw-bold  text-center" aria-current="page" href="#">
                  MEN
                </a>
              </li>
              <li className="nav-item">
              <a class="nav-link active text-warning fw-bold  text-center" aria-current="page" href="#">
                  KIDS
                </a>
              </li>
              <li className="nav-item">
              <a class="nav-link active text-warning fw-bold text-center" aria-current="page" href="#">
                  WOMEN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
