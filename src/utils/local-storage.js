export function setLocalData(dataName, dataValue = "") {
  if (window.localStorage) {
    localStorage.setItem(dataName, JSON.stringify(dataValue));
  }
}

export function getLocalData(dataName) {
  if (typeof window !== "undefined" && window.localStorage) {
    const data = localStorage.getItem(dataName);
    return data ? JSON.parse(data) : null;
  }
  return null;
}
