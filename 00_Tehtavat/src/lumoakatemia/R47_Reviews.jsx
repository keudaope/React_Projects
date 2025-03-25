export default function Reviews({ reviews }) {
  return reviews.map((review) => (
    <p>
      {review.text} - {review.rating}
    </p>
  ));
}
