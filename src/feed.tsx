import * as React from "react";
import type { User } from "./types/user";
import axios from "axios";
import { FeedCard } from "./feed-card";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./utils/store";
import { addUsersToFeed } from "./utils/feed-slice";

const Feed: React.FC<IFeedProps> = () => {
  const feedData: User[] = useSelector((state: RootState) => state.Feed) || [];
  const dispatch = useDispatch();
  const getFeedData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/feed", {
        withCredentials: true,
      });
      dispatch(addUsersToFeed(res.data));
    } catch (err) {}
  };
  React.useEffect(() => {
    getFeedData();
  }, []);

  if (!feedData) return null;
  if (!feedData.length) return <h1>No New Users.</h1>;

  return (
    <div className="flex flex-col items-center gap-4 my-20">
      {feedData.map((profile: User) => {
        return <FeedCard {...profile} />;
      })}
    </div>
  );
};

export default Feed;
interface IFeedProps {}
