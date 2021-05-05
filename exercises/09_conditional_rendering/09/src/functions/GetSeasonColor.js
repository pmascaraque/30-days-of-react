const getSeasonColor = () => {
  switch (new Date().getMonth()) {
    case 0:
    case 1:
    case 2:
      return "white";
    case 3:
    case 4:
    case 5:
      return "green";
    case 6:
    case 7:
    case 8:
      return "yellow";
    case 9:
    case 10:
    case 11:
      return "brown";
    default:
      return "orange";
  }
};
export default getSeasonColor();