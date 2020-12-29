import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex-1">
        <h1 className="text-black text-64 font-bold font-headings">
          Hi, I'm Kyle. I solve problems and design solutions to help businesses
          grow.
        </h1>
      </div>
    </Layout>
  );
}
