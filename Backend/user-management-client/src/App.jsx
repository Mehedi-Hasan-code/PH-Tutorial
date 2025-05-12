import "./App.css";
import Users from "./components/Users";
const usersPromise = fetch("http://localhost:3000/users").then((res) =>
  res.json()
);
function App() {
  return (
    <>
      <h1>User Management System</h1>
      <Users usersPromise={usersPromise} />
    </>
  );
}

export default App;
