const App = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  const [users, setUsers] = React.useState([]);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };
    const res = axios.post(
      "https://react-ee842-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
      payload,
    );

    setFormData({ userName: "", email: "", phone: "" });
  };
  const fetchData = async () => {
    let res = await axios.get(
      "https://react-ee842-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
    );
    const out = Object.entries(res.data);

    setUsers(out);
  };

 

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          onChange={handelChange}
          type="text"
          placeholder="Enter UserName"
          name="name"
          value={formData.name}
        />
        <input
          onChange={handelChange}
          type="email"
          placeholder="Enter UserEmail"
          name="email"
          value={formData.email}
        />
        <input
          onChange={handelChange}
          type="number"
          placeholder="Enter UserPhoneNo."
          name="phone"
          value={formData.phone}
        />
        <input type="submit" />
      </form>

      <button onClick={fetchData} className="fetchbtn">
        Fetch Data
      </button>
      <div className="container">
        {users.map((elem, i) => (
          <DisplayData key={i} data={elem}  fetchData={fetchData}/>
        ))}
      </div>
    </>
  );
};



const DisplayData = (props) => {
    const{data,fetchData}=props
    
 const handelDelete = async(id) => {
  const res=  await axios.delete(`https://react-ee842-default-rtdb.asia-southeast1.firebasedatabase.app/users/${id}.json`)
    console.log(res);
    fetchData()
};
  return (
    <>
      <div className="card">
        <h3>{data[1].name}</h3>
        <h4>{data[1].email}</h4>
        <p>{data[1].phone}</p>
        <button onClick={() => handelDelete(props.data[0])}>Delete</button>
        <button>Edit</button>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
