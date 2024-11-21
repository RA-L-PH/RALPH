import React, { useState } from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";

import ppfeeimg from "../assets/istockphoto-899060402-612x612.jpg";

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
  const firstName = "alph ";
  const lastName = "arvalho";
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [ppflink, setppflink] = useState("https://media.licdn.com/dms/image/v2/D4D03AQGHXfsiYiem9g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691309793826?e=1737590400&v=beta&t=OKnjEXzc16n-nf5pV8JwIFRe4NLXaQ80bk-wLOSCHK8");

  const iterateNames = () => {
    const firstNameArray = firstName.split("");
    const lastNameArray = lastName.split("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < firstNameArray.length) {
        setfname(firstNameArray.slice(0, i + 1).join(""));
      }
      if (i < lastNameArray.length) {
        setlname(lastNameArray.slice(0, i + 1).join(""));
      }
      if (i === Math.max(firstNameArray.length, lastNameArray.length)) {
        clearInterval(interval);
      }
      i++;
    }, 50);
  };

    const reverseIterateNames = () => {
      const firstNameArray = firstName.split("");
      const lastNameArray = lastName.split("");
      let i = Math.max(firstNameArray.length, lastNameArray.length);
      const interval = setInterval(() => {
        if (i >= 0) {
          if (i <= firstNameArray.length) {
            setfname(firstNameArray.slice(0, i).join(""));
          }
          if (i <= lastNameArray.length) {
            setlname(lastNameArray.slice(0, i).join(""));
          }
        } else {
          clearInterval(interval);
        }
        i--;
      }, 50);
    };

    const ppfee = () => {
      setppflink(ppfeeimg);
    };
    const ppfee2 = () => {
      setppflink("https://media.licdn.com/dms/image/v2/D4D03AQGHXfsiYiem9g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691309793826?e=1737590400&v=beta&t=OKnjEXzc16n-nf5pV8JwIFRe4NLXaQ80bk-wLOSCHK8");
    };
    
  

  return(
    <section className="about-section">
        <div className="neumorphic-flat profile-image">
        <div className="image-holder">
          <img src={ppflink} alt="Profile" onMouseEnter={ppfee} onMouseLeave={ppfee2}/>
          </div>
        </div>
        <div className="neumorphic-flat about-text">
          <h1 onMouseEnter={iterateNames} onMouseLeave={reverseIterateNames}>R{fname}C{lname}</h1>
          <h3><i>aka Firebase Alchemist | Frontend Mad-Scientist</i></h3>
          <h2>{age}</h2>
          <h4>Student | Web-Developer</h4>
          <h4><i>Mumbai, India.</i></h4>
          <div className="social-resume">
          <div className="social neumorphic-convex">
            <a href="https://www.linkedin.com/in/ralph-carvalho-614b78257/" target="_blank" rel="noopener noreferrer">
              <RxLinkedinLogo/>
            </a>
            <a href="https://github.com/RA-L-PH" target="_blank" rel="noopener noreferrer">
            <FaSquareGithub/>
            </a>
            <a href="mailto:ralphaacarvalho@gmail.com">
              <MdEmail/>
            </a>
          </div>
          <a href="#">
          <div className="resume neumorphic-convex">
            <FaFileDownload/>
            <p>Resume</p>
          </div>
          </a>
        </div>
        </div>
    </section>
  )
}

export default About;