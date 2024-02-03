import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";

const VoteButton = ({ options, onVote, onNeutral, children }) => {
  const { voteType, upOrDown, isDisabled, isVoted = false } = options;

  const title = isDisabled
    ? `Log in to ${upOrDown} vote`
    : `${isVoted ? "Undo" : ""} ${upOrDown} vote this ${voteType}`;
  const iconClasses = `mr-1 inline ${isVoted && "text-green"}`;

  const handleClick = () => {
    if (isVoted) {
      onNeutral();
    } else {
      onVote();
    }
  };

  return (
    <button
      type="button"
      title={title}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {upOrDown === "up" ? (
        <IoIosArrowUp className={iconClasses} />
      ) : (
        <IoIosArrowDown className={iconClasses} />
      )}
      {children}
    </button>
  );
};

VoteButton.propTypes = {
  isVoted: PropTypes.shape({
    voteType: PropTypes.oneOf(["thread", "comment"]),
    upOrDown: PropTypes.oneOf(["up", "down"]),
    isDisabled: PropTypes.bool,
    isVoted: PropTypes.bool,
  }),
  onVote: PropTypes.func,
  onNeutral: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default VoteButton;
