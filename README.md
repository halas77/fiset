# Fisset(ፍሰት) | Supply Chain Management Platform

Fisset is a blockchain-based supply chain management platform developed using Solidity and React-ts. It aims to provide real-world functionalities for tracking and managing items throughout the supply chain with transparency, security, and traceability. The platform supports roles such as Producers, Suppliers, Retailers, and Consumers, each playing a key part in the supply chain process.

## Features

- **Role-Based Access Control**: Utilizes roles such as Producers, Suppliers, Retailers, and Consumers to ensure only authorized parties can perform specific actions within the supply chain.
- **Item Registration**: Producers can register new items with details including description, origin, and initial status.
- **Ownership Transfer**: Items can be transferred between different supply chain participants, with role-based validation ensuring proper handling.
- **Status Updates**: Suppliers can update the status of items (e.g., In Transit, Delivered) with time-stamped records, maintaining transparency.
- **Location Tracking**: Tracks the location of items as they move through the supply chain, updating with each ownership transfer.
- **Audit Trail**: Maintains a detailed log of all actions taken on each item, including status changes, transfers, and remarks.
- **Quality Check Integration**: Allows for quality checks and status updates at each step, ensuring the quality and authenticity of items.
- **Event Logging**: Emits events on key actions such as item registration, ownership transfer, and status updates, facilitating off-chain integration.
- **Dispute Resolution**: Provides a transparent record of the item's journey, aiding in dispute resolution between supply chain participants.

