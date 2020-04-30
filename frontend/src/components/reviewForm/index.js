import React from "react";
import "./reviewForm.css";
import useForm from "react-hook-form";
import {addReview} from "../../api/tmdb-api";

const ReviewForm = ({ movie }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = data => {
    data.movieId = movie.id;
    addReview(data);
    console.log(data);
    reset({
      author: "",
      content: ""
    });
  };

  return (
    <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
      <h3>Add a review</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Author"
          name="author"
          ref={register({ required: "Author name required" })}
        />
      </div>
      {errors.author && <p className=" text-white">{errors.author.message} </p>}
      <div className="form-group">
        <textarea
          rows="10"
          type="text"
          className="form-control"
          placeholder="Write your review"
          name="content"
          ref={register({
            required: "No review text",
            minLength: { value: 10, message: "Review is too short" }
          })}
        />
      </div>
      {errors.content && (
        <p className="text-white">{errors.content.message} </p>
      )}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button
        type="reset"
        className="btn btn-primary reset"
        onClick={() => {
          reset({
            author: "",
            content: ""
          });
        }}
      >
        Reset
      </button>
    </form>
  );
};

export default ReviewForm;