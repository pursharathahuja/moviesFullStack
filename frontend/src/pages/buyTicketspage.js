import React, {useState } from "react";
import useMovie from "../hooks/useMovie";
import useForm from "react-hook-form";
import { Container, Col, Row} from 'reactstrap';
import DatePicker from "react-datepicker";
import "../globals/custom.css";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import {bookTickets} from "../api/tmdb-api";




const BuyTicketsPage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id);
  const [date, setDate] = useState(new Date());
  const [total, setTotal] = useState('');
  const [disable, setDisable] = useState('');
  const today = new Date();
  let in7Days = new Date();
  in7Days.setDate(in7Days.getDate() + 7);
  const { register, handleSubmit, errors, reset } = useForm();
  const changeDate = date => setDate(date);
  const handleChange = (event) => {
      console.log(event.target.value);
      setTotal(event.target.value * 5);
  }
  const timings = [
    {slotID: 1, timings: '1:15pm - 3:15pm'},
    {slotID: 2, timings: '3:15pm - 5:15pm'},
    {slotID: 3, timings: '5:15pm - 7:15pm'},
    {slotID: 4, timings: '7:15pm - 9:15pm'},
    {slotID: 5, timings: '9:15pm - 11:15pm'}
  ];
 

  const onSubmit = data => {
    setDisable(true);
    data.movieId = movie.id;
    data.selectedDate = moment(date).format('DD-MM-YYYY');
    data.total = total;
    console.log(data);
    bookTickets(data, localStorage.getItem('user')).then(response => {
      if(response.bookings){
        alert('Booking successful!');
        reset({
          number_of_seats: "",
          date: "",
          slot_selected: "",
          total_price:"",
          comments:""
        });
      }else{
        alert('Booking failed!');
      }
      setDisable(false);
    });
  };

  
  return (
    <>
    {movie ? (
      <>
       <Container>
          <Row>
            <Col className="mx-auto col-md-6 my-4">
              <img  src={ movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "./fallback"
            } className="img-fluid poster float-right mr-5" alt={movie.title} />
            </Col>
            <div className="mx-auto col-md-6 my-5">
            <h2 className="text-capitalize">{movie.title}</h2>
            {movie.genres.map(g => (<span className="h5 py-5" key={g.name} className="h5 py-5"> {g.name}</span>))}
              <p className="text-muted lead mt-3 mb-4">{movie.overview}</p>
              <p className="text-muted lead mt-3 mb-4">Release Date: {movie.release_date}</p>
              <p className="text-muted lead mt-3 mb-4">Price: 5&euro; per seat.</p>
              <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
                <h3>Enter details</h3>
                <div className="form-group">
                  <input
                    autocomplete="off"
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    placeholder="Select number of seats"
                    name="number_of_seats"
                    min="1"
                    max="10"
                    ref={register({ required: "Number of seats is required" })}
                  />
                </div>
                {errors.number_of_seats && <p className="text-red">{errors.number_of_seats.message} </p>}
                <div className="form-group">
                  <DatePicker className="form-control"
                      name="date"
                      selected={date}
                      onChange={changeDate}
                      minDate={today}
                      maxDate={in7Days}
                      dateFormat="MMMM d, yyyy"
                      ref={register({ required: "Date is required" })}
                    />
                </div>
                <div className="form-group">
                  <select ref={register({ required: "Slot is required" })} defaultValue={'DEFAULT'} className="form-control" name="slot_selected">
                    <option value="DEFAULT" disabled>Select timings</option>
                    {timings.map(slot => (
                      <option value={slot.slotID}>{slot.timings}</option>
                    ))}
                  </select>
                </div>
                {errors.slot_selected && <p className="text-red">{errors.slot_selected.message} </p>}
                <div className="form-group form-control">
                  Total in euros : <input className="customText"
                    defaultValue={total}
                    type="text"
                    name="total_price"
                   // ref={register({ required: "something is required" })}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="10"
                    type="text"
                    className="form-control"
                    placeholder="Any additional comments"
                    name="comments"
                    ref={register({ maxLength: 500 })}
                  />
                </div>
                <button type="submit" disabled={disable} className="btn btn-primary">
                  Book now
                </button>
                <button
                  type="reset"
                  className="btn btn-primary reset"
                  onClick={() => {
                    reset({
                      number_of_seats: "",
                      date: "",
                      slot_selected: "",
                      total_price:"",
                      comments:""
                    });
                  }}
                >
                  Reset
                </button>
              </form>
            </div>
          </Row>
        </Container>
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default BuyTicketsPage;