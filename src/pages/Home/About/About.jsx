import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="about-wrapper">
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>React template with Vite, React, RTK Query and React Toastify by</p>
      </div>
      <p className="read-the-docs">
        <NavLink to={"/signin"}>Login</NavLink>
      </p>
    </div>
  );
};

export default About;
