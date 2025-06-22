import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
  const {register, formState: { errors }, handleSubmit} = useForm()
  const onSubmit = data => {
    console.log(data);
  }
  return (
     <div className="h-full flex items-center justify-center lg:justify-end w-full">
      <div className="card-body max-w-md">
        <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email', {required: true})} className="input w-full" placeholder="Email" />
          {errors.email?.type === 'required' && <span>This field is required</span>}
          <label className="label">Password</label>
          <input type="password" {...register('password', {required: true})} className="input w-full" placeholder="Password" />
          {errors.password?.type === 'required' && <span>This field is required</span>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login