import React, { useState } from "react";
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpg'
import user3 from './images/user3.jpeg'
import user4 from './images/user4.jpg'

const Transaction = () => {
  const [info, setInfo] = useState([
    { id: 1, img_Url: user1, Name: "mercy joe", date: "22 Aug 2023", time: "06:23PM", Transactiontype: "Received", amount: "+$13.00" },
    { id: 2, img_Url: user2, Name: "champ", date: "21 Aug 2023", time: "05:20PM", Transactiontype: "Outgoing", amount: "-$09.00" },
    { id: 3, img_Url: user3, Name: "john", date: "15 May 2023", time: "01:03PM", Transactiontype: "Received", amount: "+$20.00" },
    { id: 4, img_Url: user4, Name: "cristy", date: "21 Mar 2023", time: "03:03PM", Transactiontype: "Outgoing", amount: "-$13.00" },
   
  ]);

  return (
    <>
      <div className="container-fluid" id="container">
        <div className="row">
          <div className="col-12">
            <h2 className="h2 py-2">Last Transactions</h2>
            {info.map((transaction) => (
              <div key={transaction.id} className="transaction-item my-4">
                <div>
                  <img src={transaction.img_Url} alt="pavithra.jpg" className="img-fluid" id="img" />
                </div>
                <div>
                  <h2 className="name">{transaction.Name}</h2>
                  <p className="date_time">
                    {transaction.date}.{transaction.time}
                  </p>
                </div>
                <div>
                  <h2 className={`amount ${transaction.Transactiontype === "Outgoing" ? "outgoing" : ""}`}>
                    {transaction.amount}
                  </h2>
                  <p className="type">
                    {transaction.Transactiontype}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;