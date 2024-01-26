import NavBar from "./components/NavBar";
import Links from "./routes/Links";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <NavBar />
        </div>
        <div className="row">
          <Links/>
        </div>
      </div>
    </>
  )
}

export default App
