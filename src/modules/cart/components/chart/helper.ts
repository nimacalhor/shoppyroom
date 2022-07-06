const getRandomDate = function () {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  return new Date(timestamp);
};
export const chartData = [
  { name: getRandomDate().toUTCString(), uv: 400, pv: 2400, amt: 2400 },
  { name: getRandomDate().toUTCString(), uv: 200, pv: 2400, amt: 2400 },
  { name: getRandomDate().toUTCString(), uv: 300, pv: 7000, amt: 2400 },
  { name: getRandomDate().toUTCString(), uv: 100, pv: 2400, amt: 2400 },
  { name: getRandomDate().toUTCString(), uv: 100, pv: 2400, amt: 2400 },
  { name: getRandomDate().toUTCString(), uv: 200, pv: 2400, amt: 2400 },
];
