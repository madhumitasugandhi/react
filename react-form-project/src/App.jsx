import { useForm } from 'react-hook-form';
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm("Submission");

   async function onSubmit(data) { 

    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    console.log( "Submitting the form", data); 
    alert("Form submitted successfully");
    }
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label >Fisrt name:</label>
        <input {...register('firstName', {
          required: true,
          minLength: { value: 3, message: "Minimum length is 3" },
          maxLength: { value: 10, message: "Maximum length is 10" },
           pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Only letters are allowed"
          }
        },
        )} />
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <div>
        <label >Last name:</label>
        <input {...register('lastName',{
          required: true,
          minLength: { value: 3, message: "Minimum length is 3" },
          maxLength: { value: 10, message: "Maximum length is 10" },
           pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Only letters are allowed"
          }
        },)} />
        {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
      <div>
        <label >Email:</label>
        <input {...register('email')} />
      </div>
      <br />
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting": "Submit" }/>
    </form>
  )
}

export default App
