import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useState } from "react";

import NavBar from "./NavBar";
import TableView from "./TableView";
import ListView from "./ListView";
import GridView from "./GridView";
import CompanyLogo from "./CompanyLogo";

const List = () => {
  const [comments, setComments] = useState();
  const [selectedView, setSelectedView] = useState("None");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const onChangeHandler = (e) => {
    let target = e.target;
    setSelectedView(target.value);
  };

  const onClickHandler = () => {
    setStartDate(new Date());
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments([...data]));
  };

  const displaySelectedView = () => {
    if (selectedView === "TableView")
      return <TableView data={comments} type="list" />;
    else if (selectedView === "ListView")
      return <ListView data={comments} type="list" />;
    else if (selectedView === "GridView")
      return <GridView data={comments} type="list" />;
    else return "There is no data to display";
  };

  useEffect(() => {
    if (comments) {
      console.log("List Parent end");
      new Promise((res, rej) => {
        setEndDate(new Date());
        res();
      }).then(() => {
        const performanceObject = {
          viewThatWasDisplayed: selectedView,
          startOfViewRender: startDate,
          endOfViewRender: endDate,
          timeTaken: (endDate - startDate) / 1000,
        };
        let performanceArray = localStorage.getItem("performanceOfRealWorldOne")
          ? JSON.parse(localStorage.getItem("performanceOfRealWorldOne"))
          : [];

        localStorage.setItem(
          "performanceOfRealWorldOne",
          JSON.stringify([...performanceArray, performanceObject])
        );
      });
    }
    //else {
    //   performanceArray.push(performanceObject);
    //   localStorage.setItem(
    //     "performanceOfRealWorldOne",
    //     JSON.stringify(performanceArray)
    //   );
    // }
  }, [comments]);

  console.log("List Parent start");
  return (
    <div>
      {" "}
      <NavBar />
      <CompanyLogo />
      <main className="list-main">
        <section>
          <select value={selectedView} onChange={onChangeHandler}>
            <option value="None">None</option>
            <option value="TableView">Table View</option>
            <option value="ListView">List View</option>
            <option value="GridView">Grid View</option>
          </select>
          <Button onClick={onClickHandler} color="primary" variant="contained">
            {" "}
            Get the list of comments{" "}
          </Button>
        </section>
        <article>{displaySelectedView()}</article>
      </main>
    </div>
  );
};

export default List;
