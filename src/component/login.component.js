import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  let navigate = useNavigate();
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: "",
      password: "",
    }
  );
  const [error, setError] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const {
      formInput: { username, password },
    } = { formInput };
    console.log(username, password);
    if (username == "eadmin" && password == "eadmin@123") {
      // history.push("/home");
      navigate("/products");
      // return;
    }
    setError(true);
  };

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <div style={{ paddingTop: 250 }}>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-3 justify-content-center">
              <div class="d-grid gap-2 col-6 mx-auto">
                <h3>Sign In</h3>
              </div>

              <div className="mb-3">
                <label> Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder=" username"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="d-grid">
                {error && <div>Please enter valid credentials</div>}
                <button type="submit" className="btn btn-dark">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
