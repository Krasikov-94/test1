import React from 'react';
import { Formik, Field, Form } from 'formik';
import styles from '../Modal/Modal.module.css';

export const AddForm = ({ closeModal }) => {
  const onSubmit = async (values) => {
    console.log(values);
    await closeModal();
  };

  const initialValues = {
    name: '',
    surname: '',
    age: 0,
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={styles.inputModal}>
          <div>
            <label htmlFor='name'>Имя</label>
            <Field id='name' name='name' placeholder='введите имя' type='text' />
          </div>
          <div>
            <label htmlFor='surname'>Фамилия</label>
            <Field id='surname' name='surname' placeholder='введите фамилию' type='text' />
          </div>
          <div>
            <label htmlFor='age'>Сколько лет</label>
            <Field id='age' name='age' placeholder='введите сколько Вам лет' type='number' />
          </div>
          <button type='submit' className={styles.sub}>
            Создать
          </button>
        </Form>
      </Formik>
    </>
  );
};
