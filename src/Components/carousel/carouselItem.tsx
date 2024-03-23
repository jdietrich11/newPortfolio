import React from "react";

interface CarouselItemProps {
  key: number;
  imgUrl: any;
  ImgTitle: string;
}

const CarouselItem: React.FC<CarouselItemProps> = (props) => {
  const { imgUrl, ImgTitle, key } = props;

  return (
    <div key={key} className="carouselCard">
      <img src={imgUrl} alt={ImgTitle} className="carouselCardImg" />
    </div>
  );
};

export default CarouselItem;
