import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFeching = () => {
  const [albums, setAlbums] = useState([]); //album  is the  state  variable

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        console.log(res);
        setAlbums(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 >Albums List</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>UserId</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album.id}>
              <td>{album.id}</td>
              <td>{album.title}</td>
              <td>{album.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataFeching;
