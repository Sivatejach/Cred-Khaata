import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  amount: yup.number().positive().required('Repayment amount is required'),
  date: yup.date().required('Repayment date is required'),
});

const RepaymentForm = ({ onRecord }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    onRecord(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="repayment-form">
      <label>
        Repayment Amount:
        <input type="number" {...register('amount')} />
        {errors.amount && <p className="error">{errors.amount.message}</p>}
      </label>

      <label>
        Date:
        <input type="date" {...register('date')} />
        {errors.date && <p className="error">{errors.date.message}</p>}
      </label>

      <button type="submit">Record Repayment</button>
    </form>
  );
};

export default RepaymentForm;
