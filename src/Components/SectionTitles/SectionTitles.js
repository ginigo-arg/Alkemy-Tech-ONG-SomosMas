import React from "react";
import nomedia from "../../assets/img/banner-image.png";
import "./SectionTitles.css";

const SectionTitles = ({
  title,
  backgroundImg = ""
}) => {
  return (
    <>
      <div
        key={title}
        className="zoneContent"
        style={{
          backgroundImage: backgroundImg
            ? `url( ${backgroundImg})`
            : `url( ${nomedia})`,
        }}
      >
          <div className="zoneTitle bg-secondary opacity-50 border-secondary">
              <h4 className="text-white">{title}</h4>
          </div>
      </div>
    </>
  );
};

export default SectionTitles;