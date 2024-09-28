import React from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

function NavBar() {
  return (
    <>
      <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div class="col-md-3 mb-2 mb-md-0" className="logo">
            <AutoStoriesIcon fontSize="large" />
          </div>

          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" class="nav-link px-2 link-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2">
                Features
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2">
                About
              </a>
            </li>
          </ul>

          <div class="col-md-3 text-end">
            <button
              action="/login"
              type="button"
              class="btn btn-outline-primary me-2"
            >
              Login
            </button>
            <button action="/sihgnUp" type="button" class="btn btn-primary">
              Sign-up
            </button>
          </div>
        </header>
      </div>
    </>
  );
}

export default NavBar;
