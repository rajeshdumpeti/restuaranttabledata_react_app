import React from "react";

export default function Datatable({ data }) {
  //   const columns = data[0] && Object.keys(data[0]);
  const columns = [
    {
      name: "Name",
      city: "City",
    },
  ];
  return (
    <table cellPadding={10} cellSpacing={10}>
      <thead>
        <tr>
          {columns.map((heading) => (
            <th>{heading.name}</th>
          ))}
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}
