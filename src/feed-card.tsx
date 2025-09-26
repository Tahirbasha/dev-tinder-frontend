import * as React from "react";
import type { User } from "./types/user";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUsersToFeed } from "./utils/feed-slice";
import type { RootState } from "./utils/store";

interface IFeedCardProps extends User {}

export const FeedCard: React.FC<IFeedCardProps> = (props) => {
  const dispatch = useDispatch();
  const feedData: User[] = useSelector((state: RootState) => state.Feed) || [];
  const handleIgnoreOrInterest = async (status: string, userId: string) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/sendConnection/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        dispatch(addUsersToFeed(handleFilterFeed(userId)));
      }
    } catch (err: any) {
      console.log(err);
      alert(err.response.data);
    }
  };
  const handleFilterFeed = (userId: string) => {
    return feedData.filter((user) => user._id !== userId);
  };
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
          <button
            className="btn btn-secondary"
            onClick={() => handleIgnoreOrInterest("ignore", props._id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleIgnoreOrInterest("interested", props._id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};
