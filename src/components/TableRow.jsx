import React from "react";

export const TableRow = ({ logDetails }) => {
  return (
    <tr>
      <td></td>
      <td>{logDetails.time1}</td>
      <td>{logDetails.time2}</td>
      <td>{logDetails.device}</td>
      <td>{logDetails.event}</td>
      <td>{logDetails.message}</td>
    </tr>
  );
};