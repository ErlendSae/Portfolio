import { FC } from "react";
import { Bilder } from "./projectitems";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const Slideshow: FC<{ images: Bilder[] }> = ({ images }) => {
  return (
    <Slide>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0].link})` }}>
          <span>Slide 1</span>
        </div>
      </div>
      {/* <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1].link})` }}>
          <span>Slide 2</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2].link})` }}>
          <span>Slide 3</span>
        </div>
      </div> */}
    </Slide>
  );
};
