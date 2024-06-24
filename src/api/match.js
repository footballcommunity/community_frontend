import axios, { AxiosError } from "axios";
import { getAPIDateStringFromDateString } from "../utils/dateUtils";

const getMatchList = async ({ selectedDate, selectedPage }) => {
  console.log("currentTime:", getAPIDateStringFromDateString(selectedDate));
  const response = await axios.get(
    `http://52.78.129.190:8080/match?currentTime=${getAPIDateStringFromDateString(
      selectedDate
    )}&page=${selectedPage}`
  );
  console.log(response);
  return response.data;
};

export { getMatchList };
