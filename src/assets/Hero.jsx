import React from "react";

function Hero() {
  return (
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-left g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="https://img.freepik.com/free-vector/flat-background-world-teacher-s-day-celebration_23-2150736746.jpg"
            class="d-block mx-lg-auto img-fluid hero-img"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-primary lh-1 mb-4 hero-h1-text">
            ClassRoom Management System
          </h1>
          <p class="text-body-primary hero-p-text">
            The webpage is user-friendly, offering a customizable dashboard for
            teachers to tailor the interface based on their specific classroom
            needs. It streamlines administrative tasks, making classroom
            management more organized and effective.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
              Get started Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
