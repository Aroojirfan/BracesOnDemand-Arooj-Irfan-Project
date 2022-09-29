export const parseQueryString=(url)=> {
  const queryString = url.replace(/.*\?/, "");

  if (queryString === url || !queryString) {
    return null;
  }
  const urlParams = new URLSearchParams(queryString);
  const result = {};

  urlParams.forEach((val, key) => {
    if (result.hasOwnProperty(key)) {
      result[key] = [result[key], val];
    } else {
      result[key] = val;
    }
  });

  return result;
}