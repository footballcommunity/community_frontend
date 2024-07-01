import axios, { AxiosError } from "axios";
import BASE_URL from "../config";
const getMatchList = async ({
  startDateTime,
  endDateTime,
  sex,
  matchStatus,
}) => {
  const response = await axios.get(
    `${BASE_URL}/match?startTime=${startDateTime}&endTime=${endDateTime}&sex=${sex}&matchStatus=${matchStatus}`
  );
  console.log(
    `${BASE_URL}/match?startTime=${startDateTime}&endTime=${endDateTime}&sex=${sex}&matchStatus=${matchStatus}`
  );
  console.log(response);
  return response.data;
};

export { getMatchList };
