import { useState } from "react";

function App() {

  const initialState = {
    firstName: '',
    surname: '',
    age: '',
    password: '',
    city: ''
  };
  const [ form, setForm ] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault()

    setForm({...form, [e.target.name]: e.target.value})
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => handleChange(e)} value={form.firstName} name='firstName' type="text" placeholder="First Name" />
        <input onChange={(e) => handleChange(e)} value={form.surname} name='surname' type="text" placeholder="Surname" />
        <input onChange={(e) => handleChange(e)} value={form.age} name='age' type="text" placeholder="Age" />
        <input onChange={(e) => handleChange(e)} value={form.password} name='password' type="password" placeholder="Password" />
        <select onChange={(e) => handleChange(e)} value={form.city} name="city">
          <option value="">Choose your city</option>
          <option value="istanbul">Istanbul</option>
          <option value="krasnodar">Krasnodar</option>
          <option value="moscow">Moscow</option>
          <option value="izmir">Izmir</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
