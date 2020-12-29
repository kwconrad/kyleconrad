import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const headingStyle = {
  background:
    "radial-gradient(ellipse at 5% 5%, #f0acad 0%, rgba(240,172,173,0) 75%),radial-gradient(ellipse at 95% 5%, #f8ae4b 0%, rgba(248,174,75,0) 75%),radial-gradient(ellipse at 95% 95%, #dbb048 -15%, rgba(219,176,72,0) 75%),radial-gradient(ellipse at 5% 95%, #c284e9 50%, rgba(194,132,233,0) 75%)",
  backgroundSize: "cover",
  backgroundClip: "text",
};

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="h-full w-full flex items-center">
        <h1
          style={headingStyle}
          className="text-transparent text-32 leading-40 md:text-48 md:leading-64 lg:text-64 lg:leading-80 font-black font-headings"
        >
          Hi, I'm Kyle. I solve problems and design solutions to help businesses
          grow.
        </h1>
      </div>
    </Layout>
  );
}
