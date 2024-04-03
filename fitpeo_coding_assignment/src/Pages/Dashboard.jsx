import React from "react";
import "../App.css";
import SideNavigation from "../Components/SideNavigation";
import { Heading, Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import DashboardInfoCards from "../Components/DashboardInfoCards";
import PieChartGraph from "../Components/PieChartGraph";
import ProductSellTable from "../Components/ProductSellTable";

export default function Dashboard() {
  const dashboardCardsDetails = [
    {
      image: "faCircleDollarToSlot",
      type: "Earning",
      dollars: "$122K",
      hike: "↑ 12.8%",
      textColor: "green",
      backgroundColor: "#dcfeed",
    },
    {
      image: "faFileLines",
      type: "Orders",
      dollars: "$2.33K",
      hike: "↓ 2.8%",
      textColor: "red",
      backgroundColor: "#e7dbff",
    },
    {
      image: "faPiggyBank",
      type: "Balance",
      dollars: "$2.3K",
      hike: "↓ 2.8%",
      textColor: "red",
      backgroundColor: "#ccf2ff",
    },
    {
      image: "faBagShopping",
      type: "Total Sales",
      dollars: "$88K",
      hike: "↑ 11.8%",
      textColor: "green",
      backgroundColor: "#ffd0f0",
    },
  ];

  const barGraph = [
    { height: "140px", month: "Jan", backgroundColor: "#f2efff" },
    { height: "180px", month: "Feb", backgroundColor: "#f2efff" },
    { height: "130px", month: "Mar", backgroundColor: "#f2efff" },
    { height: "100px", month: "Apr", backgroundColor: "#f2efff" },
    { height: "160px", month: "May", backgroundColor: "#f2efff" },
    { height: "170px", month: "Jun", backgroundColor: "#f2efff" },
    { height: "145px", month: "Jul", backgroundColor: "#f2efff" },
    { height: "183px", month: "Aug", backgroundColor: "#5a32ea" },
    { height: "124px", month: "Sep", backgroundColor: "#f2efff" },
    { height: "172px", month: "Oct", backgroundColor: "#f2efff" },
    { height: "120px", month: "Nov", backgroundColor: "#f2efff" },
    { height: "141px", month: "Dec", backgroundColor: "#f2efff" },
  ];

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "240px", backgroundColor: "lightblue" }}>
        <SideNavigation />
      </div>
      <div
        style={{
          width: "100%",
          padding: "34px 44px 34px 44px",
          boxSizing: "border-box",
          marginLeft: "30px",
        }}
      >
        <div className="cardsDiv">
          <Heading fontSize="20px" fontWeight="600">
            Hello Samay 👋🏻,
          </Heading>
          <Input
            variant="outline"
            placeholder={`Search`}
            backgroundColor={"#fff"}
            width={"200px"}
            border={"none"}
            height={"36px"}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          {dashboardCardsDetails.map((e) => {
            return <DashboardInfoCards cardDetails={e} />;
          })}
        </div>

        <div style={{ display: "flex", marginTop:'30px', justifyContent:'space-between' }}>
          <div className="graph">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div>
                <Heading fontSize="20px">Overview</Heading>
                <Heading
                  fontSize="14px"
                  color="#b6b6b6"
                  marginTop={"6px"}
                  fontWeight={"normal"}
                >
                  Monthly Overview
                </Heading>
              </div>
              <Heading
                fontSize="14px"
                color="#8c8c8d"
                marginTop={"4px"}
                fontWeight={"normal"}
                cursor={"pointer"}
              >
                Quarterly <FontAwesomeIcon icon={faChevronDown} />
              </Heading>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "30px",
                alignItems: "flex-end",
              }}
            >
              {barGraph.map((e) => {
                return (
                  <div
                    className="bars"
                    style={{ marginRight: "14px", width: "8%" }}
                  >
                    <div
                      style={{
                        height: e.height,
                        backgroundColor: e.backgroundColor,
                        borderRadius: "10px",
                      }}
                      className="bar"
                    ></div>
                    <Heading
                      fontSize="14px"
                      color="black"
                      fontWeight={500}
                      textAlign={"center"}
                      marginTop={"14px"}
                    >
                      {e.month}
                    </Heading>
                  </div>
                );
              })}
            </div>
          </div>
          <PieChartGraph />
        </div>
          <ProductSellTable/>
      </div>
    </div>
  );
}
