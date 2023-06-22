import React from "react";

import { useAppContext } from "../../services/context/AppContext";
import { BarChart } from "../../ui";

const Revenue = () => {
  const { state, dispatch } = useAppContext();
  return <BarChart data={state?.dashboard?.dataChart}></BarChart>;
};

export default Revenue;
