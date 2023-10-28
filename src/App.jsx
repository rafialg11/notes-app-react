import Button from "./components/Button";
import Navbar from "./components/Navbar";
import { FiPlusCircle } from "react-icons/fi";

function App() {
  return (
    <div>
      <Navbar />
      <Button text="Buat Catatan Baru" icon={FiPlusCircle} />
    </div>
  );
}

export default App;
