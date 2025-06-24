import React from "react";
import "./ExperienceCard.css";

const LinkWrapper = ({ content, url, color }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" style={{ color }}>
    {content}
  </a>
);

function ExperienceCard({ experience, theme, isRecommendation = false }) {
  const url = experience["company_url"] || "#";

  const title = isRecommendation
    ? LinkWrapper({
        content: experience["name"],
        url,
        color: theme.text,
      })
    : experience["title"];

  const subTitle = isRecommendation
    ? experience["title"]
    : LinkWrapper({ content: experience["company"], url, color: theme.text });

  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${experience["color"]}`,
        backgroundColor: theme.imageDark,
      }}
    >
      <div
        className="experience-card-logo-div"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LinkWrapper
          content={
            <img
              className="experience-card-logo"
              src={`${process.env.PUBLIC_URL}/assets/images/${experience["logo_path"]}`}
              alt=""
            />
          }
          url={url}
          color={theme.text}
        />
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h3
              className="experience-card-title"
              style={{
                color: theme.text,
              }}
            >
              {title}
            </h3>
            <p
              className="experience-card-company"
              style={{ color: theme.secondaryText }}
            >
              {subTitle}
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p
              className="experience-card-duration"
              style={{ color: theme.secondaryText }}
            >
              {experience["duration"]}
            </p>
            <p
              className="experience-card-location"
              style={{ color: theme.secondaryText }}
            >
              {experience["location"]}
            </p>
          </div>
        </div>
        <p
          className="experience-card-description"
          style={{
            color: theme.text,
            fontStyle: isRecommendation ? "italic" : "normal",
          }}
        >
          {experience["description"]}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
