import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Apply = () => {
  const { user } = useContext(AuthContext);
  const {id} = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const ApplicantInfo = {
      jobId: id,
      email: user.email,
      linkedin,
      github,
      resume
    };

    axios.post(`${import.meta.env.VITE_IP}/applications`, ApplicantInfo)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  };
  return (
    <div className="grow flex items-center">
      <form
        onSubmit={handleSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto"
      >
        <legend className="fieldset-legend">Apply Now </legend>

        <label className="label">LinkedIn</label>
        <input
          type="url"
          className="input"
          placeholder="Enter Your LinkedIn Url"
          name="linkedin"
        />

        <label className="label">GitHub</label>
        <input
          type="url"
          className="input"
          placeholder="Enter Your GitHub Url"
          name="github"
        />

        <label className="label">Resume</label>
        <input
          type="url"
          className="input"
          placeholder="Enter Your Resume Url"
          name="resume"
        />

        <input className="btn my-4" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Apply;
