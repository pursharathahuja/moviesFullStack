import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import BuyTicketsButton from '../components/buttons/buyTickets'
import {TicketsContext} from '../contexts/ticketsContext';

const TicketsPage = props => {

  const context = useContext(TicketsContext);

  return (
    <PageTemplate 
        title='All Movies'
        movies={context.movies}
        action={movie => <BuyTicketsButton movie={movie}/>}
      />
  );
};

export default TicketsPage;