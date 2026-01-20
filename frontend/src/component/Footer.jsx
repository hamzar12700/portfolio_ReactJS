import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          About Us
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          laboriosam recusandae dolor ipsum eum esse animi doloribus tempore
          inventore fugiat dicta vitae dolore nam atque corporis, nobis,
          aliquam illo ratione!
        </p>

        <div className="mt-6 border-t pt-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
