import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/LoginRegisterLayout";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ email, username, password }));
    navigate("/home");
  };
  return (
    <div>
      <Layout>
        <h1 className="text-3xl text-primary mb-6 text-center">
          Join Coders Now!
        </h1>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              className="rounded bg-main w-3/4 py-2 ml-9 mt-2 mb-2 text-white"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="Email"
              placeholder="Email"
              className="rounded bg-main w-3/4 py-2 ml-9 mt-2 mb-2 text-white"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="rounded bg-main w-3/4 py-2 ml-9 mt-2 mb-2 text-white"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-3/4 ml-9 py-2 px-20 bg-blue rounded mt-2 mb-2 text-white"
            >
              SignUp
            </button>
          </div>
          <div className="text-center">
            <span>Already have an Account?</span>
            <Link to="/Login" className="ml-2 text-blue">
              Login
            </Link>
          </div>
        </form>
      </Layout>
    </div>
  );
}
