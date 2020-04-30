import { useEffect, useState } from "react";
import {getCrew} from '../api/tmdb-api'

const useCrew = id => {
  const [crew, setCrew] = useState(null);
  useEffect(() => {
    getCrew(id).then(credits => {
      setCrew(credits);
    });
  }, [id]);
  return [crew, setCrew];
};

export default useCrew;