// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract SupplyChain is Ownable, AccessControl {
    bytes32 public constant PRODUCER_ROLE = keccak256("PRODUCER_ROLE");
    bytes32 public constant SUPPLIER_ROLE = keccak256("SUPPLIER_ROLE");
    bytes32 public constant MANUFACTURER_ROLE = keccak256("MANUFACTURER_ROLE");
    bytes32 public constant DISTRIBUTOR_ROLE = keccak256("DISTRIBUTOR_ROLE");
    bytes32 public constant RETAILER_ROLE = keccak256("RETAILER_ROLE");
    bytes32 public constant INSPECTOR_ROLE = keccak256("INSPECTOR_ROLE");

    enum ItemStatus {
        Created,
        InTransit,
        Delivered,
        QualityChecked,
        Rejected
    }

    struct Item {
        uint256 id;
        string name;
        string origin;
        address currentOwner;
        ItemStatus status;
        uint256 timestamp;
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
        ItemStatus status
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

    constructor() Ownable(msg.sender) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    // Create item
    function createItem(
        string memory _name,
        string memory _origin
    ) public onlyRole(PRODUCER_ROLE) {
        itemCounter++;

        items[itemCounter] = Item({
            id: itemCounter,
            name: _name,
            origin: _origin,
            currentOwner: msg.sender,
            status: ItemStatus.Created,
            timestamp: block.timestamp,
            location: "Origin",
            remarks: "Item Created."
        });

        auditTrail[itemCounter].push("Created at Origin by producer.");
        emit ItemCreated(itemCounter, _name, _origin, msg.sender);
    }

    // Transfer ownership
    function transferOwnership(
        uint256 _itemId,
        address _to,
        string memory _location
    ) public onlyRole(PRODUCER_ROLE) {
        require(
            items[_itemId].currentOwner == msg.sender,
            "Caller is not the owner."
        );
        items[_itemId].currentOwner = _to;
        items[_itemId].status = ItemStatus.InTransit;
        items[_itemId].timestamp = block.timestamp;
        items[_itemId].location = _location;

        auditTrail[_itemId].push(
            string(abi.encodePacked("Transferred to ", _location))
        );
        emit OwnershipTransferred(
            _itemId,
            msg.sender,
            _to,
            ItemStatus.InTransit
        );
    }

    function updateStatus(
        uint256 _itemId,
        ItemStatus _status,
        string memory _statusUpdate
    ) public onlyRole(SUPPLIER_ROLE) {
        require(
            items[_itemId].currentOwner == msg.sender,
            "Caller is not the owner."
        );

        items[_itemId].status = _status;
        items[_itemId].remarks = _statusUpdate;
        items[_itemId].timestamp = block.timestamp;

        auditTrail[_itemId].push(_statusUpdate);
    }

    function inspectItem(
        uint256 _itemId,
        bool _passed,
        string memory _remarks
    ) public onlyRole(INSPECTOR_ROLE) {
        require(
            items[_itemId].status == ItemStatus.InTransit,
            "Item must be in transit."
        );

        if (_passed) {
            items[_itemId].status = ItemStatus.QualityChecked;
            items[_itemId].remarks = _remarks;

            auditTrail[_itemId].push(
                string(abi.encodePacked("Inspection passed: ", _remarks))
            );
        } else {
            items[_itemId].status = ItemStatus.Rejected;
            items[_itemId].remarks = _remarks;

            auditTrail[_itemId].push(
                string(abi.encodePacked("Inspection failed: ", _remarks))
            );
            emit ItemRejected(_itemId, msg.sender, _remarks);
        }

        emit ItemInspected(_itemId, msg.sender, _passed, _remarks);
    }

    function deliverItem(uint256 _itemId) public onlyRole(DISTRIBUTOR_ROLE) {
        require(
            items[_itemId].currentOwner == msg.sender,
            "Caller is not the owner"
        );

        items[_itemId].status = ItemStatus.Delivered;
        items[_itemId].timestamp = block.timestamp;
        items[_itemId].remarks = "Delivered";
        auditTrail[_itemId].push("Delivered to final destination.");

        emit OwnershipTransferred(
            _itemId,
            msg.sender,
            address(0),
            ItemStatus.Delivered
        );
    }

    function resolveDispute(
        uint256 _itemId,
        string memory _resolution
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        auditTrail[_itemId].push(
            string(abi.encodePacked("Dispute resolved: ", _resolution))
        );

        items[_itemId].remarks = _resolution;
    }

    function addRole(address _account, bytes32 _role) external onlyOwner {
        _grantRole(_role, _account);
    }

    function revokeRole(address _account, bytes32 _role) external onlyOwner {
        revokeRole(_role, _account);
    }

    function getAuditTrail(
        uint256 _itemId
    ) public view returns (string[] memory) {
        return auditTrail[_itemId];
    }
}
