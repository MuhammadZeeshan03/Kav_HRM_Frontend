import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
   Bar, 
   Cell, 
   YAxis,
   Legend
} from "recharts";
import { red } from "@mui/material/colors";
import { BoxContainer } from './../accountBox/common';


const c_data = [
  {
    name: 'Category A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Category B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Catagory C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Catagory D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Catagory E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Catagory F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Catagory G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const Chart = (props) => {


  if(props.var==='/Employee')
  {
    return (

       <div className="barchart">
        <ResponsiveContainer width="100%" aspect= {3} >

          <BarChart
        width={500}
        height={300}
        data={c_data}
        margin ={{
          top:5,
          right:30,
          left:20,
          bottom:5,
        }}  
>



<CartesianGrid strokeDasharray="3 3"/>
<XAxis dataKey='name' tick ={{stroke:red}}/> 
<YAxis/>
<Tooltip/>

<Bar dataKey='pv' fill ="#8884D8"/>
<Bar dataKey='uv' fill ="#0984F8"/>
<Bar dataKey='amt' fill ="#5485ab"/>
</BarChart>
 </ResponsiveContainer>
    </div>
    )
  }

  return (
    <div className="chart">
      <div className="title">{props.title}</div>
      <ResponsiveContainer width="100%" aspect={props.aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0062cc" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
