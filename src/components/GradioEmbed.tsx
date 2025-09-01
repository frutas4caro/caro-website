export default function GradioEmbed() {
  // Replace with your Hugging Face Space URL. You can add ?__theme=light if desired.
  const url = 'https://carito-aa-career-conversation.hf.space';
  return (
    <iframe
      src={url}
      title="Gradio on Hugging Face"
      allow="clipboard-read; clipboard-write; microphone; camera"
    />
  );
}
