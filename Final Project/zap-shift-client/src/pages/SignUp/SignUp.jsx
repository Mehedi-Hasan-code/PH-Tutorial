import React from 'react';
import { useForm } from 'react-hook-form';
import useAuthContext from '../../hooks/useAuthContext';

const SignUp = () => {

  const {createUser} = useAuthContext()
  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(userCredentials => {
        console.log(userCredentials.user);
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="w-full h-full flex items-center">
      
      <div className="card-body flex justify-center items-center lg:items-end">
        <h1>Create an account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="fieldset w-full max-w-md">
          <label className="label">Email</label>
          <input type="email" {...register('email', {required: true})} className="input  w-full" placeholder="Email" />
          {errors.email?.type === 'required' && <span>This field is required</span>}
          <label className="label">Password</label>
          <input
            type="password"
            {...register('password', {required: true})}
            className="input w-full"
            placeholder="Password"
          />
          {errors.password?.type === 'required' && <span>This field is required</span>}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type='submit' className="btn btn-neutral mt-4">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
