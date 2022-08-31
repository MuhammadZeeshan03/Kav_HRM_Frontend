export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "project",
    headerName: "Project",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.project}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "customer",
    headerName: "Customer",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    project: "Auctum",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    Customer: Kris,
    email: "3snow@gmail.com",
    status: "pending",
  },
  {
    id: 2,
    project: "Simpled Card",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    Customer: Kris,
    email: "3snow@gmail.com",
    status: "pending",
  },
  {
    id: 3,
    project: "LineUps",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    Customer: Kris,
    email: "3snow@gmail.com",
    status: "pending",
  },
];
