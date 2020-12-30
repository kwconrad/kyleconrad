import React from "react";
import { motion } from "framer-motion";

import IconDribbble from "../images/dribbble.svg";
import IconGithub from "../images/github.svg";
import IconLinkedIn from "../images/linkedin.svg";

import Layout from "../components/layout";
import SEO from "../components/seo";

const DribbbleURL = "https://dribbble.com/kwconrad";
const GithubURL = "https://github.com/conraddev";
const LinkedInURL = "https://linkedin.com/in/kylewconrad/";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="h-full flex items-center">
        <div className="w-full flex flex-col">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.75 }}
            className="text-gradient-util text-transparent text-32 leading-40 md:text-56 md:leading-72 lg:text-56 lg:leading-72 font-black font-headings"
          >
            Hi, I'm Kyle. I solve problems and design solutions to help
            businesses grow.
          </motion.h1>
          <div className="flex items-center mt-2 sm:mt-0 sm:justify-start space-x-2">
            <a
              href={DribbbleURL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-transparent hover:bg-lightGrey dark:hover:bg-midGrey transition-all duration-200"
            >
              <IconDribbble className="h-2 w-2 text-black dark:text-white"></IconDribbble>
            </a>
            <a
              href={LinkedInURL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-transparent hover:bg-lightGrey dark:hover:bg-midGrey transition-all duration-200"
            >
              <IconLinkedIn className="h-2 w-2 text-black dark:text-white"></IconLinkedIn>
            </a>
            <a
              href={GithubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-transparent hover:bg-lightGrey dark:hover:bg-midGrey transition-all duration-200"
            >
              <IconGithub className="h-2 w-2 text-black dark:text-white"></IconGithub>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
