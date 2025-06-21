import { formatter } from "../util/investment";
import { calculateInvestmentResults } from "../util/investment";
import { useState } from "react";

export default function Result({userValue}) {
    const results = calculateInvestmentResults(userValue);
    console.log(results);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>
                        Year
                    </th>
                    <th>
                        Investment Value
                    </th>
                    <th>
                        Interest (Year)
                    </th>
                    <th>
                        Total Interest
                    </th>
                    <th>
                        Invested Capital
                    </th>
                </tr>
            </thead>
            <tbody>
                {results.map((result) => { 
                    const totalInterest = result.valueEndOfYear - result.annualInvestment*result.year - userValue.initialInvestment;
                    const totalAmountInvested = result.valueEndOfYear - totalInterest;   
                    return(<tr key="result.year">
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>);
                    }
                )}
            </tbody>
        </table>
    );
}