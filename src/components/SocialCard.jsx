import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const SocialCard = () => {
  return (
    <ul className="flex items-center gap-7 justify-center my-10">
      <li className="text-sky-700 hover:text-sky-500 cursor-pointer">
        <a href="https://github.com/kemalkujovic" target="_blank">
          <GitHubIcon fontSize="large" />
        </a>
      </li>
      <li className="text-sky-700 hover:text-sky-500 cursor-pointer">
        <a href="https://www.linkedin.com/in/kemal-kujovic/" target="_blank">
          <LinkedInIcon fontSize="large" />
        </a>
      </li>
      <li className="text-sky-700 hover:text-sky-500 cursor-pointer">
        <a href="https://facebook.com" target="_blank">
          <FacebookIcon fontSize="large" />
        </a>
      </li>
      <li className="text-sky-700 hover:text-sky-500 cursor-pointer">
        <a href="https://twitter.com" target="_blank">
          <TwitterIcon fontSize="large" />
        </a>
      </li>
    </ul>
  );
};

export default SocialCard;
