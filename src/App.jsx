import Layout from "./components/Layout";
import Home from "./pages/Home";
import TaskManager from "./pages/Tasks";
import ApiData from "./pages/ApiData";

function App() {
  return (
    <Layout>
      <Home />
      <TaskManager />
      <ApiData />
    </Layout>
  );
}

export default App;
 