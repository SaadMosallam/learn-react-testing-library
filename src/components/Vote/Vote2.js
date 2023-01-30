import PropTypes from "prop-types";
import React from "react";
import thumbsDown from "src/assets/thumbs-down.svg";
import thumbsUp from "src/assets/thumbs-up.svg";
import VoteBtn from "./VoteBtn";

export const hasVotedEnum = {
  like: "LIKE",
  dislike: "DISLIKE",
  noVote: "NO_VOTE",
};

export const altTextEnum = {
  like: "vote like",
  dislike: "vote dislike",
};

const Vote = ({ totalGlobalLikes }) => {
  const likeReducer = (state, action) => {
    switch (action.type) {
      case hasVotedEnum.like:
        return {
          ...state,
          totalLikes: state.totalLikes + 1,
          hasVoted: hasVotedEnum.like,
        };
      case hasVotedEnum.dislike:
        return {
          ...state,
          totalLikes: state.totalLikes - 1,
          hasVoted: hasVotedEnum.dislike,
        };
      default:
        return state;
    }
  };
  const initialState = {
    totalLikes: totalGlobalLikes,
    hasVoted: hasVotedEnum.noVote,
  };
  const [state, dispatch] = React.useReducer(likeReducer, initialState);

  const { totalLikes, hasVoted } = state;
  const handleVoteLike = () => dispatch({ type: hasVotedEnum.like });
  const handleVoteDislike = () => dispatch({ type: hasVotedEnum.dislike });

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="d-flex d-inline-flex flex-column h1 m-2">
          <div className="h1">
            <h5>
              Note: You are not allowed to change your vote once selected!
            </h5>
            <div className="row justify-content-center">
              <div className="col-2">
                <VoteBtn
                  handleVote={handleVoteLike}
                  hasVoted={hasVoted}
                  imgSrc={thumbsUp}
                  altText={altTextEnum.like}
                />
                <div>{totalLikes}</div>
                <VoteBtn
                  handleVote={handleVoteDislike}
                  hasVoted={hasVoted}
                  imgSrc={thumbsDown}
                  altText={altTextEnum.dislike}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Vote.propTypes = {
  totalGlobalLikes: PropTypes.number.isRequired,
};

export default Vote;
