import React from "react";
import { dateToKSTString } from "../utils/dateUtils";
import { toSexString } from "../utils/matchUtils";
import Loading from "../component/Loading.js";
import Error from "../component/Error.js";

const toStatusString = (status) => {
  switch (status) {
    case "AVAILABLE":
      return "신청가능";
    case "HURRY":
      return "마감임박";
    case "FULL":
      return "마감";
    default:
      return "알수없음";
  }
};

const MatchItem = ({ match }) => {
  return (
    <a id={match.id} className="matchItem" href={match.link}>
      <div id="left">
        <div id="topInfo">
          <div className="time">{dateToKSTString(match.time)}</div>
          <div className="match_title">{match.title}</div>
        </div>
        <div id="bottomInfo">
          <div>{toSexString(match.sex)}</div>
        </div>
      </div>
      <div id="right">{toStatusString(match.status)}</div>
    </a>
  );
};

const MatchContianer = ({ loading, error, data }) => {
  if (error) return <Error error={error}></Error>;
  if (loading) return <Loading></Loading>;
  if (!data) return null;

  return (
    <div id="match_container">
      {data.matchList.map((match) => (
        <MatchItem key={match.id} match={match}></MatchItem>
      ))}
    </div>
  );
};

export default MatchContianer;
