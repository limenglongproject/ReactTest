import React from "react";

function Company(props) {
  return <p>{props.company}</p>;
}

function Office(props) {
  return <p>{props.office}</p>;
}

function MyFooter(props) {
  return (
    <div>
      我是Footer
      <Company company={props.company} />
      <Office office={props.office} />
    </div>
  );
}

export default MyFooter;
