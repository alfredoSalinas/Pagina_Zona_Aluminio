import React, { useEffect, useRef, useState } from "react";
import foto1 from '../images/perfiles.jpeg'
import foto2 from '../images/acPerfiles.jpeg'
import foto3 from '../images/templado.jpeg'
import foto4 from '../images/acTemplado.jpeg'
import { Grid } from "@material-ui/core";

//export type ImageType = { id: number; url: string };

const cards = [
  {
    id: 1,
    title: 'PERFILES DE ALUMINIO',
    description: 'Color Natural, Champagne y Bronce',
    foto: foto1
  },
  {
    id: 2,
    title: 'ACCESORIOS DE ALUMINIO',
    description: 'Color Natural, Champagne y Bronce',
    foto: foto2
  },
  {
    id: 3,
    title: 'VIDRIO TEMPLADO',
    description: 'Color Natural, Champagne y Bronce',
    foto: foto3
  },
  {
    id: 4,
    title: 'ACCESORIOS PARA VIDRIO TEMPLADO',
    description: 'Color Natural, Champagne y Bronce',
    foto: foto4
  },
  {
    id: 5,
    title: 'PERFILES DE ALUMINIO',
    description: 'Color Natural, Champagne y Bronce',
    foto: foto1
  },
  {
    id: 6,
    title: 'ACCESORIOS DE ALUMINIO',
    description: 'Color Natural, Champagne y Bronce',
    foto: foto2
  },
  {
    id: 7,
    title: 'VIDRIO TEMPLADO',
    description: 'Color Natural, Champagne y Bronce',
    foto: foto3
  },
  {
    id: 8,
    title: 'ACCESORIOS PARA VIDRIO TEMPLADO',
    description: 'Color Natural, Champagne y Bronce',
    foto: foto4
  },
  {
    id: 9,
    title: 'PERFILES DE ALUMINIO',
    description: 'Color Natural, Champagne y Bronce',
    foto: foto1
  },
  {
    id: 10,
    title: 'ACCESORIOS DE ALUMINIO',
    description: 'Color Natural, Champagne y Bronce',
    foto: foto2
  },
  {
    id: 11,
    title: 'VIDRIO TEMPLADO',
    description: 'Color Natural, Champagne y Bronce',
    foto: foto3
  },
  {
    id: 12,
    title: 'ACCESORIOS PARA VIDRIO TEMPLADO',
    description: 'Color Natural, Champagne y Bronce',
    foto: foto4
  },
]


const ImageCarousel = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState();
  const carouselItemsRef = useRef([]);
  const images = cards
  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        images.length
      );

      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
      if (carouselItemsRef.current[newIdx]) {
        carouselItemsRef.current[newIdx].scrollIntoView({
          inline: "center",
          behavior: "smooth"
        });
      }
    }
  };

  const handleRightClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex + 1;
      if (newIdx >= images.length) {
        newIdx = 0;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  const handleLeftClick = () => {
      console.log(selectedImage)
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex - 1;
      if (newIdx < 0) {
        newIdx = images.length - 1;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  return (
    <div className="carousel-container">
      <h2 className="header">Producto</h2>
      <Grid container justify="center">
      <div
        className="selected-image"
        style={{ backgroundImage: `url(${selectedImage && selectedImage.foto})` }}
      />
      </Grid>
      <div className="carousel">
        <div className="carousel__images">
          {images &&
            images.map((image, idx) => (
              <div
                onClick={() => handleSelectedImageChange(idx)}
                style={{ backgroundImage: `url(${image.foto})` }}
                key={image.id}
                className={`carousel__image ${
                  selectedImageIndex === idx && "carousel__image-selected"
                }`}
                ref={(el) => (carouselItemsRef.current[idx] = el)}
              />
            ))}
        </div>
        
        <button
          className="carousel__button carousel__button-left"
          onClick={handleLeftClick}
        >
          Prev
        </button>
        <button
          className="carousel__button carousel__button-right"
          onClick={handleRightClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
