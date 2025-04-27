import React from 'react'
import { getDatabase, ref, set} from "firebase/database"
const Home = () => {
  const addData = (userId, name, phone) => {
    const db = getDatabase()
    set(ref(db, 'student/'+userId), {
      Name: name,
      Phone: phone
    })
    console.log(userId, name, phone);
  }
    
  return (
    <div>
        This is home page
        <button onClick={() => addData(123, 'obi', 47464)}>Add demo data</button>
    </div>
  )
}

export default Home