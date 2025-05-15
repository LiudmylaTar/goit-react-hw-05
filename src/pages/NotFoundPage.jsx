import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <p>404...Not Found Page</p>
      <Link to="/">Return Home Page</Link>
    </div>
  );
}
export default NotFoundPage;
