function throwLoginException(){
  var alerted = localStorage.getItem('alerted') || '';
  if (alerted != 'yes') {
    // if(!alert("You must login/register to continue")) document.location = '/login';
    // localStorage.setItem('alerted','yes');
  }else{
    // document.location = '/login';
    localStorage.clear();
  }
}

export const getMovies = async () => {
  const res = await fetch('/api/movies', {
  headers: {
    'Authorization': window.localStorage.getItem('token')
  }
  });
  try {
    const json = await res.json();
    return json.results;
  } catch(exception){
    throwLoginException();
  }
};

export const getLatestMovies = async () => {
  const res = await fetch('/api/latest-movies', {
  headers: {
    'Authorization': window.localStorage.getItem('token')
  }
  });
  try {
    const json = await res.json();
    return json.results;
  } catch(exception){
    throwLoginException();
  }
};
  
  export const getMovie = async id => {
    const res = await fetch(`/api/movies/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
    });
    return await res.json();
  };
  
  export const getGenres = async () => {
    const res = await fetch('/api/genres', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
    });
    const json = await res.json();
    return json.genres;
  };

  export const getMovieReviews = async id => {
    const res = await fetch(`/api/movies/${id}/reviews`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
    });
    const json = await res.json();
    return json.results;
  };

  export const getCredits = async id => {
    const res = await fetch(`/api/movies/${id}/credits`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
    });
    const json = await res.json();
    return json.cast;
  };

  export const getCrew = async id => {
    const res = await fetch(`/api/movies/${id}/credits`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
    });
    const json = await res.json();
    return json.crew;
  };

  export const loginUser = async user => {
    const res = await fetch(`/api/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
      },
      body: JSON.stringify(user)
    });
    return await res.json();
  }

  export const updateUser = async (data, username) => {
    const res = await fetch(`/api/users/${username}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
      },
      body: JSON.stringify(data)
    });
    return await res.json();
  }

  export const signUp = async user => {
    const res = await fetch(`/api/users?action=register`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
      },
      body: JSON.stringify(user)
    });
    return await res.json();
  }

  export const addFavorite = async (movie, user) => {
    const res = await fetch(`/api/users/${user}/favourites`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
      },
      body: JSON.stringify(movie)
    });
    return await res.json();
  }

  export const removeFavourite = async (movie, user) => {
    const res = await fetch(`/api/users/${user}/favourites/${movie.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
      },
      body: JSON.stringify(movie)
    });
    return await res.json();
  }

  export const getFavourites = async (user) => {
    const res = await fetch(`/api/users/${user}/favourites`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
    });
    return await res.json();
  }

  export const getUserBookings = async (user) => {
    const res = await fetch(`/api/users/${user}/bookings`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
    });
    return await res.json();
  }
  
  export const addReview = async (data) => {
    const {movieId, author, content} = data;
    const res = await fetch(`/api/movies/${movieId}/reviews`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
      },
      body: JSON.stringify({ author, content })
    });
    return await res.json();
  }

  export const bookTickets = async (data, user) => {
    const res = await fetch(`/api/users/${user}/bookTickets`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
      },
      body: JSON.stringify({ data })
    });
    return await res.json();
  }