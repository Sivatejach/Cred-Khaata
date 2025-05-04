import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Customer name is required'),
  phone: yup.string().matches(/^\d{10}$/, 'Must be a 10-digit phone number'),
});

const AddCustomerForm = ({ onSubmitCustomer }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    onSubmitCustomer(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="add-customer-form">
      <label>
        Name:
        <input {...register('name')} />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </label>

      <label>
        Phone:
        <input {...register('phone')} />
        {errors.phone && <p className="error">{errors.phone.message}</p>}
      </label>

      <button type="submit">Add Customer</button>
    </form>
  );
};

export default AddCustomerForm;
