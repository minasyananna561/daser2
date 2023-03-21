import React, { useState } from 'react'
import Zoom from 'react-img-zoom'
import useImageZoom from "react-image-zoom-hook";
import './index.css'


function Page3() {
  const [status, setStatus] = useState(false);


  const imgHeight = 416;

  const imgWidth = 376;

  const lensHeight = 100;

  const lensWidth = 100;

  const previewLensHeight = 600;

  const img =
    "https://rukminim1.flixcart.com/image/416/416/jz30nm80/bedsheet/q/z/s/comfort-living-100-cotton-double-bedsheet-with-2-pillow-covers-original-imafj69wjzahmcw5.jpeg?q=70";
  const previewImg =
    "https://rukminim1.flixcart.com/image/1664/1664/jz30nm80/bedsheet/q/z/s/comfort-living-100-cotton-double-bedsheet-with-2-pillow-covers-original-imafj69wjzahmcw5.jpeg?q=90";

  const {
    moveLens,

    imgDimesions,

    lensDimensions,

    previewLensDimensions,

    previewImgDimensions,

    imgContainerDimesions,

    imgRefCallback,

    meshRefCallback,

    imagePreviewRefCallback
  } = useImageZoom({
    imgHeight,

    imgWidth,

    lensHeight,

    lensWidth,

    previewLensHeight,

    img,

    previewImg
  });

  
  return (
    <div className="container">
       {/* <h1  onClick={()=> setStatus(!status)}>
            {status &&
            <span  style={{background:"red"}}>&#10003;</span>

            }
            Simon</h1>

            <Zoom
  img="https://thumbs.dreamstime.com/b/yellow-orange-starburst-flower-nature-jpg-192959431.jpg"
  zoomScale={3}
  width={600}
  height={600}
/> */}


<div
        className="img-main-container"
        onMouseMove={moveLens}
        style={{
          ...imgContainerDimesions
        }}
      >
        <div
          ref={meshRefCallback}
          className="mesh"
          style={{
            ...lensDimensions
          }}
        />

        <img
          style={{
            ...imgDimesions
          }}
          ref={imgRefCallback}
          alt="test"
          src={img}
        />
      </div>

      <div
        className="img-preview-section-container"
        // ref={imagePreviewRefContainer}

        style={{
          ...previewLensDimensions
        }}
      >
        <img
          ref={imagePreviewRefCallback}
          alt="test-preview"
          src={previewImg}
          style={{
            ...previewImgDimensions
          }}
          className="img-preview-section"
        />
      </div>
            
    </div>
  )
}

export default Page3