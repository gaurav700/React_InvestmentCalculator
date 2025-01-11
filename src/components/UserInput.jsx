import React from "react";
import { useState } from "react";
export default function UserInput({ userInput, handleChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <span>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </span>
        <span>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
          />
        </span>
      </div>
      <br />
      <div className="input-group">
        <span>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </span>
        <span>
          <label>DURATION</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </span>
      </div>
    </div>
  );
}
