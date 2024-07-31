import React from 'react';

const Input = ({
  type = 'text',
  placeholder = 'Placeholder',
  name,
  required,
  className,
  register,
}) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        placeholder={placeholder}
        className={`py-2 px-5 focus:outline-zinc-500 text-white text-sm outline-none rounded bg-zinc-800 ${className}`}
        required={required}
        {...register(name, { required })} // Register the input
      />
    </div>
  );
};

export default Input;