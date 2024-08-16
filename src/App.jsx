import { useState } from "react";
import Sidebar from "./components/sidebar";
import "./App.css"; // Assuming you have a general CSS file
import Header from "./components/Header";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div className="App">
      <Header onPatientsClick={toggleSidebar} />
      {isSidebarVisible && <Sidebar />}
      {/* Other components can be added here */}
    </div>
  );
}

export default App;
