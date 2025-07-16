import React from "react";

const EmailSignature = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8 md:p-10 text-[#3a3a3a] font-serif border border-gray-200">
      {/* Top Section: Logo and Company Name */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4">
        <img
          src="/CrestPointLogo.png" // Make sure this path is correct
          alt="CrestPoint Logo"
          className="w-20 h-20 object-contain ml-0 pl-0 sm:mx-0"
        />
        {/* Now only this text section has the underline */}
        <div className="text-center sm:text-left border-b border-gray-300 pb-4 w-full">
          <h1 className="text-4xl font-normal text-[#1d2c38]">CrestPoint</h1>
          <p className="text-sm text-[#4a4a4a] pl-1">Strategic Advisors</p>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="mt-6 space-y-1 text-center sm:text-left ml-24">
        <p className="text-[#1d2c38] font-bold text-lg">Gary Dmitriev</p>
        <p className="text-sm">gary@crestpointadvisors.com</p>
        <p className="text-sm">347-351-7492</p>

        <p className="text-[#9d4b33] text-sm font-medium mt-2">
          Crest Point Strategic Advisors LLC
        </p>
        <p className="text-sm">167 Madison Ave, Suite 205 #394</p>
        <p className="text-sm">www.crestpointadvisors.com</p>
      </div>
    </div>
  );
};

export default EmailSignature;
