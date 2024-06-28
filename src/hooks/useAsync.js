import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useAsync(callback) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = async (params) => {
    dispatch({ type: "LOADING" });
    var data;
    try {
      data = await callback(params);
      dispatch({ type: "SUCCESS", data });
      return data;
    } catch (e) {
      console.log(e);
      if (e.response) {
        dispatch({ type: "ERROR", error: e.response.data });
      } else {
        dispatch({ type: "ERROR", error: e });
      }
    }
  };

  return [state, fetchData];
}

export default useAsync;
