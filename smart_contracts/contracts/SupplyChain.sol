// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract SupplyChain is Ownable, AccessControl {
    bytes32 public constant PRODUCER_ROLE = keccak256("PRODUCER_ROLE");
    bytes32 public constant SUPPLIER_ROLE = keccak256("SUPPLIER_ROLE");
    bytes32 public constant MANUFACTURER_ROLE = keccak256("MANUFACTURER_ROLE");
    bytes32 public constant DISTRIBUTOR_ROLE = keccak256("DISTRIBUTOR_ROLE");
    bytes32 public constant RETAILER_ROLE = keccak256("RETAILER_ROLE");
    bytes32 public constant INSPECTOR_ROLE = keccak256("INSPECTOR_ROLE");

    struct Item {
        uint256 id;
        string name;
        string origin;
        address currentOwner;
        uint256 status;
        uint timestamp;
        string location;
        string remarks;
    }

    uint256 public itemCounter;
    mapping(uint256 => Item) public items;
    mapping(uint256 => string[]) public auditTrail;

    // events
    event ItemCreated(
        uint256 indexed itemId,
        string name,
        string origin,
        address indexed owner
    );
    event OwnershipTransferred(
        uint256 indexed itemId,
        address indexed from,
        address indexed to,
        uint256 status
    );
    event ItemInspected(
        uint256 indexed itemId,
        address indexed inspector,
        bool passed,
        string remarks
    );
    event ItemRejected(
        uint256 indexed itemId,
        address indexed rejectedBy,
        string reason
    );

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    modifier onlyRole(bytes32 role) {
        require(hasRole(role, msg.sender), "Caller is not authorized.");
        _;
    }

    function createItem(
        string memory _name,
        string memory _origin
    ) publi onlyRole(PRODUCER_ROLE) {
        itemCounter++;

        items[itemCounter] = Item({
            id: itemCounter,
            name: _name,
            origin: _origin,
            currentOwner: msg.sender,
            status: 0,
            timestamp: block.timestamp,
            location: "Origin",
            remarks: "Item Created."
        });

        auditTrail[itemCounter].push("Created at Origin by producer.")
        emit ItemCreated(itemCounter, _name, _origin, msg.sender);
    }
}
