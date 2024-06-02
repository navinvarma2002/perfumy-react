import Navbar from "./Components/Navbar"
import Searchbar from "./Components/Searchbar"
import Perfumelist from "./Components/Perfumelist"
import Bottom from "./Components/Bottom"


function App() {

    return (
        <div>

            <Navbar></Navbar>
            <Searchbar></Searchbar>
            <Perfumelist></Perfumelist>
            <Bottom></Bottom>
        </div>
    )
}

export default App