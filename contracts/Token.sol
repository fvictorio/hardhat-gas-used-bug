pragma solidity 0.7.4;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token is ERC20 {
  address private immutable _deployer;

  constructor () ERC20('My test tokennn', 'Tokenn') {
    _deployer = msg.sender;
    _mint(msg.sender, 10020 ether);
  }

  function airdrop (address[] calldata accounts, uint[] calldata amounts) external {
    require(accounts.length == amounts.length, 'Tokennn: array lengths do not match');

    uint length = accounts.length;
    uint initialSupply = totalSupply();

    for (uint i; i < length; i++) {
      _mint(accounts[i], amounts[i]);
    }

    _burn(msg.sender, totalSupply() - initialSupply);
  }

  function airdropOne (address account, uint amount) external {
    uint initialSupply = totalSupply();
    _mint(account, amount);
    _burn(msg.sender, totalSupply() - initialSupply);
  }
}
