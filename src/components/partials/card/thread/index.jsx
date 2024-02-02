import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { HiOutlineChat, HiOutlineClock, HiOutlineUser } from "react-icons/hi";

import { postedAt } from "../../../../utils";

const ThreadCard = ({
  id,
  title,
  body,
  category,
  user,
  createdAt,
  totalComments,
}) => (
  <Link to={`thread/${id}`}>
    <article
      title={title}
      className="overflow-hidden rounded-xl border-2 border-dark bg-light hover:border-dashed"
    >
      <div className="border-b border-dashed border-dark p-5 pb-3">
        <h2 className="truncate font-medium">{title}</h2>
      </div>

      <p className="mx-5 my-3 truncate">{body}</p>

      <div className="mx-5 mb-5 flex flex-wrap justify-between gap-x-4 gap-y-2 text-sm">
        <p>
          <HiOutlineChat className="-mt-1 inline text-lg" /> {totalComments}
        </p>

        <p>
          <HiOutlineUser className="-mt-1 inline text-lg" /> {user}
        </p>

        <p>
          <HiOutlineClock className="-mt-1 inline text-lg" />{" "}
          {postedAt(createdAt)}
        </p>

        <p className="font-medium">#{category}</p>
      </div>
    </article>
  </Link>
);

ThreadCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
};

export default ThreadCard;
