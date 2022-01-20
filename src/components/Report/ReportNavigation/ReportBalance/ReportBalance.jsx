import s from './ReportBalance.module.css';
import { useState } from 'react';

const ReportBalance = () => {
 
  const startBalance = () => {};
  return (
    <div className={s.balanceSection}>
      <h3 className={s.balanceTitle}>Баланс:</h3>
      <p className={s.balanceMain}>55 000.00 UAH</p>
    </div>
  );
};

export default ReportBalance;
