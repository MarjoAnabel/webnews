import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserForm = () => {
  const navigate = useNavigate()
    const [data, setData] = useState({
      title: '',
      abstract: '',
    
    })
    const initialState = {
        name: '',
        abstract: '',
       
       }
       
 const clearState = () => {
    setData({ ...initialState })
   }

   const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`sending data… ${data.title} ${data.abstract}`)
    clearState()
    setTimeout(() => {
      navigate('/List')
    }, 1000)


   // Guarda los datos en el localStorage cuando se envía el formulario
    event.preventDefault();
    localStorage.setItem('data', JSON.stringify(data));
    alert('Datos guardados en el localStorage');
   }

   useEffect(() => {
    // Recupera datos del localStorage cuando el componente se monta
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

   

   const [btnDisabled, setBtnDisabled] = useState(true)
   const [message, setMessage] = useState('')

const handleInputChange = (event) => {
    console.log('nombre input', event.target.title)
    console.log('valor inpunt', event.target.abstract)

    if (data.title.length + 1 < 3) {
        setMessage('Tiene que tener 3 caracteres')
        setBtnDisabled(true)
      } else {
        setMessage(null)
        setBtnDisabled(false)
      }

    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
   }


 return (
    <>
    <h1>Formulario</h1>
    <form onSubmit={handleSubmit}>
       <input
         type="text"
         placeholder="Title"
         value = {data.title}
         onChange={handleInputChange}
         name="title"
       />
        <input
         type="text"
         placeholder="Abstract"
         value = {data.abstract}
         onChange={handleInputChange}
         name="abstract"
       />
       <button type="submit" disabled = {btnDisabled}>Enviar</button>
       <p>{message}</p>
     </form>
    </>
 )

}


export default UserForm
