import React, { useState } from 'react';

export default function CheckBox() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div
        className={`w-5 h-5 border-2 rounded-md transition-colors duration-200 ease-in-out ${
          checked ? ' bg-teal-500 border-teal-500' : 'border-teal-500 bg-white'
        }`}
      />
    </label>
  );
}
