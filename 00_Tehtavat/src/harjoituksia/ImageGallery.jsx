const ImageGallery = ({ images }) => (
  <div>
    {images.map((image) => (
      <img
        key={image.id}
        src={image.src}
        alt={image.alt}
        style={{ height: "150px" }}
      />
    ))}
  </div>
);

export default ImageGallery;
