// External Dependencies
import { useState } from 'react';

// Relative Dependencies
import { Button } from './ui/button';

type Props = {};

const Workspaces = (props: Props) => {
  const workspaces = [
    'Personal Programming super long name',
    'Shopping',
    'Travel',
    'Work',
  ];

  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      <ul className="">
        {workspaces.map((workspace, index) => (
          <li
            className="flex items-center space-x-2 hover:bg-slate-200 hover:cursor-pointer p-2"
            key={workspace}
          >
            {/* <FolderIcon className="w-5 h-5 text-blue-500" /> */}
            <span>{workspace}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workspaces;
