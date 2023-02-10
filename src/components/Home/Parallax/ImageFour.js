import { Parallax } from "react-parallax";
import retrofit from "../../../assets/retrofit.png";
const ImageFour = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={retrofit}
    strength={400}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="content">
      <span className="img-txt">Building retrofitting</span>
    </div>
  </Parallax>
);

export default ImageFour;
