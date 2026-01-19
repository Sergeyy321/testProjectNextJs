

export default  function TaskSearch  ({ value, onChange })  {

  return (
    <input
      type="text"
      placeholder="Search task..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
     className="
        w-full mb-4 px-3 py-2 rounded-md
        bg-gray-50 dark:bg-gray-800
        border border-gray-300 dark:border-gray-700
        text-gray-900 dark:text-gray-100
        placeholder-gray-400
        focus:outline-none
        focus:ring-2 focus:ring-blue-500
        focus:border-blue-500
      "
    />
  );
};