import React from "react";
import { Loader } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center p-10">
      <Loader className="h-6 w-6 animate-spin text-teal-600" />
    </div>
  );
};

export default LoadingSpinner;
