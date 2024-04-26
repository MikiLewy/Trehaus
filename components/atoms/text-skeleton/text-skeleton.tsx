const TextSkeleton = () => {
  return (
    <div role="status" className="space-y-2.5 animate-pulse max-full">
      <div className="flex items-center w-full">
        <div className="h-2.5 bg-gray-200 rounded-full  w-32"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
      </div>
      <div className="flex items-center w-full">
        <div className="h-2.5 bg-gray-200 rounded-full  w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
      </div>
      <div className="flex items-center w-full ">
        <div className="h-2.5 bg-gray-300 rounded-full w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full  w-80"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
      </div>
      <div className="flex items-center w-full">
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full  w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
      </div>
      <div className="flex items-center w-full ">
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-32"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full  w-full"></div>
      </div>
      <div className="flex items-center w-full ">
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
        <div className="h-2.5 ms-2 bg-gray-200 rounded-full  w-80"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
      </div>
      <span className="sr-only">Ładowanie...</span>
    </div>
  );
};

export default TextSkeleton;
