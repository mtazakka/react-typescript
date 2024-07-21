import React, { useState, useEffect } from "react";
import {
  Line,
  Pie,
  PieConfig,
  Bar,
  BarConfig,
  ColumnConfig,
  Column,
  Rose,
  RoseConfig,
  Gauge,
  GaugeConfig,
  LineConfig,
} from "@ant-design/plots";

const BarColData = [
  {
    instrument: "drums",
    value: 5,
    type: "boys",
  },
  {
    instrument: "bass",
    value: 9,
    type: "boys",
  },
  {
    instrument: "ukelele",
    value: 2,
    type: "boys",
  },
  {
    instrument: "cymbals",
    value: 3,
    type: "boys",
  },
  {
    instrument: "lead",
    value: 7,
    type: "boys",
  },
  {
    instrument: "keyboard",
    value: 3,
    type: "boys",
  },
  {
    instrument: "violin",
    value: 4,
    type: "boys",
  },
  {
    instrument: "cello",
    value: 6,
    type: "boys",
  },
  {
    instrument: "accordion",
    value: 4,
    type: "boys",
  },
  {
    instrument: "drums",
    value: 9,
    type: "girls",
  },
  {
    instrument: "bass",
    value: 3,
    type: "girls",
  },
  {
    instrument: "ukelele",
    value: 6,
    type: "girls",
  },
  {
    instrument: "cymbals",
    value: 7,
    type: "girls",
  },
  {
    instrument: "lead",
    value: 4.9,
    type: "girls",
  },
  {
    instrument: "keyboard",
    value: 6,
    type: "girls",
  },
  {
    instrument: "violin",
    value: 7,
    type: "girls",
  },
  {
    instrument: "cello",
    value: 9,
    type: "girls",
  },
  {
    instrument: "accordion",
    value: 13,
    type: "girls",
  },
];

export const LineChartsSample = () => {
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ];

  const config = {
    data,
    height: 300,
    xField: "year",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
  };
  return <Line {...config} />;
};

export const DonutChartsSample = () => {
  type DataType = "new" | "evaluating" | "ongoing" | "finished" | "archived";

  interface PieChartData {
    type: DataType;
    value: number;
  }

  const pieChartData: PieChartData[] = [
    {
      type: "new",
      value: 40,
    },
    {
      type: "evaluating",
      value: 25,
    },
    {
      type: "ongoing",
      value: 22,
    },
    {
      type: "finished",
      value: 22,
    },
    {
      type: "archived",
      value: 10,
    },
  ];

  const config: PieConfig = {
    appendPadding: 5,
    data: pieChartData,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.5,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 15,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
      title: false as const,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        formatter: function formatter() {
          return `Total\n134`;
        },
      },
    },
  };
  return <Pie {...config} />;
};

export const PieChartsSample = () => {
  const data = [
    {
      type: "Car",
      value: 27,
    },
    {
      type: "Lorry",
      value: 25,
    },
    {
      type: "Van",
      value: 18,
    },
    {
      type: "Motorcycle",
      value: 15,
    },
    {
      type: "Bus",
      value: 10,
    },
    {
      type: "Airplane",
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.75,
    label: {
      type: "spider",
      labelHeight: 28,
      content: "{name}\n{percentage}",
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

export const BarChartsSample = () => {
  const config: BarConfig = {
    data: BarColData.reverse(),
    isStack: true,
    xField: "value",
    yField: "instrument",
    seriesField: "type",
  };
  return <Bar {...config} />;
};

export const ColumnChartsSample = () => {
  const config: ColumnConfig = {
    data: BarColData.reverse(),
    isStack: true,
    xField: "instrument",
    yField: "value",
    seriesField: "type",
  };

  return <Column {...config} />;
};

export const RoseChartsSample = () => {
  const data = [
    {
      type: "Football",
      value: 27,
    },
    {
      type: "Baseball",
      value: 25,
    },
    {
      type: "Basketball",
      value: 18,
    },
    {
      type: "Tennis",
      value: 15,
    },
    {
      type: "Badminton",
      value: 10,
    },
    {
      type: "Kyrin",
      value: 5,
    },
  ];
  const config: RoseConfig = {
    data,
    xField: "type",
    yField: "value",
    seriesField: "type",
    radius: 0.9,
    legend: {
      position: "bottom",
    },
  };
  return <Rose {...config} />;
};

export const GaugeChartsSample = () => {
  const config: GaugeConfig = {
    percent: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ["#F4664A", "#FAAD14", "#30BF78"],
    },
    indicator: {
      pointer: {
        style: {
          stroke: "#D0D0D0",
        },
      },
      pin: {
        style: {
          stroke: "#D0D0D0",
        },
      },
    },
    statistic: {
      content: {
        style: {
          fontSize: "36px",
          lineHeight: "36px",
        },
      },
    },
  };
  return <Gauge {...config} />;
};

export const MultiLineChartsSample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config: LineConfig = {
    data,
    height: 300,
    xField: "year",
    yField: "value",
    seriesField: "category",
    xAxis: {
      type: "time",
    },
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v: any) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  };

  return <Line {...config} />;
};
