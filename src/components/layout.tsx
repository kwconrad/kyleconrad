import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div className="h-full w-full bg-white dark:bg-black">
      <div className="h-full container px-2 md:px-4 lg:px-8 xl:px-8 flex flex-col">
        <main className="flex-1">{children}</main>
        <footer className="p-2 w-full mt-auto flex justify-center">
          <span className="text-black dark:text-white">
            © {new Date().getFullYear()} Kyle Conrad
          </span>
        </footer>
      </div>
    </div>
  );
}
