import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="h-full w-full flex items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.75 }}
          className="text-gradient-util text-transparent text-32 leading-40 md:text-56 md:leading-72 lg:text-56 lg:leading-72 font-black font-headings"
        >
          Hi, I'm Kyle. I solve problems and design solutions to help businesses
          grow.
        </motion.h1>
      </div>
    </Layout>
  );
}
