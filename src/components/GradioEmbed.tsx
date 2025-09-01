export default function GradioEmbed() {
  // Replace with your Hugging Face Space URL. You can add ?__theme=light if desired.
  const url = 'https://carito-aa-career-chat-agent.hf.space';
  return (
    <iframe
      src={url}
      width="850"
      height="450"
      title="Gradio on Hugging Face"
      allow="clipboard-read; clipboard-write; microphone; camera"
      style={{ border: 'none' }}
    />
  );
}
