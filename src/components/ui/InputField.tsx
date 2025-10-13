import React from 'react';

interface InputFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  large?: boolean;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  type = 'text',
  large = false,
  onChange,
}) => {
  const inputBaseClasses = "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors";
  const inputLargeClasses = "px-4 py-3 text-lg";
  const inputNormalClasses = "px-3 py-2";

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={label} className="text-sm font-medium text-white">
        {label}
      </label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          ${inputBaseClasses}
          ${large ? inputLargeClasses : inputNormalClasses}
        `}
      />
    </div>
  );
};

export default InputField;