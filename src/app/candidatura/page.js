'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./candidature.scss";

export default function Candidature() {
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const isFormError = Object.keys(errors).length > 0;

    let buttonClass = '';
    if (submitSuccess) {
        buttonClass = 'submit-success';
    } else if (submitError || isFormError) {
        buttonClass = 'submit-error';
    }

    let buttonText = '¡ENVIAR MI CANDIDATURA!';
    if (submitSuccess) {
        buttonText = 'FORMULARIO ENVIADO CON ÉXITO';
    } else if (submitError) {
        buttonText = 'ERROR AL ENVIAR EL FORMULARIO';
    } else if (isFormError) {
        buttonText = 'REVISA TU CANDIDATURA, ¡HAY ERRORES!';
    }

    const onSubmit = async data => {
        setSubmitSuccess(false);
        setSubmitError(false);

        try {
            // Simulación de llamada a la API, reemplazar con la llamada real
            // const response = await myApiCall(data);
            // if (!response.ok) throw new Error('API call failed');
            console.log('Datos enviados:', data); // Aquí se manejaría la llamada a la API

            setSubmitSuccess(true);
            reset();
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setSubmitError(true);
        }
    };

    return (
        <section id="candidature">
            <h2>REINVENTA EL CINE</h2>
            <form id="candidature-form" onSubmit={handleSubmit(onSubmit)}>
                <div className={`field-container flex-row ${errors.name && 'field-error'}`}>
                    <label className='field-label'>
                        NOMBRE:
                    </label>
                    <input
                        className='field-input'
                        type='text'
                        {...register('name', { required: 'Este campo es obligatorio' })}
                    />
                </div>

                <div className={`field-container flex-row ${errors.email && 'field-error'}`}>
                    <label className='field-label'>
                        CORREO:
                    </label>
                    <input
                        className='field-input'
                        type='text'
                        {...register('email', {
                            required: 'Este campo es obligatorio',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Formato de correo no válido'
                            }
                        })}
                    />
                </div>

                <div className={`field-container flex-row ${errors.preferredGenre && 'field-error'}`}>
                    <label className='field-label'>
                        GÉNERO DE CINE PREFERIDO:
                    </label>
                    <input
                        className='field-input'
                        type='text'
                        {...register('preferredGenre', { required: 'Este campo es obligatorio' })}
                    />
                </div>

                <div className={`field-container flex-row textarea ${errors.motivationLetter && 'field-error'}`}>
                    <label className='field-label textarea'>
                        CARTA MOTIVACIÓN:
                    </label>
                    <textarea
                        className='field-input textarea'
                        {...register('motivationLetter', { required: 'Este campo es obligatorio' })}
                    />
                </div>

                <button
                    className={`candidature-submit ${buttonClass}`}
                    type="submit"
                    disabled={submitSuccess}
                >
                    {buttonText}
                </button>
            </form>
        </section>
    );
}