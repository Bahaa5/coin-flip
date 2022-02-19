/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoinFlip, CoinFlipInterface } from "../CoinFlip";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "winner",
        type: "bool",
      },
    ],
    name: "Status",
    type: "event",
  },
  {
    inputs: [],
    name: "depositFunds",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getGameCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getGameEntry",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blocknumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blocktimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bet",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "prize",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "winner",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "max",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "min",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payPercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "play",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052605a6001556702c68af0bb14000060025566470de4df82000060035534801561002c57600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506110268061007c6000396000f3fe6080604052600436106100915760003560e01c80638da5cb5b116100595780638da5cb5b1461016e57806393e84cd914610199578063e2c41dbc146101a3578063e87c0ee6146101ad578063f8897945146101d857610091565b8063155dd5ee1461009657806341c0e1b5146100bf5780636ac5db19146100d65780637f9ff2f81461010157806389da2fe614610143575b600080fd5b3480156100a257600080fd5b506100bd60048036038101906100b89190610a32565b610203565b005b3480156100cb57600080fd5b506100d46102fb565b005b3480156100e257600080fd5b506100eb6103c2565b6040516100f89190610ca4565b60405180910390f35b34801561010d57600080fd5b5061012860048036038101906101239190610a32565b6103c8565b60405161013a96959493929190610b77565b60405180910390f35b34801561014f57600080fd5b506101586105db565b6040516101659190610ca4565b60405180910390f35b34801561017a57600080fd5b506101836105e1565b6040516101909190610b5c565b60405180910390f35b6101a1610605565b005b6101ab61092f565b005b3480156101b957600080fd5b506101c2610a0a565b6040516101cf9190610ca4565b60405180910390f35b3480156101e457600080fd5b506101ed610a17565b6040516101fa9190610ca4565b60405180910390f35b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610291576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028890610c64565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156102f7573d6000803e3d6000fd5b5050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610389576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038090610c64565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b60025481565b6000806000806000806004878154811061040b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660048881548110610477577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160010154600489815481106104c3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600602016002015460048a8154811061050f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600602016003015460048b8154811061055b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600602016004015460048c815481106105a7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160050160009054906101000a900460ff1695509550955095509550955091939550919395565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035434101561064a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064190610c84565b60405180910390fd5b60025434111561068f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068690610c44565b60405180910390fd5b6060600080806002426106a29190610e49565b14156107a95760019050606460015460646106bd9190610cdb565b6106c79190610d31565b346106d29190610d62565b4710156106fc576040518060800160405280604c8152602001610fa5604c9139925047915061075d565b6064600154606461070d9190610cdb565b346107189190610d62565b6107229190610d31565b91506040518060400160405280601981526020017f436f6e67726174756c6174696f6e732c20796f752077696e210000000000000081525092505b3373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156107a3573d6000803e3d6000fd5b506107e6565b6040518060400160405280601081526020017f536f7272792c20796f75206c6f736521000000000000000000000000000000008152509250600090505b60006040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020014381526020014281526020013481526020018481526020018315158152509050600481908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff02191690831515021790555050507f9661c368357045cbbedf4b4d390b315c217898ca8a158a643dc89f9c40f06884843385856040516109219493929190610bd8565b60405180910390a150505050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146109bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b490610c64565b60405180910390fd5b670de0b6b3a7640000341015610a08576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ff90610c24565b60405180910390fd5b565b6000600480549050905090565b60035481565b600081359050610a2c81610f8d565b92915050565b600060208284031215610a4457600080fd5b6000610a5284828501610a1d565b91505092915050565b610a6481610dce565b82525050565b610a7381610dbc565b82525050565b610a8281610de0565b82525050565b6000610a9382610cbf565b610a9d8185610cca565b9350610aad818560208601610e16565b610ab681610ed8565b840191505092915050565b6000610ace601883610cca565b9150610ad982610ee9565b602082019050919050565b6000610af1601683610cca565b9150610afc82610f12565b602082019050919050565b6000610b14600e83610cca565b9150610b1f82610f3b565b602082019050919050565b6000610b37601183610cca565b9150610b4282610f64565b602082019050919050565b610b5681610e0c565b82525050565b6000602082019050610b716000830184610a5b565b92915050565b600060c082019050610b8c6000830189610a6a565b610b996020830188610b4d565b610ba66040830187610b4d565b610bb36060830186610b4d565b610bc06080830185610b4d565b610bcd60a0830184610a79565b979650505050505050565b60006080820190508181036000830152610bf28187610a88565b9050610c016020830186610a6a565b610c0e6040830185610b4d565b610c1b6060830184610a79565b95945050505050565b60006020820190508181036000830152610c3d81610ac1565b9050919050565b60006020820190508181036000830152610c5d81610ae4565b9050919050565b60006020820190508181036000830152610c7d81610b07565b9050919050565b60006020820190508181036000830152610c9d81610b2a565b9050919050565b6000602082019050610cb96000830184610b4d565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610ce682610e0c565b9150610cf183610e0c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610d2657610d25610e7a565b5b828201905092915050565b6000610d3c82610e0c565b9150610d4783610e0c565b925082610d5757610d56610ea9565b5b828204905092915050565b6000610d6d82610e0c565b9150610d7883610e0c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610db157610db0610e7a565b5b828202905092915050565b6000610dc782610dec565b9050919050565b6000610dd982610dec565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610e34578082015181840152602081019050610e19565b83811115610e43576000848401525b50505050565b6000610e5482610e0c565b9150610e5f83610e0c565b925082610e6f57610e6e610ea9565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f4465706f736974206174206c6561737420312065746865720000000000000000600082015250565b7f416d6f756e7420626967676572207468616e206d617800000000000000000000600082015250565b7f4f6e6c7920666f72206f776e6572000000000000000000000000000000000000600082015250565b7f4e6f7420656e6f75676820616d6f756e74000000000000000000000000000000600082015250565b610f9681610e0c565b8114610fa157600080fd5b5056fe436f6e67726174756c6174696f6e732c20796f752077696e2120536f7272792c206e6f7420656e6f756768742066756e64732c2065766572797468696e67206973206465706f736974656421a26469706673582212200d419341a59972e39e9a3a8b7028397fabc9f155831dc5dfc2990c3c2c4b7b8964736f6c63430008040033";

type CoinFlipConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CoinFlipConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CoinFlip__factory extends ContractFactory {
  constructor(...args: CoinFlipConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CoinFlip";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CoinFlip> {
    return super.deploy(overrides || {}) as Promise<CoinFlip>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CoinFlip {
    return super.attach(address) as CoinFlip;
  }
  connect(signer: Signer): CoinFlip__factory {
    return super.connect(signer) as CoinFlip__factory;
  }
  static readonly contractName: "CoinFlip";
  public readonly contractName: "CoinFlip";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoinFlipInterface {
    return new utils.Interface(_abi) as CoinFlipInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoinFlip {
    return new Contract(address, _abi, signerOrProvider) as CoinFlip;
  }
}
