import Button from "./components/Button";
import Navbar from "./components/Navbar";
import { FiPlusCircle } from "react-icons/fi";
import "./App.css";
import NotesCard from "./components/NotesCard";

function App() {
  return (
    <div>
      <Navbar />
      <Button text="Buat Catatan Baru" icon={FiPlusCircle} />
      <h1 className="title">Catatan Saya</h1>
      <NotesCard title="Judul" date="1212123" content="awikwok" />
      <NotesCard title="Judul" date="1212123" content="awikwok" />
    </div>
  );
}

export default App;
