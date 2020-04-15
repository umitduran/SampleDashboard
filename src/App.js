import React from "react";
import "./App.css";
import OrderCountByCity from "./components/OrderCountByCity/index";
import TotalCategoryOrderCount from "./components/TotalCategoryOrderCount/index";
import TopCategoryBar from "./components/TopCategoryPieChart/index";
import TotalOrderCount from "./components/TotalOrderCount/index";
import ProfitBar from "./components/ProfitBar/index";
import GeneralTotalCount from "./components/GeneralTotalCount/index";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    backgroundColor: "#b3d9ff",
    margin: 20
  },
  GeneralTotalCount: {
    backgroundColor: "#e6ffff",
    textAlign: "center"
  },
  OrderCountByCity: {
    backgroundColor: "#ffe6e6",
    textAlign: "center"
  },
  TotalCategoryOrderCount: {
    backgroundColor: "#ffffcc",
    textAlign: "center"
  },
  TopCategoryBar: {
    backgroundColor: "#e6ffe6",
    textAlign: "center"
  },
  TotalOrderCount: {
    backgroundColor: "#e6ffff",
    textAlign: "center"
  },
  ProfitBar: {
    backgroundColor: "#cce6ff",
    textAlign: "center"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="{classes.root}">
      <Grid container>
        <Grid className={classes.header} item xs={12} sm={12}>
          <header>Veloxity Dashboard</header>
        </Grid>
        <Grid
          className={classes.GeneralTotalCount}
          item
          xs={10}
          sm={12}
          md={6}
          lg={4}
        >
          <h1>General Total Count</h1>
          <GeneralTotalCount />
        </Grid>
        <Grid
          className={classes.OrderCountByCity}
          item
          xs={10}
          sm={12}
          md={6}
          lg={4}
        >
          <h1>Order Count by City</h1>
          <OrderCountByCity />
        </Grid>
        <Grid
          className={classes.TotalCategoryOrderCount}
          item
          xs={10}
          sm={12}
          md={6}
          lg={4}
        >
          <h1>Total Category Count</h1>
          <TotalCategoryOrderCount />
        </Grid>
        <Grid
          className={classes.TopCategoryBar}
          item
          xs={10}
          sm={12}
          md={6}
          lg={4}
        >
          <h1>Top Category</h1>
          <TopCategoryBar />
        </Grid>
        <Grid
          className={classes.TotalOrderCount}
          item
          xs={10}
          sm={12}
          md={6}
          lg={4}
        >
          <h1>Total Order Count</h1>
          <TotalOrderCount />
        </Grid>
        <Grid className={classes.ProfitBar} item xs={10} sm={12} md={6} lg={4}>
          <h1>Product Profit</h1>
          <ProfitBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
