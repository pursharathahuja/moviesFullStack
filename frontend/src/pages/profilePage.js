import React, { useState, useEffect, useContext } from "react";
import {UserContext} from '../contexts/userContext';
import {MoviesContext} from '../contexts/moviesContext';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import useForm from "react-hook-form";
import {updateUser, getUserBookings} from '../api/tmdb-api';




const ProfilePage = (props) => {
  const [bookings, setBookings] = useState("");
  const context = useContext(UserContext);
  const moviesContext = useContext(MoviesContext);
  const { register, handleSubmit, errors, reset } = useForm();
  const [disable, setDisable] = useState('');

  const onSubmit = data => {
   if(data.confirm_new_password == data.new_password){
    setDisable(true);
    console.log(data);
    updateUser({"password":data.new_password},localStorage.getItem('user')).then(response => {
       if(response.password){
         alert('Password changed. You need to login again!');
         context.signOut();
       }else{
         alert('Some error occured');
       }
    });
   }else{
     alert('Confirm password and new password must be same');
   }
   
  };
  const timings = ['1:15pm - 3:15pm','3:15pm - 5:15pm','5:15pm - 7:15pm','7:15pm - 9:15pm','9:15pm - 11:15pm'];
  useEffect(() => {
    getUserBookings(localStorage.getItem('user')).then(details => {
      console.log(details.bookings);
      setBookings(details.bookings);
    });
  }, []);

  return (
    <div className="container" style={{padding:"10%"}}>
      <section>
          <Tabs onSelect={(index, label) => console.log(`Selected Index: ${index}, Label: ${label}`)}
                selected={0}
                headerStyle={{fontWeight: 'bold'}} 
                activeHeaderStyle={{color:'blue'}} 
           >
              <Tab label="My Details" >
                  <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <div className="form-group form-control">
                        <b>Username :</b> <input autoComplete="off" disabled="disabled" className="customField"
                          defaultValue={localStorage.getItem('user')}
                          type="text"
                          name="username"
                          ref={register({ required: "This is a required field" })}
                        />
                      </div>
                    </div>
                    {errors.username && <p className="text-red">{errors.username.message} </p>}
                    <div className="form-group">
                      <div className="form-group form-control">
                      <b>Change Password :</b> <input autoComplete="off" className="customField"
                          type="text"
                          name="new_password"
                          ref={register({ required: "This is a required field" })}
                        />
                      </div>
                    </div>
                    {errors.new_password && <p className="text-red">{errors.new_password.message} </p>}
                    <div className="form-group">
                      <div className="form-group form-control">
                      <b>Confirm New Password :</b> <input autoComplete="off" className="customField"
                          type="text"
                          name="confirm_new_password"
                          ref={register({ required: "This is a required field" })}
                        />
                      </div>
                    </div>
                    {errors.confirm_new_password && <p className="text-red">{errors.confirm_new_password.message} </p>}
                    <button type="submit" disabled={disable} className="btn btn-primary">
                      Update password
                    </button>
                  </form>
              </Tab>
              <Tab label="My Bookings">
                <div style={{"padding":"1%"}}>
                <table id="customers">
                    <tr>
                      <th>Date</th>
                      <th>Timings</th>
                      <th>Total price</th>
                      <th>Number of seats</th>
                      <th>Additional Comments</th>
                    </tr>
                    {bookings && bookings.map(booking => {
                      return (
                        <tr>
                          <td>{booking.selectedDate}</td>
                          <td>{timings[booking.slot_selected]}</td>
                          <td>{booking.total}</td>
                          <td>{booking.number_of_seats}</td>
                          <td>{booking.comments}</td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
              </Tab>                 
           </Tabs>
      </section>
    </div>
  );
};

export default ProfilePage;