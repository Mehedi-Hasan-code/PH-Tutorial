import React, { useEffect, useState } from 'react';
import Hero from '../components/home/Hero';
import HotJobs from '../components/home/HotJobs';
import axios from 'axios';

const Home = () => {
  const [jobsPromise, setJobsPromise]  = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${import.meta.env.VITE_IP}/jobs`, {
        credentials: 'include'
      });
      const data = await res.json();
      return data;
    };
    setJobsPromise(fetchData())
  }, []);
  return (
    <div className="grow">
      <button onClick={() => {
        axios.get(`{import.meta.env.VITE_IP}/test-cookie`, {
          withCredentials: true
        }).then(res => console.log(res.data))
        .catch(err => console.log(err))
      }}>click</button>
      <Hero />
      <HotJobs jobsPromise={jobsPromise} />

    </div>
  );
};

export default Home;
