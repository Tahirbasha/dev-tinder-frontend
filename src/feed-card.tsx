import * as React from "react";
import type { User } from "./types/user";

interface IFeedCardProps extends User {}

export const FeedCard: React.FC<IFeedCardProps> = (props) => {
  return (
    <div className="card bg-base-300 w-70 h-120 shadow-sm">
      <figure>
        <img
          src={
            props.photoUrl ||
            "https://brownamdug.wordpress.com/wp-content/uploads/2025/02/wechatimg919-1.png?w=916"
          }
          alt={props.firstName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.firstName + " " + props.lastName}</h2>
        <p>{props.about}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Ignore</button>
          <button className="btn btn-primary">Interested</button>
        </div>
      </div>
    </div>
  );
};
