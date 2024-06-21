import React from 'react';
import { dateToKSTString } from '../utils/dateUtils';
import { toSexString } from '../utils/matchUtils';

const MatchItem = ({match}) => {
  return (
      <div id={match.id} className='matchItem'>
        <div id="left">
          <div id="topInfo">
            <div class="time">{dateToKSTString(match.time)}</div>
            <div class="match_title">{match.title}</div>
          </div>
          <div id="bottomInfo">
            <div>{toSexString(match.sex)}</div>
          </div>
        </div>
        <div id="right">
          {match.status}
        </div>
      </div>
  );
}

const MatchContianer = ({matchList}) => {
  console.log(matchList)
  return (
    <div>
      {
        matchList.map((match) => 
          <MatchItem key={match.id} match={match}></MatchItem>)
      }
    </div>
  )
}

export default MatchContianer;