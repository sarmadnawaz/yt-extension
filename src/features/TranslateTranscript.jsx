import TextFieldForm from "../components/TextFieldForm";
import TextBox from "../components/TextBox";

function TranslateTranscript() {
  return (
    <div>
      <h1 className="text-center text-xl font-semibold mb-2">
        Transcript Translation
      </h1>
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
