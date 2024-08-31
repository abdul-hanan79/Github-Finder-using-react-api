import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
export default function UserItems(props) {
  const {
    user: { login, avatar_url },
    key,
  } = props;
  return (
    <div className="card shadow-md compact side bg-base-100 hover:-translate-y-1 hover:transition-all">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-ful shadow w-14 h-14">
              <img src={avatar_url} alt="proflie" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/users/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItems.protoTypes = {
  user: Proptypes.object.isRequired,
};
