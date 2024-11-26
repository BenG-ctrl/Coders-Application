import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/LoginRegisterLayout";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    navigate("/home");
  };
  return (
    <div className="">
      <Layout>
        <h1 className="text-3xl text-primary mb-6 text-center">
          Join Coders Now!
        </h1>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="Email"
              placeholder="Email"
              className="rounded bg-main  w-3/4 py-2 mb-2 text-white ml-9"
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
              type="Sumbit"
              className="w-3/4 ml-9 py-2 px-20 bg-blue rounded mt-2 mb-2 text-white"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <span>New to CodeCLA.</span>
            <Link to="/Register" className="ml-2 text-blue">
              SignUp
            </Link>
          </div>
        </form>
      </Layout>
    </div>
  );
}
