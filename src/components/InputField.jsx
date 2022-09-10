const InputField = ({ label, name, type, placeHolder }) => {
  return (
    <div className="mb-3 border rounded-md border-gray-600 py-1 px-3">
      <label htmlFor={name} className="block text-sm text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeHolder}
        className="block px-0 w-full border-0 shadow-sm focus:ring-0 sm:text-sm"
      />
    </div>
  );
};

export default InputField;
