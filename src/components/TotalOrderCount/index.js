// Class componentde koydum
import React from "react";
//import svg from "react-svg";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory";
export default class totalOrderCount extends React.Component {
  constructor() {
    super();
    this.state = {
      percent: 0,
      data: this.getData(0)
    };
  }

  componentDidMount() {
    let percent = 5;
    this.setStateInterval = window.setInterval(() => {
      percent = Math.random() * (10000 - 1000) + 100;
      //percent = percent > 100 ? 0 : percent;
      this.setState({
        percent,
        data: this.getData(percent)
      });
    }, 10000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData(percent) {
    return [
      { x: 1, y: percent },
      { x: 2, y: 10000 - percent }
    ];
  }

  getColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <svg viewBox="0 0 400 400" width="50%" height="50%">
        <VictoryPie
          standalone={false}
          animate={{ duration: 1000 }}
          data={this.state.data}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null}
          style={{
            data: {
              fill: ({ datum }) => {
                const color = this.getColor();
                return datum.x === 1 ? color : "transparent";
              }
            }
          }}
        />
        <VictoryAnimation duration={1000} data={this.state}>
          {newProps => {
            return (
              <VictoryLabel
                textAnchor="middle"
                verticalAnchor="middle"
                x={200}
                y={200}
                text={`${Math.round(newProps.percent)}`}
                style={{ fontSize: 45 }}
              />
            );
          }}
        </VictoryAnimation>
      </svg>
    );
  }
}
