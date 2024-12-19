import React from "react";

const Table = () => {
  const tableData = [
    { col1: "Price", col2: "$9.99/Month", col3: "$12.99/Month", col4: "$14.99" },
    { col1: "Content", col2: "Access to a wide selection of movies and shows, including some new releases.", col3: "Access to a wider selection of movies and shows, including most new releases and exclusive content", col4: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing" },
    { col1: "$12.99", col2: "Row 3, Col 2", col3: "Row 3, Col 3", col4: "Row 3, Col 4" },
    { col1: "Devices", col2: "Watch on one device simultaneously", col3: "Watch on Two device simultaneously", col4: "Watch on Four device simultaneously" },
    { col1: "Free Trail", col2: "7 Days", col3: "7 Days", col4: "7 Days" },
    { col1: "Cancel Anytime", col2: "Yes", col3: "Yes", col4: "Yes" },
    { col1: "HDR", col2: "No", col3: "Yes", col4: "Yes" },
    { col1: "Dolby Atmos", col2: "No", col3: "Yes", col4: "Yes" },
    { col1: "Ad - Free", col2: "No", col3: "Yes", col4: "Yes" },
    { col1: "Offline Viewing", col2: "No", col3: "Yes, for select titles.", col4: "Yes, for select titles." },
    { col1: "Family Sharing", col2: "No", col3: "Yes, up to 5 family members", col4: "Yes, up to 6 family members" },
  ];

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>Features</th>
          <th>Basic</th>
          <th>Standarts</th>
          <th>Premium</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{row.col1}</td>
            <td>{row.col2}</td>
            <td>{row.col3}</td>
            <td>{row.col4}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
