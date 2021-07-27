import React from "react";
import "./StoryReel.css";
import Story from "./Story";
import ProfileSrc from "../resources/bae.jpg";
import ProfileSrc1 from "../resources/john.jpg";
import ProfileSrc2 from "../resources/boo.jpg";
import ProfileSrc3 from "../resources/fada.jpg";
import ProfileSrc4 from "../resources/gidy.jpg";
import backgroundImg from "../resources/bo1.png";
import backgroundImg1 from "../resources/john.jpg";
import backgroundImg2 from "../resources/youn.png";
import backgroundImg3 from "../resources/gidy1.png";
import backgroundImg4 from "../resources/details.jpg";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story title="Nancy" storyImg={ProfileSrc} imgSrc={backgroundImg} />
      <Story title="John" storyImg={ProfileSrc1} imgSrc={backgroundImg1} />
      <Story title="Gidysmart" storyImg={ProfileSrc2} imgSrc={backgroundImg2} />
      <Story title="Gideonick" storyImg={ProfileSrc3} imgSrc={backgroundImg3} />
      <Story title="Victoria" storyImg={ProfileSrc4} imgSrc={backgroundImg4} />
    </div>
  );
}

export default StoryReel;
