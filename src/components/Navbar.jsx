import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    //state for wheteher menu is opened or closed
    const [menuToggle,setMenuToggle]=useState(false);
    //function to toggle menu
    const toggleMenuFunc=()=>{
        setMenuToggle(!menuToggle);
    }
  return (
    <div className="h-[7%] flex py-[1em] px-[0.5em]">
        <h1 className="font-extrabold text-[2em] mr-[70%]">logo</h1>
        <FontAwesomeIcon icon={faBars} className="font-bold text-[2em]" />
        <div>
            <ul>Home</ul>
        </div>
    </div>
  )
}

export default Navbar