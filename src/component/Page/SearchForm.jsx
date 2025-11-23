import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchForm = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/results');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Origin:
        <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} required />
      </label>
      <br />
      <label>
        Destination:
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} required />
      </label>
      <br />
      <label>
        Start Date:
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </label>
      <br />
      <label>
        End Date:
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </label>
      <br />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
