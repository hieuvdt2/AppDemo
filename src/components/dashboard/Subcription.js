import React from "react";

import { useAppContext } from "../../services/context/AppContext";
import { LineChart } from "../../ui";

const Subcription = () => {
  const { state, dispatch } = useAppContext();
  return <LineChart data={state?.dashboard?.dataChart}></LineChart>;
};

export default Subcription;
