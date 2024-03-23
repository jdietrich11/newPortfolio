import React from "react";

import CarouselItem from "./carouselItem";

import "./carousel.styles.scss";

interface CarouselProps {
  CarouselDetails: { imgUrl: any; imgTitle: string; id: number }[];
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const { CarouselDetails } = props;
  console.log(CarouselDetails);

  return (
    <div className="carouselContainer">
      <div className="carouselTrack">
        {CarouselDetails.map((item) => {
          return (
            <CarouselItem
              key={item.id}
              imgUrl={item.imgUrl}
              ImgTitle={item.imgTitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
