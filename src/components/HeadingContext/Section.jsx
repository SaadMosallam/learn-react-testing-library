import React from "react";
import PropTypes from "prop-types";
import { LevelContext } from "./LevelContext";

export default function Section({ level, children }) {
  return (
    <LevelContext.Provider value={level}>
      <section className="section">{children}</section>
    </LevelContext.Provider>
  );
}

Section.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
