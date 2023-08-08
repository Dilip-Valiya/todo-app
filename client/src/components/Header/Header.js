import React from "react";

export default function Header() {
  return (
    <div className="max-w-full mx-auto px-16 sm:px-24">
      <div className="flex justify-between items-center py-12 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <div className="flex flex-col justify-center">
            <div className="text-center px-8 py-8">
              <h1 className="flex text-primary-inverse font-bold font-base capitalize heading-l ml-24 max-w-sm text-base">
                TODO APP
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
