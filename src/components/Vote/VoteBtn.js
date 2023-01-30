import PropTypes from "prop-types";
import React from "react";
import { hasVotedEnum, altTextEnum } from "./Vote2";

const VoteBtn = (props) => {
  const { hasVoted, handleVote, imgSrc, altText } = props;
  const buttonBackgroundColor = () => {
    switch (hasVoted) {
      case hasVotedEnum.like:
        if (altText === altTextEnum.like) return { background: "green" };
        return null;
      case hasVotedEnum.dislike:
        if (altText === altTextEnum.dislike) return { background: "red" };
        return null;
      case hasVotedEnum.noVote:
        return null;
    }
  };
  return (
    <button
      onClick={handleVote}
      disabled={hasVoted !== hasVotedEnum.noVote}
      style={buttonBackgroundColor()}
      className="btn btn-secondary p-2"
    >
      <img src={imgSrc} alt={altText} />
    </button>
  );
};
VoteBtn.propTypes = {
  handleVote: PropTypes.func.isRequired,
  hasVoted: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
export default VoteBtn;
