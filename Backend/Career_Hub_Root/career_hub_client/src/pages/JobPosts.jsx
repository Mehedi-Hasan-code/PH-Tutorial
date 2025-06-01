import { useLoaderData } from 'react-router-dom';
import JobRow from '../components/JobPost/JobRow';

const JobPosts = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <div>
      <h1>My job posts</h1>
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
              <th>DeadLine</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <JobRow key={job._id} index={index} job={job} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobPosts;
