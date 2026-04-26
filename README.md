**Agri-Chain: Blockchain-Based Agricultural Supply Chain:**

This project is a web application designed to bring transparency, efficiency, and fairness to the agricultural supply chain using Hyperledger Fabric and a React-based frontend. It connects farmers, distributors, and consumers on a single, immutable ledger.

**Project Overview:**

Agri-Chain aims to solve common problems in the agricultural sector, such as lack of transparency, unfair pricing, and supply chain inefficiencies. By leveraging blockchain technology, we can create a tamper-proof record of every product's journey, from farm to table.

**Key Features**

**Role-Based Dashboards:** Separate, tailored interfaces for Farmers, Distributors, and Consumers.

**Complete Traceability:** Track produce from the moment it's harvested until it reaches the consumer.

**QR Code Integration:** Consumers can scan a QR code on the product to view its complete history.

**Price Prediction:** A module to forecast crop prices based on historical data.

**Real-time Suggestions for Farmers:** Provides farmers with insights and recommendations (e.g., optimal harvest times, market demand).

**Farmer Support:** A dedicated toll-free number for farmers to get assistance.



**Technology Stack**



Frontend: React.js with Tailwind CSS for a modern, responsive user interface.

**Backend:** Node.js with Express for API handling and communication with the blockchain.

**Chaincode (Smart Contracts):** Implemented using JavaScript to define the business logic for creating and updating assets on the blockchain.

**Hyperledger Fabric Network:** A permissioned blockchain network consisting of peers, orderers, and certificate authorities.

**Application Pages**

**Dashboard:** A central hub showing key statistics of the supply chain, such as the number of active participants, total produce tracked, and recent transactions.

**Farmer Page:**
Add new produce to the blockchain (e.g., crop type, quantity, harvest date).
View the status of their submitted produce.
Receive real-time suggestions for improving yield and profitability.

**Distributor Page:**
View available produce from farmers.
Update the status of shipments (e.g., in-transit, delivered to retailer).
Manage logistics and track inventory.

**Consumer Page:**
Scan a QR code or enter a product ID to view its provenance.
See details like the farm of origin, harvest date, and transportation history.
Generate a QR code for a selected product.

**Price Prediction Page:**
Input crop details to get an estimated market price.
Helps farmers and distributors make informed decisions.

**Samples:**

<img width="1894" height="830" alt="image" src="https://github.com/user-attachments/assets/f82bf0ff-01ea-4b92-a74a-f32d286b8224" />

<img width="1844" height="766" alt="image" src="https://github.com/user-attachments/assets/61b681b5-7bef-431e-b3a5-e6afb3f7bf38" />

<img width="1809" height="780" alt="image" src="https://github.com/user-attachments/assets/17d21b56-8a01-4160-81f7-c21de8280f2c" />

<img width="1824" height="719" alt="image" src="https://github.com/user-attachments/assets/319c3982-96fd-4b13-b584-a0626958bcb4" />

<img width="1623" height="723" alt="image" src="https://github.com/user-attachments/assets/d754fcc9-ada7-409a-add0-00eed013fcf3" />

<img width="1163" height="815" alt="image" src="https://github.com/user-attachments/assets/c53c12d9-694e-4a23-b4ec-2440e504f0e7" />

<img width="1818" height="734" alt="image" src="https://github.com/user-attachments/assets/62aef9b2-11aa-4327-bb37-17ea2896b0ad" />



# Agri-Chain (Full Stack with Hyperledger Fabric)

## Overview
React (client) → Node.js (server) → Hyperledger Fabric (chaincode)

## Prerequisites
- Node.js 18+
- Docker
- Hyperledger Fabric samples (test-network)

## Quick Start

### 1) Start Fabric test network
```
cd fabric-samples/test-network
./network.sh up createChannel -c mychannel -ca
```

### 2) Deploy chaincode
```
./network.sh deployCC -ccn agri-chain -ccp <PATH_TO>/blockchain/chaincode/agri-chain -ccl javascript
```

### 3) Backend
```
cd server
npm install
node server.js
```

### 4) Frontend
```
cd client
npm install
npm start
```

Frontend runs on http://localhost:3000
Backend runs on http://localhost:3001

## Notes
- Configure `server/fabric/connection.json` and enroll `appUser` in wallet.








