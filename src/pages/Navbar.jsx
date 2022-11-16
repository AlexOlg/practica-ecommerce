import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const navigate = useNavigate();
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container" style={{display:'flex', flexWrap:'initial', alignItems:'center', justifyContent: 'space-evenly'}}>
        <Link to="/" className="btn btn-outline-primary">
          Inicio
        </Link>
        <Link to="/Productos" className="btn btn-outline-primary">
          Productos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

// export const Navbar = () => {
//   const navigate = useNavigate()
//   return (
//     <nav>
//       <ul
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-around",
//           padding: 10,
//           listStyleType: "none",
//           cursor: "pointer",
//           backgroundColor: "skyblue",
//         }}
//       >
//         <img
//           src="./productos/logo1.png"
//           style={{ maxWidth: 100, marginLeft: -400 }}
//           onClick={()=> navigate('./Home')}
//         />
//         <li onClick={()=> navigate('./Productos')} >Productos</li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
