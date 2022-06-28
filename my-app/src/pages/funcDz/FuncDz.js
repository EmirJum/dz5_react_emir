import React, { useState } from 'react'

const FuncDz = () => {
  const [person, setPerson] = useState({
    name: "",
    lastName: "",
    secondName: ""
  })
  const changeInput = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
  }
  const cleaner = () => {
    setPerson(prev =>{
      return{
        ...prev,
        name: "",
        lastName: "",
        secondName: ""
     }
    })
  }
  const submit = (e) => {
    e.preventDefault()
    alert("Данные успешно отправлены");
    console.log(person);
    cleaner();
  }

   return(
    <>
    <form onSubmit={submit}>
      <input type="text" placeholder='Name' name="name" value={person.name} onChange={changeInput}/>
      <input type="text" placeholder='last name' name="lastName" value={person.lastName} onChange={changeInput}/>
      <input type="text" placeholder='secondName' name="secondName" value={person.secondName} onChange={changeInput}/>
      <button type='submit'> submit </button>
    </form>
    </>
   )
}

export default FuncDz;