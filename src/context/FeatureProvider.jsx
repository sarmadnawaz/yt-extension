/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from "react";

const FeatureContext = createContext(null);

const FeatureProvider = ({ children }) => {
  const [feature, setFeature] = useState(null);
  return (
    <FeatureContext.Provider value={{ feature, setFeature }}>
      {children}
    </FeatureContext.Provider>
  );
};

const useFeature = () => {
  const context = useContext(FeatureContext);
  if (context === undefined) {
    throw new Error("useFeature must be used within a FeatureProvider");
  }
  return context;
};

export { FeatureProvider, useFeature };
