import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

const ExperienceAccordion = ({ theme, sections }) => (
  <div className="experience-accord">
    <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
      {/* @TODO: Separate the Work Experience and Recommendations sections into two different accordions, each with its own initial state for expanded panels. */}
      <Accordion
        onChange={({ expanded }) => console.log(expanded)}
        initialState={{ expanded: ["Recommendations"] }}
      >
        {sections.map((section) => (
          <Panel
            className="accord-panel"
            title={section["title"]}
            key={section["title"]}
          >
            {section["experiences"].map((experience) => {
              return (
                <ExperienceCard
                  experience={experience}
                  theme={theme}
                  isRecommendation={section["title"] === "Recommendations"}
                />
              );
            })}
          </Panel>
        ))}
      </Accordion>
    </ThemeProvider>
  </div>
);

export default ExperienceAccordion;
