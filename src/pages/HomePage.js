/* BoardList.js */
import React, { useEffect, useState } from "react";
import useAsync from "../hooks/useAsync.js";
import DateContainer from "../component/DateContainer.js";
import { getMatchList } from "../api/match.js";
import "../css/HomePage.css";
import MatchContianer from "../component/MatchContainer.js";
import Page from "../component/Page.js";

import {
  hourToTimeString,
  getHourFromDateString,
  getDateList,
  getCurrentKSTDateString,
  getDateFromDateString,
  getTimeList,
  getAPIDateStringFromDateString,
} from "../utils/dateUtils.js";

const HomePage = () => {
  const currentDateString = getCurrentKSTDateString();
  const [startDate, setStartDate] = useState(
    getDateFromDateString(currentDateString)
  );
  const [startTime, setStartTime] = useState(
    hourToTimeString(getHourFromDateString(currentDateString))
  );
  const [endDate, setEndDate] = useState(
    getDateFromDateString(currentDateString)
  );
  const [endTime, setEndTime] = useState("24:00");
  const [sex, setSex] = useState("ALL");
  const [matchStatus, setMatchStatus] = useState("FULL");

  const [state, run] = useAsync(getMatchList);
  const dateList = getDateList();
  const timeList = getTimeList();

  useEffect(() => {
    const startDateTime = getAPIDateStringFromDateString(
      startDate + " " + startTime
    );
    const endDateTime = getAPIDateStringFromDateString(
      endDate + " " + endTime + ":00"
    );
    console.log(startDateTime, endDateTime);
    run({ startDateTime, endDateTime, sex, matchStatus });
  }, []);

  const filterHandler = async () => {
    const startDateTime = getAPIDateStringFromDateString(
      startDate + " " + startTime
    );
    const endDateTime = getAPIDateStringFromDateString(endDate + " " + endTime);
    await run({ startDateTime, endDateTime, sex, matchStatus });
  };

  const handleStartDate = (e) => {
    console.log(e);
    setStartDate(e.target.value);
  };
  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };
  const handleStartTime = (e) => {
    setStartTime(e.target.value);
  };
  const handleEndTime = (e) => {
    setEndTime(e.target.value);
  };
  const handleMatchStatus = (e) => {
    setMatchStatus(e.target.value);
  };
  const handleSex = (e) => {
    setSex(e.target.value);
  };

  return (
    <div>
      <h1> 풋살 용병 게시판 </h1>
      <label className="filtercls">시작</label>
      <select id="start_date" className="filtercls" onChange={handleStartDate}>
        {dateList.map((date) => {
          return (
            <option value={getDateFromDateString(date)}>
              {getDateFromDateString(date)}
            </option>
          );
        })}
      </select>
      <select
        id="start_time"
        defaultValue={hourToTimeString(
          getHourFromDateString(currentDateString)
        )}
        className="filtercls"
        onChange={handleStartTime}
      >
        {timeList.map((time) => {
          return <option value={time}>{time}</option>;
        })}
      </select>
      <label className="filtercls">끝</label>
      <select id="end_date" className="filtercls" onChange={handleEndDate}>
        {dateList.map((date) => {
          return (
            <option value={getDateFromDateString(date)}>
              {getDateFromDateString(date)}
            </option>
          );
        })}
      </select>
      <select
        id="end_time"
        defaultValue={"24:00"}
        className="filtercls"
        onChange={handleEndTime}
      >
        {timeList.map((time) => {
          return <option value={time}>{time}</option>;
        })}
      </select>
      <label className="filtercls">성별</label>
      <select
        id="type"
        className="filtercls"
        defaultValue={"ALL"}
        onChange={handleSex}
      >
        <option value={"MAN"}>남성</option>
        <option value={"WOMAN"}>여성</option>
        <option value={"BOTH"}>남녀</option>
        <option value={"ALL"}>모두</option>
      </select>
      <label className="filtercls">상태</label>
      <select
        id="status"
        className="filtercls"
        defaultValue={"FULL"}
        onChange={handleMatchStatus}
        value={matchStatus}
      >
        <option value={"FULL"}>신청가능</option>
        <option value={"ALL"}>모두</option>
      </select>
      <button id="search_btn" className="filtercls" onClick={filterHandler}>
        검색
      </button>

      <MatchContianer
        loading={state.loading}
        error={state.error}
        data={state.data}
      ></MatchContianer>
    </div>
  );
};

export default HomePage;
