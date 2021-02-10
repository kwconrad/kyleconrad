import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import IconDribbble from "../images/dribbble.svg";
import IconGithub from "../images/github.svg";
import IconLinkedIn from "../images/linkedin.svg";

import Layout from "../components/layout";
import SEO from "../components/seo";

const DribbbleURL = "https://dribbble.com/kwconrad";
const GithubURL = "https://github.com/kwconrad";
const LinkedInURL = "https://linkedin.com/in/kylewconrad/";

export default function IndexPage() {
  const iconClassNames = "h-2 w-2 text-black dark:text-white";
  const iconLinkClassNames =
    "p-1 rounded-xl bg-transparent hover:bg-lightGrey dark:hover:bg-midGrey transition-all duration-200";

  return (
    <Layout>
      <SEO title="Home" />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.75 }}
          className="h-full flex items-center"
        >
          <div className="w-full flex flex-col">
            <h1 className="text-gradient-util text-transparent text-32 leading-40 md:text-56 md:leading-72 lg:text-56 lg:leading-72 font-black font-headings">
              Hi, I'm Kyle. I solve problems and design solutions to help
              businesses grow.
            </h1>
            <div className="mt-1 flex items-center space-x-2">
              <a
                href={DribbbleURL}
                target="_blank"
                rel="noopener noreferrer"
                className={iconLinkClassNames}
              >
                <IconDribbble className={iconClassNames}></IconDribbble>
              </a>
              <a
                href={LinkedInURL}
                target="_blank"
                rel="noopener noreferrer"
                className={iconLinkClassNames}
              >
                <IconLinkedIn className={iconClassNames}></IconLinkedIn>
              </a>
              <a
                href={GithubURL}
                target="_blank"
                rel="noopener noreferrer"
                className={iconLinkClassNames}
              >
                <IconGithub className={iconClassNames}></IconGithub>
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
