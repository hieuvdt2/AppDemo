const labelsLineChart = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "Junly",
];

export const dataChart = {
  labels: labelsLineChart,
  datasets: [
    {
      backgroundColor: "#00DFA2",
      borderColor: "rgb(255, 99, 132)",
      data: new Array(7).fill(0).map((o) => Math.floor(Math.random() * 1000)),
    },
    {
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "#B2A4FF",
      data: new Array(7).fill(0).map((o) => Math.floor(Math.random() * 1000)),
    },
    {
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "#FF0060",
      data: new Array(7).fill(0).map((o) => Math.floor(Math.random() * 1000)),
    },
  ],
};
