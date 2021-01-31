import React from "react";

const Alert = (props) => {
  const { alertType, alertMessage } = props;
  return (
    <>
      {alertType === "error" ? (
        <span className="px-6 inline-flex text-xs leading-5 font-semibold rounded-md bg-red-100 text-red-800 my-2 w-full h-full">
          {alertMessage}
        </span>
      ) : alertType === "success" ? (
        <span className="px-6 inline-flex text-xs leading-5 font-semibold rounded-md bg-green-100 text-green-800 my-2 w-full h-full">
          {alertMessage}
        </span>
      ) : (
        <span className="px-6 inline-flex text-xs leading-5 font-semibold rounded-md bg-blue-100 text-blue-800 my-2 w-full h-full">
          {alertMessage}
        </span>
      )}
    </>
  );
};

export default Alert;
