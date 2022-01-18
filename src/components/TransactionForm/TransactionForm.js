import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import s from './TransactionForm.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import imageCalendar from 'images/calendarNew.svg';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIncomeCategories,
  getExpenseCategories,
} from 'redux/transaction/selectors';

function TransactionForm({ transactionsType }) {
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const formTitleData = {
    descriptionTitle: '',
    categoryTitle: '',
    categoriesList: [],
  };

  const incomeCategories = useSelector(getIncomeCategories) || [];
  const expenseCategories = useSelector(getExpenseCategories) || [];

  if (transactionsType === 'incomes') {
    formTitleData.descriptionTitle = 'Описание дохода';
    formTitleData.categoryTitle = 'Категория дохода';
    formTitleData.categoriesList = incomeCategories;
  } else {
    formTitleData.descriptionTitle = 'Описание товара';
    formTitleData.categoryTitle = 'Категория товара';
    formTitleData.categoriesList = expenseCategories;
  }

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'product':
        return setDescription(value);

      case 'price':
        return setAmount(Number(value));

      default:
        throw new Error(`there is no such name as ${name}`);
    }
  };

  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };

  const handleBtnClear = () => {
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <div className={s.tabletFormPosition}>
      <form className={s.form} onSubmit={() => {}} autoComplete="off">
        <div className={s.dataInput}>
          <div className={s.calendarWrapper}>
            <img
              className={s.calendarIcon}
              src={imageCalendar}
              alt="Calendar"
            />
            <DatePicker
              selected={date}
              onChange={date => setDate(date)}
              className={s.datePicker}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <TextField
            id="outline-basic"
            label={formTitleData.descriptionTitle}
            color="warning"
            type="text"
            name="product"
            value={description}
            className={s.inputDescription}
            onChange={handleInputChange}
            required={true}
          />

          <Box sx={{ minWidth: 120 }} className={s.box}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                color="warning"
                className={s.inputCategory}
              >
                {formTitleData.categoryTitle}
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                required={true}
                value={category}
                onChange={handleCategoryChange}
              >
                {formTitleData.categoriesList.map(category => (
                  <MenuItem value={category} key={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <div className={s.inputWrapper}>
            <TextField
              id="outlined-basic"
              label="0.00"
              color="warning"
              type="number"
              name="price"
              value={amount}
              required={true}
              onChange={handleInputChange}
              className={s.inputAmount}
            />
          </div>
        </div>

        <div className={s.btnWrapper}>
          <button type="submit" className={s.btn}>
            Ввод
          </button>
          <button type="button" className={s.btn} onClick={handleBtnClear}>
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
}

TransactionForm.propTypes = {
  transactionsType: PropTypes.string,
};

export default TransactionForm;
