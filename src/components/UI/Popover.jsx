// eslint-disable-next-line react/prop-types
function Popover({ children, open }) {
  return (
    <div
      className={`fixed top-50 left-50 -translate-x-50 -translate-y-50 ${
        open ? "fixed" : "hidden"
      }`}
    >
      {children}
    </div>
  );
}

export default Popover;
