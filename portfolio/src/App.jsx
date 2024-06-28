import { useState, useEffect } from "react";
import Main from "./components/Main";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clean up
    return () => clearTimeout(timeout);
  }, []);

  return <div className="">{loading ? <Loader /> : <Main />}</div>;
}

export default App;
