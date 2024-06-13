import React from "react";
import "./Dashboard.css";
import Categories from "./Categories";
import growthIcon from "../../assets/increase.png";
import upIcon from "../../assets/upIcon.png";
import downIcon from "../../assets/downIcon.png";
const sampleData = [
  {
    id: 1,
    name: "Based on premium and",
    calmarRatio: 0.84,
    overallProfit: 132767.1,
    avgDailyProfit: 108.38,
    winPercent: 0.6,
    price: "-",
    action: "View",
    icon: upIcon,
  },
  {
    id: 2,
    name: "strategy_name",
    calmarRatio: 0.69,
    overallProfit: 208500.31,
    avgDailyProfit: 140.5,
    winPercent: 0.35,
    price: "-",
    action: "View",
    icon: upIcon,
  },
  {
    id: 3,
    name: "Wait and trade_Save",
    calmarRatio: 0.67,
    overallProfit: 70823.17,
    avgDailyProfit: 64.33,
    winPercent: 0.6,
    price: "-",
    action: "View",
    icon: upIcon,
  },
  {
    id: 4,
    name: "iron condor",
    calmarRatio: 0.64,
    overallProfit: 88978.5,
    avgDailyProfit: 69.35,
    winPercent: 0.62,
    price: "-",
    action: "View",
    icon: upIcon,
  },
  {
    id: 5,
    name: "strategy_name",
    calmarRatio: 0.59,
    overallProfit: 157335.75,
    avgDailyProfit: 128.75,
    winPercent: 0.62,
    price: "-",
    action: "View",
    icon: upIcon,
  },
  {
    id: 6,
    name: "strategy_name",
    calmarRatio: 0.59,
    overallProfit: 157335.75,
    avgDailyProfit: 128.75,
    winPercent: 0.62,
    price: "-",
    action: "View",
    icon: upIcon,
  },
  {
    id: 7,
    name: "Based on premium wit",
    calmarRatio: 0.57,
    overallProfit: 63852.65,
    avgDailyProfit: 87.23,
    winPercent: 0.48,
    price: "-",
    action: "View",
    icon: upIcon,
  },
  {
    id: 8,
    name: "strategy_name",
    calmarRatio: 0.53,
    overallProfit: 194687.52,
    avgDailyProfit: 131.19,
    winPercent: 0.35,
    price: "-",
    action: "View",
    icon: downIcon,
  },
  {
    id: 9,
    name: "strategy_name",
    calmarRatio: 0.44,
    overallProfit: 74852.97,
    avgDailyProfit: 60.22,
    winPercent: 0.57,
    price: 500,
    action: "Buy",
    icon: downIcon,
  },
  {
    id: 10,
    name: "Selling with re entr",
    calmarRatio: 0.31,
    overallProfit: 127095.7,
    avgDailyProfit: 106.36,
    winPercent: 0.61,
    price: "-",
    action: "View",
    icon: downIcon,
  },
];

const Leaderboard = () => {
  return (
  <>
     <Categories/>
     <h2 className="flex text-5xl font-raleway items-center justify-center font-medium text-sky-950 "style={{ marginTop: "30px", marginBottom: "30px" }}>
          LeaderBoard
        </h2>
      <div className="leaderboard">
        <div className="basic">
          <p id="p1">Basic Backtest</p>
          <p id="p2" style={{
    marginBottom: "12px"}}>
            Slippage:
            <span>
              <select>
                <option>0%</option>
                <option>0.5%</option>
                <option>1%</option>
              </select>
            </span>
          </p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>state</th>
              <th>Name</th>
              <th>Calmar Ratio</th>
              <th>Overall Profit</th>
              <th>Avg. Daily Profit</th>
              <th>Win % (Day)</th>
              <th>Price (Rs)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <img
                  src={user.icon}
                  alt="Icon"
                  className="icon blink"
                  style={{
                    width: "16px",
                    marginRight: "8px",
                    marginTop: "28px",
                  }}
                />
                <td>{user.name}</td>
                <td>
                  <img
                    src={growthIcon}
                    alt="growth icon"
                    style={{ width: "16px", marginRight: "8px" }}
                  />
                  {user.calmarRatio}
                </td>
                <td>{user.overallProfit.toFixed(2)}</td>
                <td>{user.avgDailyProfit.toFixed(2)}</td>
                <td>{user.winPercent}</td>
                <td>{user.price}</td>
                <td>
                  <button
                    className={
                      user.action === "Buy" ? "buy-button" : "view-button"
                    }
                  >
                    {user.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Leaderboard;
