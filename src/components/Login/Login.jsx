import React, { useReducer } from "react";

const Login = () => {
  function formReducer(state, action) {
    switch (action.type) {
      case "USERNAME": {
        return { ...state, username: action.data };
      }
      case "PASSWORD": {
        return { ...state, password: action.data };
      }
      case "REMEMBER_ME": {
        return { ...state, rememberMe: action.data };
      }
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(formReducer, {
    username: "",
    password: "",
    rememberMe: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="card">
          <div className="card-header">
            <h3>Sign In</h3>
            <div className="d-flex justify-content-end"></div>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} id="form">
              <div className="input-group form-group">
                <label htmlFor="username" className="input-group">
                  Username
                </label>
                <div className="input-group-prepend">
                  <span className="input-group-text rounded-sm"></span>
                </div>
                <input
                  value={state.username}
                  onChange={(e) =>
                    dispatch({ type: "USERNAME", data: e.target.value })
                  }
                  name="username"
                  id="username"
                  type="text"
                  className="form-control"
                  placeholder="username"
                />
              </div>
              <div className="input-group form-group">
                <label htmlFor="password" className="input-group">
                  Password
                </label>
                <div className="input-group-prepend">
                  <span className="input-group-text rounded-sm"></span>
                </div>
                <input
                  value={state.password}
                  onChange={(e) =>
                    dispatch({ type: "PASSWORD", data: e.target.value })
                  }
                  name="password"
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="password"
                />
              </div>
              <div className="d-flex align-item-center">
                <input
                  onChange={(e) =>
                    dispatch({ type: "REMEMBER_ME", data: e.target.checked })
                  }
                  checked={state.rememberMe}
                  name="rememberMe"
                  type="checkbox"
                  aria-label="rememberMe"
                  id="rememberMe"
                />
                <label
                  className="ml-1 mb-0"
                  style={{ fontSize: 14 }}
                  htmlFor="rememberMe"
                >
                  Remember Me
                </label>
              </div>
              <div className="form-group mt-2">
                <input
                  disabled={!state.username || !state.password ? true : false}
                  type="submit"
                  value="Login"
                  className="btn btn-primary w-100"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
