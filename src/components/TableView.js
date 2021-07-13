import React, { useEffect } from "react";

const TableView = ({ data, type }) => {
  useEffect(() => {
    console.log("Table View end");
  }, [data]);

  const populateHeader = () => {
    if (type === "list" && data) {
      return (
        <thead className="table-thead">
          <tr>
            <th style={{ width: "5rem" }}>Post Id</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
      );
    } else if (type === "performance" && data) {
      return (
        <thead className="table-thead">
          <tr>
            <th>Id</th>
            <th>View Name</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Time Taken in sec</th>
          </tr>
        </thead>
      );
    }
  };

  const populateData = () => {
    let num = 0;
    if (type === "list" && data)
      return (
        <tbody className="table-tbody">
          {data.map((comment) => {
            const body = comment.body.slice(0, 50) + "...";
            return (
              <tr key={comment.id}>
                <td>{comment.postId}</td>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{body}</td>
              </tr>
            );
          })}
        </tbody>
      );
    else if (type === "performance" && data) {
      return (
        <tbody className="table-tbody">
          {data.map((item) => {
            num++;
            return (
              <tr key={num}>
                <td>{num}</td>
                <td>{item.viewThatWasDisplayed}</td>
                <td>{item.startOfViewRender}</td>
                <td>{item.endOfViewRender}</td>
                <td>{item.timeTaken}</td>
              </tr>
            );
          })}
        </tbody>
      );
    }
  };

  console.log("TableView start");
  return (
    <table className="table">
      {populateHeader()}
      {populateData()}
    </table>
  );
};

export default TableView;
