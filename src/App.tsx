import "./App.css";
import Chats from "./components/Chats";
import Header from "./components/Header";
import Prompt from "./components/Prompt";
import TitleBar from "./components/TitleBar";

function App() {
  return (
    <main className="flex flex-col bg-[#FAF9F4] w-screen h-screen">
      <Header />
      <TitleBar />
      <Chats />
      <Prompt />
    </main>
  );
}

export default App;
