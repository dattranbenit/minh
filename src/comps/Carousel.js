import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import useFirestore from "../hooks/useFirestore";

export default function Carousel() {
  const { docs } = useFirestore('images');
  let [images, setImages] = React.useState()
  React.useEffect(() => {
    if (docs) {
      setImages(docs.map((doc) => {
        return ({
          original: doc.url,
          thumbnail: doc.url,
        })
      }))
    }
  }, [docs])
  return (
    <>
      <h1>Carousel</h1>
      {images && (
        <ImageGallery
          slideDuration={300}
          slideInterval={2000}
          items={images}
          thumbnailPosition={"left"}
          showBullets={true}
        />
      )}
    </>
  )
}