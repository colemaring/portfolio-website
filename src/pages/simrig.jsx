import React from "react";
import pic1 from "../assets/simrig/20240922_161129-min.jpg";
import pic2 from "../assets/simrig/20240922_161222-min.jpg";
import pic3 from "../assets/simrig/20240922_161317-min.jpg";
import pic4 from "../assets/simrig/20240922_161329-min.jpg";
import pic5 from "../assets/simrig/20240922_161341-min.jpg";
import pic6 from "../assets/simrig/20240922_161429-min.jpg";
import pic7 from "../assets/simrig/20240922_161448-min.jpg";

function Simrig() {
  return (
    <div id="content">
      <img
        src={pic1} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <img
        src={pic3} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <img
        src={pic4} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <img
        src={pic5} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <img
        src={pic6} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <img
        src={pic7} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <img
        src={pic2} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
    </div>
  );
}

export default Simrig;
