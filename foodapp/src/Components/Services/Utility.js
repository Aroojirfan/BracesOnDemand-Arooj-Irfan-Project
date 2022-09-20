export const getData = (searchItem, data) => {
  const filtered = data.Restaurant?.filter((curElem) => {
    if (searchItem === "") {
      return curElem;
    } else if (
      curElem.name
        .toLowerCase()
        .includes(searchItem.toString().toLowerCase()) ||
      curElem.description
        .toLowerCase()
        .includes(searchItem.toString().toLowerCase())
    ) {
      return curElem;
    }
  });
  return filtered;
};
