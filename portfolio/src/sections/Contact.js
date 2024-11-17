import React from "react";

function Contact(){
  return(
    <section className="contact-section">
      <div className="neumorphic-flat contact-form">
        <h2>Contact Me</h2>
        <form>
            <label for="name">Name:</label>
            <input className="neumorphic-pressed" type="text" id="name" name="name" required/>
            <label for="email">Email:</label>
            <input className="neumorphic-pressed" type="email" id="email" name="email" required/>
            <label for="message">Message:</label>
            <textarea className="neumorphic-pressed" id="message" name="message" rows="4" required></textarea>
            <input className="neumorphic-concave" type="submit" value="Submit"/>
        </form>
      </div>
      <div className="neumorphic-flat feedback-form">
        <h2>Feedback</h2>
        <form>
        <label for="name">Name:</label>
        <input className="neumorphic-pressed" type="text" id="name" name="name" required/>
        <label for="email">Email:</label>
        <input className="neumorphic-pressed" type="email" id="email" name="email" required/>
        <label for="message">Message:</label>
        <textarea className="neumorphic-pressed" id="message" name="message" rows="4" required></textarea>
        <input className="neumorphic-concave" type="submit" value="Submit"/>
        </form>
      </div>
    </section>
    )
}
export default Contact;