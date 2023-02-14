import { Link , NavLink} from "react-router-dom"

export default function Categories() {
    let activeStyle = {
        backgroundColor: "black" ,
        color: "white",
        borderRadius: "15px" ,
      };
    
      let activeClassName = "black";

    return(
        <ul className="Categories">
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/"><li className="filter_list">Home</li></NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined}
            to="/videos"> <li className="filter_list">Videos</li></NavLink>
            <NavLink to="/leadboard"
            style={({ isActive }) =>
            isActive ? activeStyle : undefined}><li className="filter_list">Leaderboard</li></NavLink>
            <NavLink
            style={({ isActive }) =>
            isActive ? activeStyle : undefined} to="/challenges"
            ><li className="filter_list">Challenges</li></NavLink>
        </ul>
        
    )
}