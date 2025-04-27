import React from 'react'
import useInputField from '../Hooks/useInputField'

const Form = () => {
  const [name, nameOnChange] = useInputField('')
  const [email, setEmail] = useInputField('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' value={name} onChange={nameOnChange} />
        <br />
        <input type="email" placeholder='Email' value={email} onChange={setEmail} />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Form
