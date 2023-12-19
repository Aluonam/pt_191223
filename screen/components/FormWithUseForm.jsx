import React from 'react'
import { useForm } from 'react-hook-form';

const FormWithUseForm = () => {

  const { register, handleSubmit } = useForm();

  return (
    <>
    <form>
      <h2>Introduzca:</h2>
      <h3>Nombre y apellidos</h3>
      <input type='text'></input>
      <h3>Contraseña</h3>
      <input type='password'></input>
      <h3>Edad</h3>
      <input type='number'></input>
      <h3>Email</h3>
      <input type='mail'></input>
      
      <input type='submit' value='Enviar' />
    </form>
    </>
  )
}

export default FormWithUseForm