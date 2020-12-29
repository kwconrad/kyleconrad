import React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} Kyle Conrad</footer>
    </div>
  );
}
