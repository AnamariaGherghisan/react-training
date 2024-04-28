import { useApp } from "../context/AppProvider";

export const Jumbotron = () => {
  const { profileName } = useApp();

  return (
    <div className="jumbotron">
      <div className="title">Booking.com</div>

      <div className="sub-title">Welcome {profileName}</div>
    </div>
  );
};
