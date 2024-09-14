const SkeletonRow = () => {
  return (
    <tr className="animate-pulse">
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 rounded-md w-24"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 rounded-md w-20"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 rounded-md w-28"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-6 bg-indigo-200 rounded-md w-16"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 rounded-md w-40"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 rounded-md w-28"></div>
      </td>
    </tr>
  );
};

export default SkeletonRow;
