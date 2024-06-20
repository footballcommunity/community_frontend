import React from 'react';

const MatchItem = ({match}) => {
  return (
      <div id={match.id} className='matchItem'>
        <div>{match.title}</div>
        <div>{match.time}</div>
        <div>{match.sex}</div>
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