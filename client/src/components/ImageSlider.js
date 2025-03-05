import { useState, useRef } from "react";

const ImageSlider = (props) => {
  const { images } = props;

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseSelectedImage = () => {
    setSelectedImage(null);
  };

  const handleTouchStart = (e) => {
    if (!sliderRef.current) return;
    const touchDown = e.touches[0].clientX;
    sliderRef.current.dataset.touchStart = touchDown;
    sliderRef.current.dataset.touchEnd = touchDown;
  };

  const handleTouchMove = (e) => {
    if (!sliderRef.current) return;
    const touchEnd = e.touches[0].clientX;
    sliderRef.current.dataset.touchEnd = touchEnd;
  };

  const handleTouchEnd = () => {
    if (!sliderRef.current) return;
    const touchStart = Number(sliderRef.current.dataset.touchStart);
    const touchEnd = Number(sliderRef.current.dataset.touchEnd);

    if (touchEnd - touchStart > 50 && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
    if (touchStart - touchEnd > 50 && currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 5,
    },
    sliderContainer: {
      position: "relative",
      width: "100%",
      maxWidth: "800px",
      overflow: "hidden",
    },
    slider: {
      display: "flex",
      transition: "transform 0.5s ease-in-out",
      transform: `translateX(-${currentIndex * 125}%)`,
    },
    imageWrapper: {
      flex: "0 0 25%",
      margin: "0 5px",
      cursor: "pointer",
    },
    image: {
      maxWidth: 250,
      height: 85,
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    selectedImageContainer: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    selectedImage: {
      maxWidth: 400,
      maxHeight: 150,
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <div style={styles.container}>
      <div
        ref={sliderRef}
        style={styles.sliderContainer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div style={styles.slider}>
          {images.map((image, index) => (
            <div
              key={image.id}
              style={styles.imageWrapper}
              onClick={() => handleImageClick(image)}
            >
              <img src={image.url} alt={`${image.id}`} style={styles.image} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          style={styles.selectedImageContainer}
          onClick={handleCloseSelectedImage}
        >
          <img
            src={selectedImage.url}
            alt={`${selectedImage.id}`}
            style={styles.selectedImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export { ImageSlider };
