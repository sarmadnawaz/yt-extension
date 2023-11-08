/* eslint-disable react/prop-types */
const TextFieldForm = ({
  value,
  label,
  id,
  onSubmit,
  autoComplete = "off",
  submitButtonText = "Submit",
  placeholder = "",
}) => (
  <form onSubmit={onSubmit}>
    <div className="mt-4">
      <div>
        <label
          htmlFor={id}
          className="block text-base font-medium text-gray-200"
        >
          {label}
        </label>
        <div>
          <div className="mt-1">
            <input
              type="text"
              id={id}
              value={value}
              name={id}
              autoComplete={autoComplete}
              className="px-2 py-2 block w-full text-gray-900 bg-white rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder={placeholder}
            />
          </div>
          <div className="border-t border-gray-200 py-2">
            <button
              type="submit"
              className="w-full rounded-md border border-transparent bg-gray-900 py-1.5 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              {submitButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
);

export default TextFieldForm;
