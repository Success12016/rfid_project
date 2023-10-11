// GoldTable.js
import React from 'react';

function GoldTable({ goldNecklaces }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Weight</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {goldNecklaces.map((necklace, index) => (
          <tr key={index}>
            <td>{necklace.name}</td>
            <td>{necklace.weight}</td>
            <td>{necklace.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GoldTable;






