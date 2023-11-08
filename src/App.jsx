import "./App.css";
import Popover from "./components/UI/Popover";
import ServicesList from "./components/ServicesList";
// import TranslateTranscript from "./features/TranslateTranscript";

function App() {
  return (
    <Popover open={true} onClose={() => {}}>
      <div className="max-w-md min-w-[350px] px-4 py-6 bg-gradient-to-b from-indigo-600 bg-blue-500 rounded-lg">
        <ServicesList />
        {/* <TranslateTranscript /> */}
      </div>
    </Popover>
  );
}

export default App;
