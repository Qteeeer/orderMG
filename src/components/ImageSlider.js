import review from "../pages/res/review.png";
import review1 from "../pages/res/review1.png";
import review2 from "../pages/res/review2.png";
import review3 from "../pages/res/review3.png";

import { useState, useRef } from "react";

const ImageSlider = () => {
  const images = [
    { id: 1, url: review },
    { id: 2, url: review1 },
    { id: 3, url: review2 },
    { id: 4, url: review3 },
  ];

  const [selectedImage, setSelectedImage] = useState(null); // Состояние для хранения выбранного изображения
  const [currentIndex, setCurrentIndex] = useState(0); // Текущий индекс слайда
  const sliderRef = useRef(null); // Реф для элемента слайдера

  // Функция для обработки клика на изображение
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Функция для закрытия выбранного изображения
  const handleCloseSelectedImage = () => {
    setSelectedImage(null);
  };

  // Функция для обработки начала свайпа
  const handleTouchStart = (e) => {
    if (!sliderRef.current) return;
    const touchDown = e.touches[0].clientX;
    sliderRef.current.dataset.touchStart = touchDown;
    sliderRef.current.dataset.touchEnd = touchDown;
  };

  // Функция для обработки движения при свайпе
  const handleTouchMove = (e) => {
    if (!sliderRef.current) return;
    const touchEnd = e.touches[0].clientX;
    sliderRef.current.dataset.touchEnd = touchEnd;
  };

  // Функция для обработки окончания свайпа
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

  // Стили
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
      transform: `translateX(-${currentIndex * 125}%)`, // Перемещаем слайды при изменении currentIndex
    },
    imageWrapper: {
      flex: "0 0 25%", // Каждый слайд занимает 25% ширины контейнера
      margin: "0 5px", // Расстояние между картинками 5px
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
      {/* Карусель с изображениями */}
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
              <img
                src={image.url}
                alt={`Image ${image.id}`}
                style={styles.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Всплывающее окно с выбранным изображением */}
      {selectedImage && (
        <div
          style={styles.selectedImageContainer}
          onClick={handleCloseSelectedImage}
        >
          <img
            src={selectedImage.url}
            alt={`Selected Image ${selectedImage.id}`}
            style={styles.selectedImage}
            onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике на само изображение
          />
        </div>
      )}
    </div>
  );
};

export { ImageSlider };
