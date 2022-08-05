import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  contractName: 'AcadScore',
  tokenName: 'AcadScore',
  tokenSymbol: 'ASTEST',
  hiddenMetadataUri: 'ipfs://QmezHbSqAFhYE1Fz5ADuikUX3qjNJc5qbqXPNQFo2wisDQ/1.json',
  maxSupply: 2,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "0x5a3766a7da09350fdce72d6c8f1f7cac97c3352a",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
