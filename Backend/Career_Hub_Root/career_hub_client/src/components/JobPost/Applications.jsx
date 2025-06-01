
import { useLoaderData } from 'react-router-dom'
import ApplicationRow from './ApplicationRow'

const Applications = () => {
  const applications = useLoaderData()
  return (
    <div>
      <h1>Applications</h1>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Title</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <ApplicationRow key={application._id} index={index} application = {application} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Applications