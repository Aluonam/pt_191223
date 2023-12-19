import React from 'react'
import { useForm } from 'react-hook-form';

const FormWithUseForm = () => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Introduzca:</h2>

      <h3>Nombre y apellidos</h3>
      <input type='text' {...register('name')}></input>

      <h3>Contraseña</h3>
      <input type='password' {...register('password')}></input>

      <h3>Edad</h3>
      <input type='number' {...register('number')}></input>

      <h3>Email</h3>
      <input type='mail' {...register('mail')}></input>

      <br></br>
      <input type='submit' value='Enviar' />
    </form>
    </>
  )
}

export default FormWithUseForm