import React from "react";
import { info } from "../data/info.js";
import { TableSection } from "./TableSection.jsx";
export const Table = () => {
  return (
    <table>
      <thead>
        <td></td>
        <th>Time Start</th>
        <th>Time End</th>
        <th>Device</th>
        <th>Event</th>
        <th>Message</th>
      </thead>
      {info.map((logDetails, index) => (
        <TableSection logDetails={logDetails} index={index} />
      ))}
    </table>
  );
};