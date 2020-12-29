import React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div className="container max-w-siteMax h-full flex flex-col">
      <main className="flex-1">{children}</main>
      <footer className="p-2 w-full mt-auto flex justify-center">
        <span>© {new Date().getFullYear()} Kyle Conrad</span>
      </footer>
    </div>
  );
}
