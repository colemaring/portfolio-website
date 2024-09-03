import React from "react";
import voron1 from "../assets/voron/20240124_143929.jpg";
import voron2 from "../assets/voron/20240124_143940.jpg";
import voron3 from "../assets/voron/20240126_230924.jpg";
import voron4 from "../assets/voron/20240127_114500.jpg";
import voron5 from "../assets/voron/20240128_160400.jpg";
import voron6 from "../assets/voron/20240130_133854.jpg";
import voron7 from "../assets/voron/20240131_220246.jpg";
import voron8 from "../assets/voron/20240201_165820.jpg";
import voron9 from "../assets/voron/20240203_120609.jpg";
import voron10 from "../assets/voron/20240213_210318.jpg";
import voron11 from "../assets/voron/20240213_210335.jpg";
import voron12 from "../assets/voron/DSC07276.jpg";
import voron13 from "../assets/voron/DSC07277.jpg";

function Voron() {
  return (
    <div id="content">
      <h1>Voron 0.2</h1>
      <p>This page documents my experience with building a siboor voron 0.2.</p>
      <img
        src={voron1} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <img
        src={voron2} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <p>
        First I assembled the frame, triple checking that the extrusions are
        square using a known flat surface, such as a pane of glass. I also
        cleaned and lubricated the linear rails and trammed the z axis to ensure
        free movement and zero binding. Having a square frame and rails are
        extremebly important. My kit came with a kirigami bed.
      </p>
      <img
        src={voron3} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <img
        src={voron4} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <p>
        Next was putting together the stepper and belt pulleys. Then I installed
        the X-beam and the linear rail that sits atop. This X rail should be the
        "tighter" of the rails. I was happy I spent time squaring the frame,
        because at this point the beam could move freely with zero slop. The
        threaded Z rod in the back is what moved the bed up and down.
      </p>
      <img
        src={voron5} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <p>
        Since this is a CoreXY printer, both belts need to be tensioned
        accurately. I used a insturment tuner on my phone and plucked the belts
        to ensure that each belt was resonating at the same frequency, which I
        believe was 110hz. I also installed the heated bed and magnetic sheet to
        hold the build plate.
      </p>
      <img
        src={voron6} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <p>
        Next was assembling the toolhead and moutning it on the X rail which was
        a tedious process.{" "}
      </p>
      <img
        src={voron7} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <p>Here is version 1 of the electronics wiring.</p>
      <img
        src={voron8} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <img
        src={voron9} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <p>Acrylic panels and finishing touches before the top hat.</p>
      <img
        src={voron10} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <img
        src={voron11} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <p>Mainboard wiring</p>
      <img
        src={voron12} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <img
        src={voron13} // Use the imported image
        alt="Description of image 1"
        style={{ width: "400px", height: "auto" }} // Set the width and height
      />
      <p>
        Glam shots. This build turned out well! I have 150+ hours on this
        machine and it prints like a beast. Some things I would like to upgrade
        is the electronics cooling fan, bowden drive, and raspberry pi camera.
      </p>
    </div>
  );
}

export default Voron;
