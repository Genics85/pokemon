import noise from "./assets/images/noise.png";
import Items from "./pages/Items";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${noise})`,
        backgroundPosition: "center",
        backgroundBlendMode:"color"
      }}
      className="bg-opacity-95 min-h-screen flex items-start bg-[#f1f1f1] justify-center pb-5"
    >
      <Items />
    </div>
  );
}

export default App;
