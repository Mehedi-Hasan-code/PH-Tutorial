import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuthContext from '../../hooks/useAuthContext';
import axios from 'axios';
import useAxiosSecure from '../../hooks/apiClient/useAxiosSecure';

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { publicApi } = useAxiosSecure();
  const [profilePic, setProfilePic] = useState('');

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(async (userCredentials) => {
        console.log(userCredentials.user);


        // update user info in db
        const userInfo = {
          email: data.email,
          role: 'user',
          created_at: new Date().toISOString(),
        };
        const usersPostRes = await publicApi.post('/users', userInfo);
        console.log(usersPostRes);


        // update user profile in firebase
        const userProfile = {
          displayName: data.name,
          photoURL: profilePic,
        };
        updateUserProfile(userProfile);
      })
      .catch((err) => console.log(err));
  };
  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append('image', image);

    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGEBB_API_KEY
    }`;

    const res = await axios.post(imageUploadUrl, formData);

    setProfilePic(res.data.data.url);
  };
  return (
    <div className="w-full h-full flex items-center">
      <div className="card-body flex justify-center items-center lg:items-end">
        <h1>Create an account</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="fieldset w-full max-w-md"
        >
          <label className="label">Name</label>
          <input
            type="text"
            {...register('name', { required: true })}
            className="input  w-full"
            placeholder="Name"
          />
          {errors.name?.type === 'required' && (
            <span>This field is required</span>
          )}
          <label className="label">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="input  w-full"
            placeholder="Email"
          />
          {errors.email?.type === 'required' && (
            <span>This field is required</span>
          )}
          <label className="label">Upload image</label>
          <input
            type="file"
            className="input w-full"
            onChange={handleImageUpload}
          />

          <label className="label">Password</label>
          <input
            type="password"
            {...register('password', { required: true })}
            className="input w-full"
            placeholder="Password"
          />
          {errors.password?.type === 'required' && (
            <span>This field is required</span>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
