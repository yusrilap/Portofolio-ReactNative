import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto fixed bottom-0 md:left-40 bg-dark">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Develop by{" "}
        <a
          className="font-medium"
          href="https://instagram.com/yusrilazharp"
          target="_blank"
          rel="noreferrer noopener"
        >
          Yusril Azhar Permana
        </a>{" "}
      </p>
    </footer>
  );
};
export default Footer;
