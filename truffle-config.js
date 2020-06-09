require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind atom hunt drive force text'; 
let testAccounts = [
"0x4fcfb8b29a8f3970c252ef4169c677d5d8be4408c6d0875bd41852655663418b",
"0x4768116e88f6019d562dfceae86c0ff00747bcdb5d0056358a0bb03f8f44795d",
"0x985d6989d1a1cc70035fe8ba34af5dbbb9221347d63a4332b0dcb26e8f4bed08",
"0xc98a6849d3fb344344692eb278fa1f7a639986887904672473448ec2a960cee5",
"0xc30f83a16da8e0f9b8448c47eb4a9618b7a96fd3844425e01be235ad3a4131ad",
"0x47b0e5c0249378e4809057889b67c90ec605b46f6d731a3b6e33d26e55e9d492",
"0x1cdae49c717633ead9ea6db6e95f59abc7f0e60349a7239bff0b8128efea27d9",
"0x4a9a464d1d922ffca90140c3efc360eb5199471661b8dd8b5052385ce0ec54e7",
"0xd1573f81ad942a3b7e1cc053b6371dbaa154e14137a98fdb6bb3b584311db233",
"0xed7ce5661f4c44aeb847aa69baee6d268c0fdddb644a41fc301ee0a4b00d6a8f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
