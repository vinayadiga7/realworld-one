import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import NavBar from "./NavBar";
import TableView from "./TableView";
import ListView from "./ListView";
import GridView from "./GridView";
import CompanyLogo from "./CompanyLogo";

const useStyles = makeStyles((theme) => ({
  formControl: {
    "& > .MuiFormLabel-root": {
      fontSize: "1.4rem",
      fontWeight: 700,
    },

    "& > .MuiInputBase-root": {
      fontSize: "1.8rem",
      fontWeight: 400,
    },
  },
}));

const Performance = () => {
  const [selectedView, setSelectedView] = useState("TableView Performance");
  const [data, setData] = useState([]);
  const classes = useStyles();

  const onChangeHandler = (event) => {
    const target = event.target;
    setSelectedView(target.value);
  };

  const displayListViews = () => {
    if (selectedView === "TableView Performance")
      return <TableView data={data} type="performance" />;
    else if (selectedView === "ListView Performance")
      return <ListView data={data} type="performance" />;
    else return <GridView data={data} type="performance" />;
  };

  useEffect(() => {
    const performanceData = JSON.parse(
      localStorage.getItem("performanceOfRealWorldOne")
    );
    setData(performanceData);
  }, [selectedView]);

  return (
    <div>
      <NavBar />
      <CompanyLogo />
      <div className="performance">
        <div className="performance__view">
          <FormControl className={classes.formControl}>
            <InputLabel> Performance</InputLabel>
            <Select value={selectedView} onChange={onChangeHandler}>
              <MenuItem value="TableView Performance">
                TableView Performance
              </MenuItem>
              <MenuItem value="ListView Performance">
                ListView Performance
              </MenuItem>
              <MenuItem value="GridView Performance">
                GridView Performance
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <article className="performance__data">{displayListViews()}</article>
      </div>
    </div>
  );
};

export default Performance;
