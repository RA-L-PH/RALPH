import React from 'react';
import { FaStackOverflow } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

function Footer() {
  const socialLinks = {
    "stackoverflow": {
      url: "https://stackoverflow.com/users/27507610/ra-l-ph",
      iconClass: <FaStackOverflow />,
    },
    "instagram": {
      url: "https://www.instagram.com/ralph.carvalho.09/",
      iconClass: <FaInstagram />,
    },
    "gitlab": {
      url: "https://gitlab.com/RA-L-PH",
      iconClass: <FaGitlab />,
    },
    "fiverr": {
      url: "https://www.fiverr.com/ralphcarvalho?",
      iconClass: <TbBrandFiverr />,
    },
    "twitter": {
      url: "https://x.com/Ralphcarvalho04",
      iconClass: <FaXTwitter />,
    },
    "linkedin": {
      url: "https://www.linkedin.com/in/ralph-carvalho-614b78257/",
      iconClass: <FaLinkedin />,
        },
      "github": {
      url: "https://github.com/RA-L-PH",
      iconClass: <FaGithub />,
      },
      "medium": {
      url: "https://medium.com/@ralphaacarvalho",
      iconClass: <FaMedium />,
      },
      "pinterest": {
      url: "https://in.pinterest.com/wreckitun/",
      iconClass: <FaPinterest />,
      },
      "codepen": {
      url: "https://codepen.io/RA-L-PH",
      iconClass: <FaCodepen />,
      },
      "email": {
      url: "mailto:ralphaacarvalho@gmail.com",
      iconClass: <IoMail />,
    },
  };

  return (
    <footer className="footer">
      <div className="other-social-links">
        {Object.keys(socialLinks).map((key) => (
          <a key={key} href={socialLinks[key].url} target="_blank" rel="noopener noreferrer">
            {socialLinks[key].iconClass}
          </a>
        ))}
      </div>
      <div className="copyright">
        <p>Ralph Carvalho | Copyright © 2024 - All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;