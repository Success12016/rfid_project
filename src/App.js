import React from 'react';
import './App.css';
import GoldTable from './Goldtable'; // นำเข้า GoldTable ที่เราสร้าง

function App() {
  // ตัวอย่างข้อมูลสร้อยทอง
  const goldNecklaces = [
    { date: "00-00-0000", time: "00:00", id: 11111111, type: "สร้อย", size: "0 สลึง", weight: "0 กรัม", activity: "จัดเก็บ",  status: "สำเร็จ"},
    { date: "00-00-0000", time: "00:00", id: 22222222, type: "แหวน", size: "0 สลึง", weight: "0 กรัม", activity: "จัดเก็บ",  status: "สำเร็จ"},
  ];

  return (
    <div className="App">
      <div>
        <h2>Gold Inventory System</h2>
        <GoldTable goldNecklaces={goldNecklaces} /> {/* แสดงตารางสร้อยทอง */}
      </div>
    </div>
  );
}

export default App;

