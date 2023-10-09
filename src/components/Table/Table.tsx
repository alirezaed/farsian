import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CustomTableContainer } from "./TableStyle";

export interface ColumnType {
  title: string;
  fieldName: string;
  width?: number;
}

const TableEx = ({
  data,
  columns,
  keyfield,
}: {
  data: any[];
  columns: ColumnType[];
  keyfield: string;
}) => {
  const [sortField, setSortField] = React.useState(keyfield);
  const [sortOrder, setSortOrder] = React.useState("asc");

  return (
    <CustomTableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ fontWeight: "bold" }}>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                onClick={() => {
                  if (col.fieldName === sortField) {
                    setSortOrder((p) => (p === "asc" ? "desc" : "asc"));
                  } else {
                    setSortField(col.fieldName);
                  }
                }}
                key={col.fieldName}
              >
                {col.fieldName === sortField && (
                  <>
                    {sortOrder === "asc" && <>⬇️</>}
                    {sortOrder === "desc" && <>⬆️</>}
                  </>
                )}
                {col.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .sort((a, b) => {
              if (a[sortField] > b[sortField])
                return sortOrder === "asc" ? 1 : -1;
              if (a[sortField] < b[sortField])
                return sortOrder === "asc" ? -1 : 1;
              return 0;
            })
            .map((row, index) => (
              <TableRow
                key={row[keyfield]}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {columns.map((col) => (
                  <TableCell key={col.fieldName}>
                    {row[col.fieldName]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </CustomTableContainer>
  );
};

export default TableEx;
