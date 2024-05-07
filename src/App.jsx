import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";

function App() {

  return (
    <>
      <div className="bg-[#18191A] h-screen">
        <Navbar/>
        <Header />
        <SearchBar />
        <JobCard/>
      </div>
    </>
  )
}

export default App
