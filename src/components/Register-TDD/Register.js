import React from "react";
import PropTypes from "prop-types";

const Register = (props) => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleRegister(values);
  };

  return (
    <main className="m-3 d-flex flex-column">
      <h1 className="align-self-center text-center">Register here</h1>
      <form onSubmit={handleSubmit} className="align-self-center">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            value={values.email}
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Create Password</label>
          <input
            value={values.password}
            onChange={handleChange}
            type="password"
            className="form-control"
            id="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
};

Register.propTypes = {
  handleRegister: PropTypes.func.isRequired,
};

export default Register;
