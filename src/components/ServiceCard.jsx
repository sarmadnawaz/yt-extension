// eslint-disable-next-line react/prop-types
function ServiceCard({ title, description, icon, onClick }) {
  return (
    <div
      className="max-w-xs	p-4 bg-white text-slate-900 rounded-md flex items-center justify-between gap-6 cursor-pointer"
      onClick={onClick}
    >
      <div>
        <h2 className="text-lg font-semibold mb-0.5">{title}</h2>
        <p className="text-xs font-medium text-slate-600">{description}</p>
      </div>
      <img className="w-12 h-12 logo" src={icon} alt="service icon" />
    </div>
  );
}

export default ServiceCard;
