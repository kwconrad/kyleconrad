import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="h-full w-full flex items-center">
        <h1 className="text-black text-32 leading-40 md:text-48 md:leading-64 lg:text-64 lg:leading-80 font-black font-headings">
          Hi, I'm Kyle. I solve problems and design solutions to help businesses
          grow.
        </h1>
      </div>
    </Layout>
  );
}
