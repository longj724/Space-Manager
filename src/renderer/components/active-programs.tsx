import React from 'react';

type Props = {};

const ActivePrograms = (props: Props) => {
  const activePrograms = ['Personal Programming', 'Shopping', 'Travel', 'Work'];

  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      <ul className="">
        {activePrograms.map((program, index) => (
          <li
            className="flex items-center space-x-2 hover:bg-slate-200 hover:cursor-pointer p-2"
            key={program}
          >
            {/* <FolderIcon className="w-5 h-5 text-blue-500" /> */}
            <span>{program}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivePrograms;
