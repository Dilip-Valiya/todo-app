import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div>
          <h1>404</h1>
        </div>
        <h2>We are sorry, Page not found!</h2>
        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        {/* <a href="#">Back To Homepage</a> */}
        <button
          data-testid="return-home-button"
          palette="brand"
          kind="dominant"
          onClick={() => navigate("/")}
          class="mt-64"
        >
          Back To Homepage
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
