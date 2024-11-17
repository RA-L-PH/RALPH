import React from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function calculateAge(birthday) {
  const birthDate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function About(){
  const birthday = "2004-04-09"; // Replace with your actual birthdate
  const age = calculateAge(birthday);

  return(
    <section className="about-section">
        <div className="neumorphic-flat profile-image">
          <img className="neumorphic-concave" src="https://media.licdn.com/dms/image/v2/D4D03AQGHXfsiYiem9g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691309793826?e=1737590400&v=beta&t=OKnjEXzc16n-nf5pV8JwIFRe4NLXaQ80bk-wLOSCHK8"/>
        </div>
        <div className="neumorphic-flat about-text">
          <h1>Me?</h1>
          <h2>Ralph Carvalho | {age}</h2>
          <h4>Web-Developer</h4>
          <h4><i>India</i></h4>
          <div className="social neumorphic-convex">
            <a className="neumorphic-pressed" href="https://www.linkedin.com/in/ralph-carvalho-614b78257/" target="_blank" rel="noopener noreferrer">
              <RxLinkedinLogo/>
            </a>
            <a className="neumorphic-pressed" href="https://github.com/RA-L-PH" target="_blank" rel="noopener noreferrer">
            <FaSquareGithub/>
            </a>
            <a className="neumorphic-pressed" href="mailto:ralphaacarvalho@gmail.com">
              <MdEmail/>
            </a>
          </div>
        </div>
    </section>
  )
}

export default About;