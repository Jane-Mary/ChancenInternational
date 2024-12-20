import React from "react";
import useTopbar from "../../re-components/Student/useTopbar";
import CustomCard from "../../re-components/Student/card";
import "../../style/studentstyles/dashboard.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  useTopbar()

  return (
    <>
      <div className="main" id="main">
        <div className="head">
          <h1>  Welcome User </h1>
         <p> Total Overview  </p> 
        </div>
        <div className="all">
          <CustomCard className="two">
            <h1>REPAYMENT</h1>
          <div className="content">
           <div style={{ width: "10vw", height: "10vh" }}>
              <CircularProgressbar value={25} text="25%"/>
            </div>
            <div className="text">
              <h2>Total Number Of Installments = 8</h2>
              <h2>Number Of Installments Done = 2</h2>
              <h2>Number Of Installments Left = 6</h2>
            </div>
          </div>

          </CustomCard>
          <CustomCard className="one">
            <h1>TOTAL DEPT</h1>
            <p style={{ fontSize: "xx-large", fontWeight: "bolder" }}>
              Total Amount = 600,000 XAF
            </p>
            <div className="break">
              <p>Tuition Fees : 400,000 XAF</p>
              <p>Financial Aid : 100,000 XAF</p>
              <p>Interest = 20% Of (Tuition Fees + Financial Aid) </p>
            </div>
          </CustomCard>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
