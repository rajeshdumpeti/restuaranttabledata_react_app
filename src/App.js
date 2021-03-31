import React, { useEffect, useState } from "react";

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
      });
  }, []);

  return (
    <>
      <input placeholder="Search using State,Genrse"></input>
      <table>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">City</th>
          <th scope="col">State</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Genre s</th>
        </tr>

        {data &&
          data.map((resData) => (
            <tr key={resData.id}>
              <td>{resData.name}</td>
              <td>{resData.city}</td>
              <td>{resData.state}</td>
              <td>{resData.telephone}</td>
              <td>{resData.genre}</td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default App;
