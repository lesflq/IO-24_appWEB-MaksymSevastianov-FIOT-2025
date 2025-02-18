import React from 'react';

function Table() {
  return (
    
    <div className="px-2 flex justify-center items-center">
        <h1 className='text-xl md:text-4xl text-gray-800 font-semibold px-10'>Our benefits</h1>
      <div className="w-full max-w-6xl overflow-hidden shadow-lg rounded-2xl">
        <table className="w-full border-collapse bg-white rounded-2xl">
          <thead>
            <tr className="bg-blue-600 text-white text-lg">
              <th className="p-4 text-left">Advantage</th>
              <th className="p-4 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-300 hover:bg-gray-100 transition">
              <td className="p-4">Intuitive Interface</td>
              <td className="p-4">Convenient and user-friendly design for all users</td>
            </tr>
            <tr className="border-t border-gray-300 hover:bg-gray-100 transition">
              <td className="p-4">Flexible Analytics</td>
              <td className="p-4">Detailed reports on student progress</td>
            </tr>
            <tr className="border-t border-gray-300 hover:bg-gray-100 transition">
              <td className="p-4">Mobile Support</td>
              <td className="p-4">Works on any device without losing functionality</td>
            </tr>
            <tr className="border-t border-gray-300 hover:bg-gray-100 transition">
              <td className="p-4">Process Automation</td>
              <td className="p-4">Automated checks and learning process settings</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;