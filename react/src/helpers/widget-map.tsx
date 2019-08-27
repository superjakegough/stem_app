import React from "react";
import GridBox1 from "../components/GridBox/GridBox1";
import GridBox2 from "../components/GridBox/GridBox2";
import GridBox3 from "../components/GridBox/GridBox3";

export const WidgetMap: { [key: string]: any } = {
  "GridBox1": <div key="GridBox1" className="grid-box"><GridBox1 /></div>,
  "GridBox2": <div key="GridBox2" className="grid-box"><GridBox2 /></div>,
  "GridBox3": <div key="GridBox3" className="grid-box"><GridBox3 /></div>,
};
