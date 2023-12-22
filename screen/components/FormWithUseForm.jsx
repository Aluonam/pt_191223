import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import ShowFormModal from './ShowFormModal';

const FormWithUseForm = () => {

  const [dataForm, setDataForm] = useState()
  const { register, formState:{ errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setDataForm(data);
  };

  const ageValidator = (value) => {
    return value >= 18 && value <= 65;
  }

  return (
    <>
    <div style={{
      width:"340px",
      height:"35vh",
      minHeight:"320px",
      gap:"20px",
      backgroundColor:"#e9edc9",
      border:"1px solid #ccd5ae",
      borderRadius: "20px",
      display:"flex",
      alignItems:"center",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Introduzca:</h2>

        <h3>Nombre y apellidos</h3>
        <input type='text' {...register('name', {required: true})}></input>
        {errors.name?.type === 'required' && <p style={{color:"red"}}>El campo nombre es requerido</p>}

        <h3>Contraseña</h3>
        <input type='password' {...register('password')}></input>

        <h3>Edad</h3>
        <input type='number' {...register('age',{ validate: ageValidator})}></input>
        {errors.age && <p style={{color:"red"}}>Debes tener entre 18 y 65 años</p>}

        <h3>Email</h3>
        <input type='mail' {...register('mail')}></input>

        <br></br>
        <input type='submit' value='Enviar' />
        
      </form >

      <ShowFormModal dataForm={dataForm}></ShowFormModal>
    </div>
    </>
  )
}

export default FormWithUseForm