import ListaPanes from "../components/ListaPanes";
import NavDashboard from "../Components/NavDashboard";
import '../styles/ListaPanes.css'

function DashBoard() {
  return (
    <div className="w-screen h-screen">
      <NavDashboard />;
      <ListaPanes/>
    </div>
  );
}

export default DashBoard;