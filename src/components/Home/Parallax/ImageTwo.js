import { Parallax } from "react-parallax";
import img2 from "../../../assets/img2.png";

const ImageTwo = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={img2}
    strength={400}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="content">
      <span className="img-txt">Construction engineering</span>
    </div>
  </Parallax>
);

export default ImageTwo;
