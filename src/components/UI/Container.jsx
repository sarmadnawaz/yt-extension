import Popover from "./Popover";

// eslint-disable-next-line react/prop-types
function Container({ children }) {
  return (
    <Popover open={true} onClose={() => {}}>
      <div className="max-w-md min-w-[350px] px-4 py-6 bg-gradient-to-b from-indigo-600 bg-blue-500 rounded-lg">
        {children}
      </div>
    </Popover>
  );
}

export default Container;
