import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import { useHistory } from "react-router-dom";
import { style } from "glamor";
// import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  // return <DesignImg theme={props.theme} />;
}

function SkillSection(props) {
  const theme = props.theme;
  const history = useHistory();

  // hover style
  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  // Alternate between left and right image for two column layout
  return (
    <div>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                  <div className="portfolio-repo-btn-div">
                    <button
                      {...styles}
                      className="button"
                      onClick={() => {
                        history.push(`${skill.link}`);
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </Fade>
              </div>
            </div>
          );
        } else {
          return (
            <div className="skills-main-div">
              <div className="skills-text-div">
                <Fade left duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade left duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade left duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <div>
                          <p
                            className="subTitle skills-text"
                            style={{ color: theme.secondaryText }}
                          >
                            {skillSentence}
                          </p>
                        </div>
                      );
                    })}
                    <div className="portfolio-repo-btn-div">
                      <button
                        {...styles}
                        className="button"
                        onClick={() => {
                          history.push(`${skill.link}`);
                        }}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </Fade>
              </div>
              <Fade right duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SkillSection;
