
import { useParams } from 'react-router-dom';

const Booking = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Booking Details for Flight {id}</h2>
      <form>
        {/* Collect booking details */}
        <label>
          Name:
          <input type="text" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" required />
        </label>
        <br />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
