// GoldTable.js
import React from 'react';
import './GoldTable.css'; // Import CSS file

function GoldTable({ goldNecklaces }) {
  return (
    <table className="centered-table"> {/* เพิ่ม className เพื่อใช้ CSS */}
      <thead>
        <tr>
          <th>วันที่</th>
          <th>เวลา</th>
          <th>รหัส</th>
          <th>ประเภททองคำ</th>
          <th>ขนาด</th>
          <th>น้ำหนัก</th>
          <th>กิจกรรม</th>
          <th>สถานะ</th>
        </tr>
      </thead>
      <tbody>
        {goldNecklaces.map((necklace, index) => (
          <tr key={index}>
            <td>{necklace.date}</td>
            <td>{necklace.time}</td>
            <td>{necklace.id}</td>
            <td>{necklace.type}</td>
            <td>{necklace.size}</td>
            <td>{necklace.weight}</td>
            <td>{necklace.activity}</td>
            <td>{necklace.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GoldTable;






