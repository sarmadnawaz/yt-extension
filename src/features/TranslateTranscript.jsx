import TextFieldForm from "../components/TextFieldForm";
import TextBox from "../components/TextBox";
import { BackButtonIcon } from "../components/UI/Buttons";

function TranslateTranscript() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <BackButtonIcon />
        <h1 className="text-center text-xl font-semibold">
          Transcript Translation
        </h1>
      </div>
      <TextFieldForm
        id="language"
        label="Translate to"
        value=""
        placeholder="e.g. English, Hindi, etc."
        submitButtonText="Translate"
        onSubmit={() => {}}
      />
      <TextBox />
    </div>
  );
}

export default TranslateTranscript;
