import React, { useEffect, useState } from "react";
// import Datatable from "./components/Table";
import "./App.css";

const alternatingColor = ["#fff", "#eaeff0"];

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://code-challenge.spectrumtoolbox.com/api/restaurants";
    fetch(url, {
      method: "GET",
      headers: { Authorization: "Api-Key q3MNxtfep8Gt" },
    })
      .then((r) => r.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log({ error }));
  }, []);

  return (
    <div className="container">
      <div className="header">List Of Restuarants</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <input className="search" placeholder="Search by State,Genre" />
          <button type="submit" className="button">
            Search
          </button>
        </div>
        <button className="fa filter"> &#xf0b0; Filters</button>
      </div>
      {/* <Datatable data={data} /> */}
      <table cellPadding={10} cellSpacing={10}>
        <thead>
          <th>Name</th>
          {/* <span class="arrow-up"></span> */}
          <th>City</th>
          <th>State</th>
          <th>Phone Number</th>
          <th>Genres</th>
        </thead>

        {data &&
          data
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((resData, index) => (
              <tbody
                key={resData.id}
                style={{
                  backgroundColor:
                    alternatingColor[index % alternatingColor.length],
                }}
              >
                <td>{resData.name}</td>
                <td>{resData.city}</td>
                <td>{resData.state}</td>
                <td>{resData.telephone}</td>
                <td>{resData.genre}</td>
              </tbody>
            ))}
      </table>
    </div>
  );
};

export default App;
