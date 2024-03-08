import noise from "./assets/images/noise.png";
import AppRouter from "./routing/routing";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${noise})`,
        backgroundPosition: "center",
      }}
      className="bg-opacity-95 bg-blend-color min-h-screen flex items-start bg-[#f1f1f1] justify-center pb-5"
    >
      <AppRouter />
    </div>
  );
}

export default App;
