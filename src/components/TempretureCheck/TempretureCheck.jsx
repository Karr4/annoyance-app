import { useState } from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';
import css from './TempretureCheck.module.css';
import cities from 'cities.json';

axios.defaults.baseURL = 'http://api.weatherapi.com/v1';

const TempretureCheck = () => {
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const { region, date } = e.target;

    console.log(region.value, date.value);

    const currentDate = new Date();
    const enteredDate = new Date(date.value);

    console.log(currentDate.getTime(), enteredDate.getTime());

    if (currentDate.getTime() > enteredDate.getTime()) {
      return errorSetter(-2);
    } else if (!cities.find(({ name }) => name === region)) {
      return errorSetter(-1);
    } else {
      errorSetter(1);
    }
  };

  const errorSetter = number => {
    if (number === 1) {
      setError('');
    } else if (number === -1) {
      setError('Entered region does not exist');
    } else if (number === -2) {
      setError('Entered date should be greater than the current date');
    }
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Region
          <input
            className={css.input}
            type="text"
            name="region"
            placeholder="Enter the region 'Paris' or 'London'"
          />
        </label>

        <label className={css.label}>
          Date
          <input
            className={css.input}
            type="text"
            name="date"
            placeholder="Enter the date mm/dd/yyyy"
          />
        </label>

        <button className={css.submit__button} type="submit">
          Check the tempreture
        </button>

        {error && <p className={css.error}>{error}</p>}
      </form>
    </>
  );
};

export default TempretureCheck;
