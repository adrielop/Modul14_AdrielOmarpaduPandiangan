import {Link} from "react-router-dom"

const Navbar = () =>{
    return(
        <nav class="p-5 bg-cyan-500">
            <ul class="px-8" >
                <Link to="/" class="py-3 px-5 text-center duration-300 hover:scale-105 hover:bg-cyan-100 rounded-full">Home</Link>
                <Link to="/about" class="py-3 px-5 text-center duration-300 hover:scale-105 hover:bg-cyan-100 rounded-full" >About</Link>
                <Link to="/Contact" class="py-3 px-5 text-center duration-300 hover:scale-105 hover:bg-cyan-100 rounded-full">Contact</Link>
            </ul>
        </nav>
    )
}

export default Navbar;