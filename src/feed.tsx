import * as React from "react";
import { useState } from "react";
import type { User } from "./types/user";
import axios from "axios";
import { FeedCard } from "./feed-card";

const Feed: React.FC<IFeedProps> = () => {
  const [profileFeed, setProfileFeed] = useState<User[]>([]);
  const getFeedData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/feed", {
        withCredentials: true,
      });
      setProfileFeed(res.data);
    } catch (err) {
    }
  };
  React.useEffect(() => {
    getFeedData();
  }, []);
  return (
    <div className="flex flex-col items-center gap-4 my-20">
      {profileFeed.map((profile) => {
        return <FeedCard {...profile} />;
      })}
    </div>
  );
};

export default Feed;
interface IFeedProps {}
