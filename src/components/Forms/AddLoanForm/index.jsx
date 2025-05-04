import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
  item: yup.string().required('Item is required'),
  amount: yup.number().positive().required('Loan amount is required'),
  dueDate: yup.date().required('Due date is required'),
});

const AddLoanForm = ({ onAddLoan }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    onAddLoan(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="add-loan-form">
      <label>
        Item Sold:
        <input {...register('item')} />
        {errors.item && <p className="error">{errors.item.message}</p>}
      </label>

      <label>
        Loan Amount:
        <input type="number" {...register('amount')} />
        {errors.amount && <p className="error">{errors.amount.message}</p>}
      </label>

      <label>
        Due Date:
        <input type="date" {...register('dueDate')} />
        {errors.dueDate && <p className="error">{errors.dueDate.message}</p>}
      </label>

      <button type="submit">Add Loan</button>
    </form>
  );
};

export default AddLoanForm;
