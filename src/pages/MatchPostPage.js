/* BoardList.js */
import React, { useContext, useEffect, useReducer, useState } from "react";
import "../css/MatchPostPage.css";
import { useNavigate } from "react-router-dom";
import { postArticle } from "../api/board";
import {
  getDateList,
  getTimeList,
  getDateFromDateString,
} from "../utils/dateUtils";

const MatchPostPage = () => {
  const dateList = getDateList();
  const timeList = getTimeList();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [sex, setSex] = useState("MAN");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [startDate, setStartDate] = useState(
    getDateFromDateString(dateList[0])
  );
  const [startTime, setStartTime] = useState("00:00");
  const [endtDate, setEndDate] = useState(getDateFromDateString(dateList[0]));
  const [endTime, setEndTime] = useState("00:00");
  const [info, setInfo] = useState("");

  const submitHandler = async (e) => {
    console.log(
      title,
      sex,
      address,
      price,
      startDate,
      startTime,
      endtDate,
      endTime,
      info
    );
  };
  return (
    <div className="container">
      <h1>매치 등록</h1>
      <div>
        <label>제목</label>
        <div>
          <input
            id="title_input"
            className="rndcls"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>
      </div>
      <div>
        <label>성별</label>
        <div>
          <select
            id="select_sex"
            className="rndcls"
            onChange={(e) => {
              setSex(e.target.value);
            }}
          >
            <option value={"MAN"}>남성</option>
            <option value={"WOMAN"}>여성</option>
            <option value={"BOTH"}>남녀모두</option>
          </select>
        </div>
      </div>
      <div>
        <label>주소</label>
        <div>
          <input
            id="address_inputt"
            className="rndcls"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            required
          />
        </div>
      </div>
      <div>
        <label>가격</label>
        <div>
          <input
            id="price_input"
            className="rndcls"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            required
          />
        </div>
      </div>
      <div>
        <label>시작 시간</label>
        <div>
          <select
            id="start_date"
            className="filtercls"
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          >
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
            className="filtercls"
            onChange={(e) => {
              setStartTime(e.target.value);
            }}
          >
            {timeList.map((time) => {
              return <option value={time}>{time}</option>;
            })}
          </select>
        </div>
        <label>종료 시간</label>
        <div>
          <select
            id="end_date"
            className="filtercls"
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          >
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
            className="filtercls"
            onChange={(e) => {
              setEndTime(e.target.value);
            }}
          >
            {timeList.map((time) => {
              return <option value={time}>{time}</option>;
            })}
          </select>
        </div>
      </div>
      <div>
        <label>정보</label>
        <div>
          <textarea
            id="info_input"
            className="rndcls"
            rows="10"
            onChange={(e) => {
              setInfo(e.target.value);
            }}
            required
          ></textarea>
        </div>
      </div>
      <div>
        <div id="button_container">
          <button onClick={submitHandler} id="submit-button">
            저장
          </button>
          <button
            onClick={(e) => {
              navigate("/");
            }}
            type="button"
            id="cancel-button"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchPostPage;
