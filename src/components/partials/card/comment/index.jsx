import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { asyncVoteComment } from "../../../../helpers/thread-detail/action";
import { postedAt } from "../../../../utils";
import VoteButton from "../../button/vote";

const CommentCard = ({
  id: commentId,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
}) => {
  const { threadId } = useParams();
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const handleUpVote = () =>
    dispatch(
      asyncVoteComment({
        threadId,
        commentId,
        voteType: "up-vote",
      }),
    );
  const handleDownVote = () =>
    dispatch(
      asyncVoteComment({
        threadId,
        commentId,
        voteType: "down-vote",
      }),
    );
  const handleNeutralVote = () =>
    dispatch(
      asyncVoteComment({
        threadId,
        commentId,
        voteType: "neutral-vote",
      }),
    );

  return (
    <article className="flex flex-col gap-3 rounded-xl border py-3 px-4">
      <div className="flex items-center gap-3">
        <img
          src={owner.avatar}
          alt={`${owner.name}'s avatar`}
          className="w-12 rounded-xl"
        />

        <div className="overflow-auto">
          <h3>{owner.name}</h3>
          <p className="text-sm">{postedAt(createdAt)}</p>
        </div>
      </div>

      <p className="break-words pt-2">{content}</p>

      <div className="flex items-center justify-between gap-2 pt-2">
        <div className="flex gap-8">
          <VoteButton
            options={{
              voteType: "comment",
              upOrDown: "up",
              isDisabled: !authUser,
              isVoted: upVotesBy.includes(authUser?.id),
            }}
            onVote={handleUpVote}
            onNeutral={handleNeutralVote}
          >
            {upVotesBy.length}
          </VoteButton>

          <VoteButton
            options={{
              voteType: "comment",
              upOrDown: "down",
              isDisabled: !authUser,
              isVoted: downVotesBy.includes(authUser?.id),
            }}
            onVote={handleDownVote}
            onNeutral={handleNeutralVote}
          >
            {downVotesBy.length}
          </VoteButton>
        </div>
      </div>
    </article>
  );
};

CommentCard.propTypes = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CommentCard;
