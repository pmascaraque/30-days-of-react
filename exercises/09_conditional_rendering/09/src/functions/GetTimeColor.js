const getTimeColor = () => {
  const hour = new Date().getHours();

  if (hour < 12 && hour >= 6) return "blue";
  if (hour < 18 && hour >= 12) return "brown";
  return "black";
};
export default getTimeColor();