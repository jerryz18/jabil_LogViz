import React from "react";
import { ExpendableButton } from "./ExpendableButton";
import { TableRow } from "./TableRow";
import useOpenController from "../hooks/useOpenController";

export const TableSection = ({ logDetails, index }) => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
      <tr>
        <td className="button-td">
          <ExpendableButton isOpen={isOpen} toggle={toggle} />
        </td>
        <td>
          <b>Log Entry: {index}</b>
        </td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      {isOpen && <TableRow logDetails={logDetails} />}
    </tbody>
  );
};