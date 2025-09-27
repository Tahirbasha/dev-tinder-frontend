import axios from "axios";
import * as React from "react";
import type { User } from "./types/user";
import { BASE_URL } from "./utils/constants";

interface IReuqestsProps {}

export const Reuqests: React.FC<IReuqestsProps> = () => {
  const [requests, setRequests] = React.useState<User[]>([]);
  const getReuqests = async () => {
    try {
      const { data } = await axios.get(BASE_URL + "user/requests", {
        withCredentials: true,
      });
      setRequests(data);
    } catch (err) {}
  };
  React.useEffect(() => {
    getReuqests();
  }, []);
  const acceptOrRejectRequest = async (status: string, requestId: string) => {
    try {
      const res = await axios.post(
        `http://localhost:8080/review/${status}/${requestId}`,
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        getReuqests();
      }
    } catch (err) {}
  };
  if (!requests) return null;
  return (
    <div className="flex flex-col items-center gap-4 my-20">
      {!requests.length && <p>No Requests Found.</p>}
      {requests.map((request) => {
        const { firstName, lastName, photoUrl, about } = request.fromUserId;
        return (
          <div
            className="card card-side bg-base-300 shadow-sm h-50 min-w-100 max-w-96"
            key={firstName}
          >
            <figure>
              <img src={photoUrl} alt={firstName} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{firstName + " " + lastName}</h2>
              <p>{about}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => acceptOrRejectRequest("approve", request._id)}
                >
                  Accept
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => acceptOrRejectRequest("reject", request._id)}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
