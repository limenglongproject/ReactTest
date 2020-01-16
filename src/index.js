import React from "react";
import ReactDOM from "react-dom";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";

const myh1 = <h1>I am the big H1</h1>;
const user1 = {
  name: "limenglong",
  age: 30,
  salary: 13000
};

const footerSettings = {
  company: "DNVGL",
  office: "虹桥迎宾馆8号楼1楼"
};

const arr = ["Spring", "Summer", "Autom", "Winter"];
const nameArr = [];
arr.forEach((r, i) => {
  nameArr.push(<p key={i}>{r}</p>);
});
ReactDOM.render(
  <div>
    {myh1}
    <MyHeader user={user1} />
    <p> The following are the festival:</p>
    <ul>
      {/* {arr.map(r => (
        <li>{r}</li>
      ))} */}
      {nameArr}
    </ul>
    <p>------------------------分隔符------------------------</p>
    <MyFooter {...footerSettings} />
  </div>,
  document.getElementById("app")
);
