import React from "react";

const PageNotFound = () => {
  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/src/image/8715883.webp')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-gray-50 text-center -mt-52">
              <div className="relative ">
                <h1 className="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold">
                  <span>4</span>
                  <span>0</span>
                  <span>4</span>
                </h1>
                <span className="absolute top-0 -ml-12 text-gray-300 font-semibold">
                  Oops!
                </span>
              </div>
              <h5 className="text-gray-300 font-semibold -mr-10 -mt-3">
                Page not found
              </h5>
              <p className="text-gray-100 mt-2 mb-6">
                We are sorry, but the page you requested was not found
              </p>
              <a
                href="/"
                className="bg-green-400 px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg
                "
              >
                Go to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
