import ServicesList from "../components/ServicesList";
import TranslateTranscript from "./TranslateTranscript";
import { useFeature } from "../context/FeatureProvider";

const RenderFeature = () => {
  const { feature } = useFeature();

  switch (feature) {
    case "translate-transcript":
      return <TranslateTranscript />;
    default:
      return <ServicesList />;
  }
};

export default RenderFeature;
