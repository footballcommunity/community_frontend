import axios, { AxiosError } from "axios";
import { getAPIDateStringFromDateString } from "../utils/dateUtils";

const getMatchList = async ({
  startDateTime,
  endDateTime,
  sex,
  matchStatus,
}) => {
  const response = await axios.get(
    `http://52.78.129.190:8080/match?startTime=${startDateTime}&endTime=${endDateTime}&sex=${sex}&matchStatus=${matchStatus}`
  );
  console.log(
    `http://52.78.129.190:8080/match?startTime=${startDateTime}&endTime=${endDateTime}&sex=${sex}&matchStatus=${matchStatus}`
  );
  console.log(response);
  return response.data;
};

export { getMatchList };
