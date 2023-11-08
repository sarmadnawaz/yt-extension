import TranslationIcon from "../assets/translate.jpg";
import BlogIcon from "../assets/blog.png";
import ServiceCard from "./ServiceCard";
import { useFeature } from "../context/FeatureProvider";

const services = [
  {
    title: "Translate Transcript",
    description: "Translate video transcript to any language from any language",
    icon: TranslationIcon,
    id: "translate-transcript",
  },
  {
    title: "Video To Blog",
    description: "Convert this video content to blog with just one click",
    icon: BlogIcon,
    id: "video-to-blog",
  },
];

const ServicesList = () => {
  const { setFeature } = useFeature();

  const onClick = (id) => () => {
    setFeature(id);
  };

  return (
    <div>
      <div className="pb-4">
        <h1 className="text-2xl font-bold mb-1">Hello from youtube copilot</h1>
        <p className="text-sm text-gray-200">
          How are you? I hope you are doing well
        </p>
      </div>
      <ul className="flex flex-col gap-4">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} onClick={onClick(service?.id)} />
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;
