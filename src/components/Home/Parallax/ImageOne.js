import { Parallax } from "react-parallax";
import crane from "../../../assets/crane.png"

const ImageOne = () => (

    <Parallax
        className="image"
        bgImage={crane}
        strength={400}
        >
        <div className="content">
            <span className="welcome-text">Welcome to Ludmer Engineering</span>
   </div>
  </Parallax>
);

export default ImageOne;