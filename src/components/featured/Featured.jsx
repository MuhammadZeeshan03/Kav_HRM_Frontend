import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

import { PieChart,ResponsiveContainer,Pie} from 'recharts';


const Featured = (props) => {
  

  const pie_data = [
    {name: 'A', students: 400},
    {name: 'B', students: 700},
    {name: 'C', students: 200},
    {name: 'D', students: 1000}
  ];
    
  if(props.var==='/Employee')
  {

    return (

      <div className="featured">
    <ResponsiveContainer width="100%" height={250}>
    <PieChart height={250}>
      <Pie
        data={pie_data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        dataKey="students"
        label={({
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          value,
          index
        }) => {
          console.log("handling label?");
          const RADIAN = Math.PI / 180;
          // eslint-disable-next-line
          const radius = 25 + innerRadius + (outerRadius - innerRadius);
          // eslint-disable-next-line
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          // eslint-disable-next-line
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text
              x={x}
              y={y}
              fill="#8884d8"
              textAnchor={x > cx ? "start" : "end"}
              dominantBaseline="central"
            >
              {pie_data[index].name} ({value})
            </text>
          );
        }}
      />
    </PieChart>
  </ResponsiveContainer>

  </div>

  )

    //  return (
    // <>
    //        <div className="chart">


    //  <PieChart width={300} height={350}>
    //       <Pie data={pie_data} dataKey="students" outerRadius={150} fill="#5485ab" />
    //       </PieChart>

    //     </div>
    //   </>
    // )    
  }



  
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">All Projects Success </h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total  Sprints completed</p>
        <p className="amount">420</p>
        <p className="desc">
          Previous sprints processing. Last sprints may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">12.</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">12.4</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">12.4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
