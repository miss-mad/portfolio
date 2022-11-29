import React, { useState } from "react";
// this hook within React allows us to use various types of form validations, like email validation (ensuring an @ symbol is inputted) and requiring fields not to be left blank
import { useForm } from "react-hook-form";

// const { isOnChange, inOnBlur, inOnSubmit } = useRef(modeChecker(mode)).current;
// const isSubmittedRef = useRef(false)

// need contact form with fields for a name, email address, and a message
// when cursor moves out of form field without entering text, need a notification that that field is required
// need valid email address verification

// const invalidStyle = {
//   inputInvalid: {
//     borderStyle: "solid",
//     borderColor: "red",
//   },
// };

export default function Contact() {
  const { register, errors, handleSubmit } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    console.log(data);
  };

  // const [isRequired, setIsRequired] = useState(false);

  // const handleBlur = () => {
  //   setIsRequired(true);
  // };

  // const handleOnBlur = (e) => {
  //   // e.preventDefault();
  //   const input = document.getElementsByClassName("input");
  //   const inputValue = input.value;

  //   if (!inputValue) {
  //     // input.classList.add("invalid");
  //     console.log("invalid class added and onblur worked");
  //     alert("This field cannot be left blank");
  //   }
  // };

  // const handleOnBlur = (e) => {
  //   // e.preventDefault();
  //   const pattern = /^[A-Za-z]+$/i;

  //   if (!pattern) {
  //     // input.classList.add("invalid");
  //     console.log("invalid class added and onblur worked");
  //     // alert("This field cannot be left blank");
  //   }
  // };

  return (
    <section className="container">
      {/* This is Contact */}
      {/* <h3>Contact<h3/> */}
      {/* <section id="say-hello"> */}
      <h3>Get in touch:</h3>
      <form
        action=""
        method="GET"
        name="get-in-touch"
        id="say-hello"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-row">
          <label htmlFor="fullName"></label>
          {/* required boolean attribute should mean that the form notifies you if you click out of the box without typing - double check*/}
          <input
            className="input"
            id="fullName"
            name="fullName"
            type="text"
            placeholder="First and last name"
            required
            {...register(
              "fullName",
              { required: true, maxLength: 50 }
              // { pattern: /^[A-Za-z]+$/i }
              // { onBlur: (e) => console.log(e) }
              // {errors.fullName && <p>This field cannot be blank</p>}
            )}
            // onBlur={onBlur()}
            // onblur={handleOnBlur()}
          />
        </div>
        {/* <div className="form-row" onBlur={setIsRequired(true)}> */}
        <div className="form-row">
          <label htmlFor="email"></label>
          <input
            className="input"
            id="email"
            name="email"
            // type="email" should validate for email
            type="email"
            placeholder="email_here@example.com"
            required
            {...register("email", { required: true, maxLength: 50 })}
            // onblur={handleOnBlur()}
          />
          {/* {isRequired && <div style={{ color: "red" }}>IS REQUIRED!</div>} */}
        </div>
        <div className="form-row message">
          <label htmlFor="message"></label>
          <textarea
            className="input"
            id="message"
            name="message"
            placeholder="Type your message here"
            required
            {...register("message", { required: true })}
            // onblur={handleOnBlur()}
          ></textarea>
        </div>
        <button type="submit">Send!</button>
        <input type="reset" name="reset" value="Clear Form" />
      </form>
      {/* </section> */}
    </section>
  );
}
