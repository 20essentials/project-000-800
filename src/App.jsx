import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "bulma/css/bulma.min.css";

const App = () => {
  useEffect(() => {
    document.body.style.height = "100vh";
    document.body.style.width = "100%";
    document.body.style.backgroundImage = "url('assets/fondo-green.avif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }, []);

  const textStyle = {
    backgroundColor: "black",
    mixBlendMode: "multiply",
    textAlign: "center",
    width: "fit-content",
    color: "white",
    fontSize: "4vmax",
    padding: "0.5rem 2rem",
    borderRadius: "999px",
    position: "absolute",
    top: "50px",
    left: "50%",
    transform: "translateX(-50%)"
  };

  return <div style={textStyle}>NATURE</div>;
};

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
const root = createRoot(rootEl);
root.render(<App />);

export default App;
