import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ displayBookings }) => {
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
   Z`;

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "green"];

  return (
    <div className="py-8 w-full max-w-[1200px] mx-auto h-[300px] md:h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart className="mx-auto" data={displayBookings}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar
            dataKey="consultant_fees"
            fill="#176ae5"
            type="monotone"
            stroke="#181B5C"
            shape={<TriangleBar />}
          >
            {colors.map((entry, index) => (
              <Cell key={index} fill={colors[index % 20]}></Cell>
            ))}
          </Bar>

          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.70)",
              borderRadius: "20px",
              color: "white",
            }}
            cursor={{ fill: "transparent" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
