import * as React from "react";
import axios from "axios";
import type { User } from "./types/user";
import { BASE_URL } from "./utils/constants";

interface IConnectionsProps {}

export const Connections: React.FC<IConnectionsProps> = () => {
  const [connections, setConnections] = React.useState<User[]>([]);
  const getConnections = async () => {
    try {
      const { data } = await axios.get(
        BASE_URL + "user/connections",
        {
          withCredentials: true,
        }
      );
      setConnections(data);
      console.log(data);
    } catch (err) {}
  };
  React.useEffect(() => {
    getConnections();
  }, []);
  return (
    <div className="flex flex-col items-center gap-4 my-20">
      {!connections.length && <h1>No Connections</h1>}
      {connections.map((connection) => {
        const { firstName, lastName, photoUrl, about } = connection;
        return (
          <div
            className="card card-side bg-base-300 shadow-sm h-50 min-w-100 max-w-96"
            key={firstName}
          >
            <figure>
              <img
                className="min-w-40"
                src={photoUrl}
                alt={connection.firstName}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{firstName + " " + lastName}</h2>
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
