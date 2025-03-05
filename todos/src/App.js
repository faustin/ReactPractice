import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

function App() {
  return (
    <div className="container mt-4">
      <div className="card">
      <div className="card-header">
        <div>Your todos</div>
      </div>
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">description</th>
            <th scope="col">Assigned </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="rwo">1</th>
              <td>Feed dog</td>
              <td>Eric</td>
            </tr>
            <tr>
              <th scope="rwo">1</th>
              <td>Feed dog</td>
              <td>Eric</td>
            </tr>
            <tr>
              <th scope="rwo">1</th>
              <td>Feed dog</td>
              <td>Eric</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}

export default App;
