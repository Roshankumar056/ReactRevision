// const users = [
//   {
//     name: "Roshan Kumar",
//     age: 22,
//     email: "roshankr056@gmail.com",
//     profession: "Full Stack Developer",
//     phone: 7488245064,
//     subscribed: true,
//     img: "https://tse4.mm.bing.net/th/id/OIP.qM8NOVuRx6fQ6aZHqDl8bAHaLH?pid=Api&P=0&h=180"
//   },
//   {
//     name: "Amit Sharma",
//     age: 25,
//     email: "amit@gmail.com",
//     profession: "Backend Developer",
//     phone: 9876543210,
//     subscribed: false,
//     img: "https://tse4.mm.bing.net/th/id/OIP.qM8NOVuRx6fQ6aZHqDl8bAHaLH?pid=Api&P=0&h=180"
//   },
//   {
//     name: "Priya Singh",
//     age: 23,
//     email: "priya@gmail.com",
//     profession: "Frontend Developer",
//     phone: 9123456780,
//     subscribed: true,
//     img: "https://tse4.mm.bing.net/th/id/OIP.qM8NOVuRx6fQ6aZHqDl8bAHaLH?pid=Api&P=0&h=180"
//   },
//   {
//     name: "Rahul Verma",
//     age: 28,
//     email: "rahul@gmail.com",
//     profession: "UI/UX Designer",
//     phone: 9988776655,
//     subscribed: false,
//     img: "https://tse4.mm.bing.net/th/id/OIP.qM8NOVuRx6fQ6aZHqDl8bAHaLH?pid=Api&P=0&h=180"
//   },
//   {
//     name: "Sneha Gupta",
//     age: 21,
//     email: "sneha@gmail.com",
//     profession: "QA Engineer",
//     phone: 8899001122,
//     subscribed: true,
//     img: "https://tse4.mm.bing.net/th/id/OIP.qM8NOVuRx6fQ6aZHqDl8bAHaLH?pid=Api&P=0&h=180"
//   }
// ];

const links = [
  { name: "Google", href: "https://www.google.com" },
  { name: "YouTube", href: "https://www.youtube.com" },
  { name: "Facebook", href: "https://www.facebook.com" },
  { name: "Instagram", href: "https://www.instagram.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com" }
];

let elem = (
  <>
 {/* {users.map((user)=>{
    return(
    <div>
      <img src={user.img} />
      <h1>Name:{user.name}</h1>
      <h2>Age:{user.age}</h2>
      <p>Email:{user.email}</p>
      <p>Phone:{user.phone}</p>
      <p>{user.profession}</p>
      <p>{user.subscribed ? "Subscribed" : "Not Subscribed"}</p>
    </div>
    );
 })} */}

 {links.map((link)=>{
    return(
        <ul>
            <li><a href={link.href} target="_blank">{link.name}</a></li>
        </ul>
    )
 })}

  </>
);

ReactDOM.createRoot(document.querySelector("#root")).render(elem);
