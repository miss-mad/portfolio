import React from "react";

// need contact form with fields for a name, email address, and a message
// when cursor moves out of form field without entering text, need a notification that that field is required
// need valid email address verification

export default function Contact() {
  return (
    <div>
      This is Contact
      {/* <h3>Contact<h3/> */}
      <section id="say-hello">
        <h3>Get in touch:</h3>

        <form action="" method="GET" name="get-in-touch">
          <div class="form-row">
            <label for="full-name">Name</label>
            {/* required boolean attribute should mean that the form notifies you if you click out of the box without typing - double check*/}
            <input id="full-name" name="full-name" type="text" required />
          </div>
          <div class="form-row">
            <label for="email">Email</label>
            <input
              id="email"
              name="email"
              // type="email" should validate for email
              type="email"
              placeholder="hello@example.com"
              required
            />
          </div>
          <div class="form-row message">
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send!</button>
          <input type="reset" name="reset" value="Clear Form" />
        </form>
      </section>
    </div>
  );
}
