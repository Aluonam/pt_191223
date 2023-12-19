import React from 'react'
import { useForm } from 'react-hook-form';

const FormWithUseForm = () => {

  const { register, handleSubmit } = useForm();

  return (
    <>
    <h2>Formulario con useForm</h2>
    <form>

    </form>
    </>
  )
}

export default FormWithUseForm