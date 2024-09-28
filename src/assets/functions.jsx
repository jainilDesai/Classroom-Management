import React from "react";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

function Functions() {
  return (
    <>
      <div class="container px-4 py-5">
        <h2 class=" display-4 fw-bold pb-2 hero-h1-text functions-h2">
          Key Features
        </h2>

        <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div class="col d-flex flex-column align-items-start gap-2">
            <h2 class="fw-bold text-body-primary hero-h1-text">
              Flexible and Customizable Website
            </h2>
            <p class="text-body-primary hero-p-text mt-4">
              A Classroom Management Webpage is an online platform designed to
              help teachers manage and organize their classroom activities
              efficiently.It has Customizable Layouts, Theming Options, Modular
              Components Responsive Design and User-Specific Configurations.
            </p>
          </div>

          <div class="col">
            <div class="row row-cols-1 row-cols-sm-2 g-4">
              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-large d-inline-flex align-items-center justify-content-center text-bg fs-4 rounded-3 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="white"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-primary hero-h1-text">
                  Attendance Tracking
                </h4>
                <p class="text-body-primary hero-p-text">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
                <h4 class="fw-semibold mb-0 text-body-primary hero-h1-text">
                  Student Profiles
                </h4>
                <p class="text-body-primary hero-p-text">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg class="bi" width="1em" height="1em">
                    <use xlink:href="#speedometer"></use>
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-primary hero-h1-text">
                  Customizable Dashboard
                </h4>
                <p class="text-body-primary hero-p-text">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg class="bi" width="1em" height="1em">
                    <use xlink:href="#table"></use>
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-primary-primary hero-h1-text">
                  Announcements & Notifications
                </h4>
                <p class="text-body-primary hero-p-text">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Functions;
