import React from "react";
import { dateToKSTString } from "../utils/dateUtils";
import { toSexString } from "../utils/matchUtils";

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
      <div id="right">{match.status}</div>
    </a>
  );
};

const MatchContianer = ({ matchList }) => {
  console.log(matchList);
  return (
    <div>
      {matchList.map((match) => (
        <MatchItem key={match.id} match={match}></MatchItem>
      ))}
    </div>
  );
};

export default MatchContianer;
