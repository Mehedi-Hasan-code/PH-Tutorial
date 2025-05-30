import axios from 'axios';
import React from 'react';

const AddJobs = () => {
  const handleSubmit = e => {
    e.preventDefault()

    const form = e.target 
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    // process salary range data
    const {min, max, currency, ...newData} = data
    newData.salaryRange = {min, max, currency}

    // process requirements
    const requirementsArr = newData.requirements.split(',')
    const trimmedRequirementsArr= requirementsArr.map(req => req.trim())
    newData.requirements = trimmedRequirementsArr
    

    // process Responsibilities
    const responsibilitiesArr = newData.responsibilities.split(',')
    const trimmedResponsibilitiesArr = responsibilitiesArr.map(res => res.trim())
    newData.responsibilities = trimmedResponsibilitiesArr


    newData.status = 'active'

    axios.post(`${import.meta.env.VITE_IP}/jobs`, newData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }
  return (
    <div className="grow flex items-center justify-center flex-col">
      <h1>Add jobs</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Title</label>
          <input
            type="text"
            className="input"
            placeholder="Job title"
            name="title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            className="input"
            placeholder="Company Name"
            name="company"
          />

          <label className="label">Location</label>
          <input
            type="text"
            className="input"
            placeholder="Company Location"
            name="location"
          />

          <label className="label">Company Logo</label>
          <input
            type="text"
            className="input"
            placeholder="Company Logo url"
            name="logo"
          />
        </fieldset>

        {/* Job type  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              value="All"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="On-Site"
              aria-label="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>
        {/* Job category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select required className="select" name="category">
            <option value="">Job category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Chat gpt</option>
          </select>
        </fieldset>
        {/* Application deadline  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application deadline</legend>
          <input type="date" name="applicationDeadline" className="input" />
        </fieldset>

        {/* Salary Range  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <label className="label">Min Salary</label>
          <input
            type="number"
            className="input"
            placeholder="Min Salary"
            name="min"
          />

          <label className="label">Max Salary</label>
          <input
            type="number"
            className="input"
            placeholder="Max Salary"
            name="max"
          />

          <label className="label">Currency</label>
          <select required className="select" name="currency">
            <option value="">Select Currency</option>
            <option>Bdt</option>
            <option>Usdt</option>
            <option>Inr</option>
          </select>
        </fieldset>
        {/* description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Description</legend>

          <textarea
            className="textarea"
            placeholder="Job Description"
            name="description"
          ></textarea>
        </fieldset>

        {/* Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>

          <textarea
            className="textarea"
            placeholder="Job Requirements (separate by comma)"
            name="requirements"
          ></textarea>
        </fieldset>

        {/* Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>

          <textarea
            className="textarea"
            placeholder="Job Responsibilities (separate by comma)"
            name="responsibilities"
          ></textarea>
        </fieldset>

        {/* Hr related info */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Hr info</legend>

          <label className="label">Hr email</label>
          <input
            type="text"
            className="input"
            placeholder="Hr email"
            name="hr_email"
          />

          <label className="label">Hr name</label>
          <input
            type="text"
            className="input"
            placeholder="Hr name"
            name="hr_name"
          />
        </fieldset>

        <button className='btn' type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddJobs;
