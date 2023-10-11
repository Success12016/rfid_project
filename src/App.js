import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoldTable from './Goldtable'; // นำเข้า GoldTable ที่เราสร้าง

function App() {
  // ตัวอย่างข้อมูลสร้อยทอง
  const goldNecklaces = [
    { name: "Gold Necklace 1", weight: 10, price: 10000 },
    { name: "Gold Necklace 2", weight: 15, price: 15000 },
    { name: "Gold Necklace 3", weight: 20, price: 20000 },
  ];

  return (
    <div className="App">
      <div>
        <h2>Gold Necklaces</h2>
        <GoldTable goldNecklaces={goldNecklaces} /> {/* แสดงตารางสร้อยทอง */}
      </div>
    </div>
  );
}

export default App;

