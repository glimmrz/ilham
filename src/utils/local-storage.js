import { useEffect, useState } from "react";

export function setLocalData(dataName, dataValue = "") {
  if (localStorage) {
    localStorage.setItem(dataName, JSON.stringify(dataValue));
  }
}

export function useLocalData(dataName) {
  const [data, setData] = useState("");
  useEffect(() => {
    if (localStorage) {
      const data = localStorage.getItem(dataName);

      setData(JSON.parse(data));
    }
  }, [dataName]);

  return data;
}
