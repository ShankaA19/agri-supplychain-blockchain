
import React, { useState } from 'react';

export default function App() {
  const [id, setId] = useState('');
  const [crop, setCrop] = useState('');
  const [farmer, setFarmer] = useState('');
  const [quantity, setQuantity] = useState('');
  const [result, setResult] = useState(null);

  const create = async () => {
    const res = await fetch('http://localhost:3001/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, crop, farmer, quantity })
    });
    setResult(await res.json());
  };

  const fetchProduct = async () => {
    const res = await fetch(`http://localhost:3001/api/products/${id}`);
    setResult(await res.json());
  };

  return (
    <div style={{padding:20}}>
      <h2>AgriChain Blockchain UI</h2>
      <input placeholder="ID" onChange={e=>setId(e.target.value)} /><br/>
      <input placeholder="Crop" onChange={e=>setCrop(e.target.value)} /><br/>
      <input placeholder="Farmer" onChange={e=>setFarmer(e.target.value)} /><br/>
      <input placeholder="Quantity" onChange={e=>setQuantity(e.target.value)} /><br/>
      <button onClick={create}>Create Product</button>
      <button onClick={fetchProduct}>Get Product</button>
      <pre>{JSON.stringify(result,null,2)}</pre>
    </div>
  );
}
