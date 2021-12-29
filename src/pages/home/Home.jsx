import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import styled from "styled-components";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "../../app.css";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <FeaturedInfo />
          <Chart
            data={userData}
            title="User Analytics"
            grid
            dataKey="Active User"
          />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
