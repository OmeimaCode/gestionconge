import HomePage from "../pages/HomePage";

const SubmitButton = ({ buttonText }) => {
  return (
    <>
      <button
        onClick={() => <HomePage />}
        type="submit"
        className="w-full rounded-md border border-transparent bg-amber-100 py-3 px-4 text-2xl font-medium text-cyan-800 shadow-sm hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2"
      >
        {buttonText}
      </button>
    </>
  );
};

export default SubmitButton;
