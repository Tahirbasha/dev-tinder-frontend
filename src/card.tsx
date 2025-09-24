import * as React from "react";
import type { User } from "./types/user";

interface ICardProps extends User {}

export const Card: React.FC<ICardProps> = (props) => {
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
        <h2 className="Card-title">{props.firstName + " " + props.lastName}</h2>
        <p>{props.gender}</p>
        <p>{props.city}</p>
        <p>{props.about}</p>
      </div>
    </div>
  );
};
