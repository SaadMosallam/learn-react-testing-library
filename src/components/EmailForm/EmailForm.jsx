import React from "react";
import { useState, useEffect } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmail(`${e.target.firstChild.value}@software-plus.com`);
  };
  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <>
      <h1 className="heading-1 d-flex justify-content-center mt-3">
        Email Form
      </h1>
      <form
        onSubmit={handleFormSubmit}
        id="email-form"
        className="input-group mx-auto mt-3 w-50"
      >
        <input
          type="text"
          className="form-control"
          placeholder="enter your name"
          aria-label="username"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          @software-plus.com
        </span>
      </form>
      {email ? <p className="text-center mt-3">{email}</p> : null}
    </>
  );
}
