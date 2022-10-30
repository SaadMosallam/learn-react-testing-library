import PropTypes from 'prop-types'
import * as React from 'react'
import thumbsDown from '../../assets/thumbs-down.svg'
import thumbsUp from '../../assets/thumbs-up.svg'

const Vote = ({ totalGlobalLikes }) => {
  const likeReducer = (state, action) => {
    switch (action.type) {
      case 'LIKE':
        return {
          ...state,
          totalLikes: state.totalLikes + 1,
          hasVoted: true,
          clickedLike: true
        }
      case 'DISLIKE':
        return {
          ...state,
          totalLikes: state.totalLikes - 1,
          hasVoted: true,
          clickedDislike: true
        }
      default:
        return state
    }
  }
  const [state, dispatch] = React.useReducer(likeReducer, {
    totalLikes: totalGlobalLikes,
    hasVoted: false
  })

  const { totalLikes, hasVoted, clickedLike, clickedDislike } = state
  const handleLikeVote = () => dispatch({ type: 'LIKE' })
  const handleDislikeVote = () => dispatch({ type: 'DISLIKE' })

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="d-flex d-inline-flex flex-column h1 m-2">
          <h5>Note: You are not allowed to change your vote once selected!</h5>
          <div className="row justify-content-center">
            <div className="col-2">
              <button
                onClick={handleLikeVote}
                disabled={hasVoted}
                style={clickedLike ? { background: 'green' } : null}
                className="btn btn-secondary p-2"
              >
                <img src={thumbsUp} alt="thumbs up" />
              </button>
              <div>{totalLikes}</div>
              <button
                onClick={handleDislikeVote}
                disabled={hasVoted}
                style={clickedDislike ? { background: 'red' } : null}
                className="btn btn-secondary p-2"
              >
                <img src={thumbsDown} alt="thumbs down" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Vote.propTypes = {
  totalGlobalLikes: PropTypes.number.isRequired
}

export default Vote
