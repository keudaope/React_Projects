export default function Images({ images }) {
  return images.map((image) => (
    <img src={image.src} alt={image.alt} key={image.id} height="150px" />
  ));
}
