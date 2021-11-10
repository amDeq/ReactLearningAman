import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car insurance";
  // const expenseAmount = 267.9;
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();

  const clickHandler = () => {
    // console.log("Expense items");
    setTitle("Updated!!!");
    console.log(title);
  };
  return (
    <>
      <Card className="expense-item">
        {/* <div>{props.date.toISOString()}</div> */}
        {/* <div>
          <div>{month}</div>
          <div>{year}</div>
          <div>{day}</div>
        </div> */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description ">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
          <button onClick={clickHandler}>Change Title</button>
        </div>
      </Card>
    </>
  );
}
export default ExpenseItem;
// March 28th 2021
