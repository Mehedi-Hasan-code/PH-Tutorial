import Users from './Users'
const usersPromise = fetch('http://localhost:3000/users')
  .then(res => res.json())
const App = () => {
  return (
    <div>
      <h1 className='text-3xl'>Simple CRUD Operation</h1>
      <Users usersPromise = {usersPromise} />
    </div>
  )
}

export default App