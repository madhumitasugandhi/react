import { useForm } from 'react-hook-form';
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm("Submission");

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <label >Fisrt name:</label>
        <input {...register('firstName')}/>
      </div>
      <div>
        <label >Last name:</label>
        <input {...register('lastName')}/>
      </div>
      <div>
        <label >Email:</label>
        <input {...register('email')}/>
      </div>
      <br/>
      <input type="submit" />
    </form>
  )
}

export default App
