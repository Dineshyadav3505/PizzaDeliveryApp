import React from 'react';

const Input = ({
  label,
  divClass,
  type = 'text',
  placeholder = 'Placeholder',
  name,
  required,
  className,
  register,
  validationRules,
  error, // Prop for displaying error messages
}) => {
  return (
    <div className={`mb-4 ${divClass}`}>
      {label && <label className="block text-sm font-medium mb-1 text-white">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className={`py-2 px-5 focus:outline-zinc-500 text-white text-sm outline-none rounded bg-zinc-800 ${className}`}
        required={required}
        {...register(name, { required, ...validationRules })}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default Input;