import Card from "../components/Card";

export default function Home() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card title="Task Manager" description="Add, complete, and delete tasks." />
      <Card title="API Data" description="Fetch and display data from an external API." />
      <Card title="Dark Mode" description="Toggle between light and dark themes." />
    </div>
  );
}
