import React from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { Content } from "../components/index";
import { Button, DropDownDatePicker, Input } from "../ui";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Content content={`Dashboard`}>
      <h2>Dashboard</h2>
      <div className="flex my-5">
        <Button onClick={() => navigate(`/dashboard/subscription`)}>
          Subcription
        </Button>
        <Button onClick={() => navigate(`/dashboard/revenue`)}>Revenue</Button>
      </div>
      <Outlet></Outlet>
    </Content>
  );
};

export default Dashboard;
