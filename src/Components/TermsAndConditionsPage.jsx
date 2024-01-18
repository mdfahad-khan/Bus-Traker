// TermsAndConditionsPage.jsx
import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md h-[90vh]">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Terms and Conditions
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          eros vel elit auctor tincidunt. Vestibulum sodales, urna vitae
          volutpat varius, justo sapien tincidunt tortor, non interdum libero
          tellus vel turpis.
        </p>
        <p className="text-gray-600 mt-4">
          Phasellus consequat justo vel quam dapibus, vel auctor lacus
          ullamcorper. Sed convallis est eu ante volutpat, vel facilisis nisl
          luctus. Duis ut nulla non ex tincidunt congue id vel odio.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;