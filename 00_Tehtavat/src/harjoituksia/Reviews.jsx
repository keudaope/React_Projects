const Reviews = ({ reviews }) => (
  <div>
    {reviews.map((review) => (
      <div key={review.id}>
        <p>{review.text}</p>
        <p>{review.rating}</p>
      </div>
    ))}
  </div>
);
export default Reviews;
