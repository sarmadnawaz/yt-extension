import "./App.css";
import RenderFeature from "./features";
import AppContainer from "./components/UI/Container";
import { FeatureProvider } from "./context/FeatureProvider";

const App = () => (
  <AppContainer>
    <FeatureProvider>
      <RenderFeature />
    </FeatureProvider>
  </AppContainer>
);

export default App;
