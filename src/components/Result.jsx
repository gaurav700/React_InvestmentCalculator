import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ userInput }) {
  const resultData = calculateInvestmentResults(userInput);

  if (!resultData || resultData.length === 0) {
    return (
      <p className="center">No data available. Please provide valid input.</p>
    );
  }

  const initialInvestedAmount =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((item) => {
          console.log(item);
          const totalIntrest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestedAmount;
          const totalAmountInvested = item.valueEndOfYear - totalIntrest;
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
