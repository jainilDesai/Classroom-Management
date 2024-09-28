import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <span class="mb-3 mb-md-0 text-body-primary footer-text">
            © 2024 Company, Inc
          </span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-body-secondary" href="#">
              <TwitterIcon />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary footer-text" href="#">
              <InstagramIcon />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary footer-text" href="#">
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
