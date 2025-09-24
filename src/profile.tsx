import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./utils/store";
import { useState } from "react";
import axios from "axios";
import { addUser } from "./utils/user-slice";
import { Card } from "./card";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state: RootState) => state.User);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(user?.firstName ?? "");
  const [lastName, setLastName] = useState(user?.lastName ?? "");
  const [city, setCity] = useState(user?.city ?? "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl ?? "");
  const [gender, setGender] = useState(user?.gender ?? "");
  const [about, setAbout] = useState(user?.about ?? "");
  const [displayToast, setToastStatus] = useState(false);
  const handleUpdateProfile = async () => {
    try {
      const { data } = await axios.patch(
        "http://localhost:8080/update",
        {
          firstName,
          lastName,
          city,
          photoUrl,
          about,
          gender,
        },
        {
          withCredentials: true,
        }
      );
      if (data.data) {
        dispacth(addUser(data.data));
        setToastStatus(true);
        setTimeout(() => {
          setToastStatus(false);
        }, 2000);
      }
    } catch (err) {
    }
  };
  if (!user) {
    navigate("/feed");
    return null;
  }
  return (
    <div className="flex justify-center gap-3 my-5 h-screen items-center">
      <fieldset className="fieldset w-70 h-120 bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <label className="label">Firstname</label>
        <input
          type="text"
          className="input"
          placeholder="Firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label className="label">Lastname</label>
        <input
          type="text"
          className="input"
          placeholder="Lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label className="label">City</label>
        <input
          type="text"
          className="input"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label className="label">Photo</label>
        <input
          type="text"
          className="input"
          placeholder="Photo"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
        />
        <label className="label">Gender</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              className="radio radio-xs"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            Male
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              className="radio radio-xs"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            Female
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              className="radio radio-xs"
              checked={gender !== "male" && gender !== "female"}
              onChange={() => setGender("others")}
            />
            Others
          </label>
        </div>
        <label className="label">About</label>
        <input
          type="text"
          className="input"
          placeholder="About"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <button className="btn btn-success mt-4" onClick={handleUpdateProfile}>
          Update
        </button>
      </fieldset>
      <Card {...user} />
      {displayToast && (
        <div className="toast toast-top toast-center z-20">
          <div className="alert alert-success">
            <span>Profile updated successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
