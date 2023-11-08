import { useFeature } from "../../context/FeatureProvider";

function BackButtonIcon() {
  const { setFeature } = useFeature();
  return (
    <svg
      onClick={() => setFeature(null)}
      className="w-6 h-6 text-gray-500"
      fill="none"
      stroke="#fff"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
}

export { BackButtonIcon };
