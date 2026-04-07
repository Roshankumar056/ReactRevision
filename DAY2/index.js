const users = [
  {
    id: 1,
    name: "Roshan Kumar",
    age: 22,
    email: "roshan@gmail.com",
    profession: "Full Stack Developer",
    phone: 7488245064,
    subscribed: true,
    img: "https://tse4.mm.bing.net/th/id/OIP.qM8NOVuRx6fQ6aZHqDl8bAHaLH?pid=Api&P=0&h=180"
  },
  {
    id: 2,
    name: "Amit Sharma",
    age: 25,
    email: "amit@gmail.com",
    profession: "Backend Developer",
    phone: 9876543210,
    subscribed: false,
    img: "https://tse4.mm.bing.net/th/id/OIP.qM8NOVuRx6fQ6aZHqDl8bAHaLH?pid=Api&P=0&h=280"
  },
  {
    id: 3,
    name: "Priya Singh",
    age: 23,
    email: "priya@gmail.com",
    profession: "Frontend Developer",
    phone: 9123456780,
    subscribed: true,
    img: "https://tse4.mm.bing.net/th/id/OIP.qM8NOVuRx6fQ6aZHqDl8bAHaLH?pid=Api&P=0&h=380"
  },
  {
    id: 4,
    name: "Rahul Verma",
    age: 28,
    email: "rahul@gmail.com",
    profession: "UI/UX Designer",
    phone: 9988776655,
    subscribed: false,
    img: "https://tse4.mm.bing.net/th/id/OIP.qM8NOVuRx6fQ6aZHqDl8bAHaLH?pid=Api&P=0&h=480"
  },
  {
    id: 5,
    name: "Sneha Gupta",
    age: 21,
    email: "sneha@gmail.com",
    profession: "QA Engineer",
    phone: 8899001122,
    subscribed: true,
    img: "https://tse4.mm.bing.net/th/id/OIP.qM8NOVuRx6fQ6aZHqDl8bAHaLH?pid=Api&P=0&h=580"
  }
];

const UserCard=(props)=>{
    const {name,age,email,profession,phone,subscribed,img}=props.data
    return(
        <div>
            <img src={img}/>
            <h3>{name}</h3>
            <h2>{email}</h2>
        </div>
    )
}


const App=()=>{
    return(
        <>
        {users.map((elem,index)=>(
           <UserCard key={index}
            data={elem}
           />
        ))}
        </>
    )
}



ReactDOM.createRoot(document.querySelector("#root")).render(<App/>)