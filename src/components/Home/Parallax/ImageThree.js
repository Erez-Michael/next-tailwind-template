import { Parallax } from "react-parallax";
import img3 from "../../../assets/img3.jpg";
const ImageThree = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={img3}
    strength={400}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="content">
      <span className="img-txt">Geotechnical engineering </span>
    </div>
  </Parallax>
);

export default ImageThree;
