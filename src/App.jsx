import { useState } from "react";
import NameForm from "./components/NameForm";
const App = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <NameForm name={name} onChange={handleChange}></NameForm>
    </div>
  );
};

export default App;
