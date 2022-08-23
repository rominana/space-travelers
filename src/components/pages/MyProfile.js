import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Profile.css';

function Profile() {
  // rockets
  const rockets = useSelector((state) => state.rockets.filter((el) => el.rocketReserved === true));
  // console.log(rockets);
  const myRockets = rockets && rockets.map((rocket) => (
    <tbody key={rocket.rocketId}>
      <tr>
        <td>
          {' '}
          {rocket.rocketName}
        </td>
      </tr>
    </tbody>
  ));

  // missions
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.join);
  const newMissions = reservedMissions.map((reservedMission) => (
    <tbody key={reservedMission.id}>
      <tr>
        <td>
          {' '}
          {reservedMission.mission_name}
        </td>
      </tr>
    </tbody>
  ));

  return (
    <div className="profiles">
      <div>
        <h2> My Rockets </h2>
        <table className="table table-bordered">{myRockets}</table>
      </div>
      <div>
        <h2>My Dragons</h2>
        <table className="table table-bordered">MyDrogon</table>
      </div>
      <div>
        <h2>My Missions</h2>
        <table className="table table-bordered">{newMissions}</table>
      </div>
    </div>
  );
}
export default Profile;
