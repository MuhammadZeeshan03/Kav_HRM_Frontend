import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Home = () => {
  return (
    <div className="home">
      <Sidebar  var={window.location.pathname}/>
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
        <Widget type="resource"  var={window.location.pathname}/>
          <Widget type="sprint" var={window.location.pathname}/>
          <Widget type="success-rate"  var={window.location.pathname}/>
          <Widget type="attendance" var={window.location.pathname}/>
        </div>
        <div className="charts">
        
        
          <Featured var={window.location.pathname} />
          <Chart title="Last 6 Months (Performance)" aspect={2 / 1} var={window.location.pathname} />
        </div>

        <div className="listContainer">
          <div className="listTitle">All Resources</div>
          <Table var={window.location.pathname}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
