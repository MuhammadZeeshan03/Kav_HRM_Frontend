import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = (props) => {

      if(props.var==='/Employee'){
    return null
  }
// Here is the API to get Data from the Backend

//   const rows = await axios
//   .post(" ... LINK FROM BACKEND TEAM . . . ", data,{
// headers: headers
//   }).catch((err) => {
//     console.log(err)
// });

// console.log(response)
// if (response && response.data) {
//   formik.resetForm();
// }


// Hard Codded
// Once backend Ready will get this data from the server

  const rows = [
    {
      id: 1143155,
      project: "Lineups",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      resource: "John Smith",
      date_started: "1 March",
      status: "Completed",
    },
    {
      id: 2235235,
      project: "Simpled Card",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      resource: "Michael Doe",
      date_started: "1 March",
      
      status: "In-Progress",
    },
    {
      id: 2342353,
      project: "Auctum",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      resource: "John Smith",
      date_started: "1 March",
    
      status: "In-Progress",
    },
   
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Resource ID</TableCell>
            <TableCell className="tableCell">Projects</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Starting Date</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.project}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.resource}</TableCell>
              <TableCell className="tableCell">{row.date_started}</TableCell>
              
  
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
