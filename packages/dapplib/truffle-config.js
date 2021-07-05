require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note noise host hunt cloth flame sunny'; 
let testAccounts = [
"0x4365986339c55bbe2ee265ae11b4c1b34e0a8926fe6cacf1e443c2ce0e70b2e0",
"0x3d3554ad6769757b72010d593890e33edcf20a19407bb01d406d1096f312e36b",
"0xb96285c5adcab77d0932fbd01196e8b6f3b050ea5e887a54e48b3e9157ebc1a8",
"0x7b7ca36cfbd2d1c6ee7e63ee504557da86abeda43a46cf79dd974f66f106da69",
"0x127f0d2afd96d30f8609f69111ee8e681aba831d456071ee4adcf683ed14b9af",
"0x4d3c8d064a8814eb796793be405265e572365f6b4e9f09c64ea687f534400850",
"0x9827929e54051d4ce78509b6ac031f95a3325e8a3a9916a8c493c2992524ee8e",
"0x2ec68bc57b78afe785de06fa23eba3adb279a9f52e093de8d78f8ecb69a55d6f",
"0x04584d4ba2fad0e00f8c7b4e6db0d9a1bec97975b332873fbfd600f0d048b6d4",
"0xa75658f505ba18c006f1fa5ec841c5962a3f8d9875b6b8a55cc081742ecfdc8e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

