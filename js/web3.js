/*     +%%#-                           ##.        =+.    .+#%#+:       *%%#:    .**+-      =+
 *   .%@@*#*:                          @@: *%-   #%*=  .*@@=.  =%.   .%@@*%*   +@@=+=%   .%##
 *  .%@@- -=+                         *@% :@@-  #@=#  -@@*     +@-  :@@@: ==* -%%. ***   #@=*
 *  %@@:  -.*  :.                    +@@-.#@#  =@%#.   :.     -@*  :@@@.  -:# .%. *@#   *@#*
 * *%@-   +++ +@#.-- .*%*. .#@@*@#  %@@%*#@@: .@@=-.         -%-   #%@:   +*-   =*@*   -@%=:
 * @@%   =##  +@@#-..%%:%.-@@=-@@+  ..   +@%  #@#*+@:      .*=     @@%   =#*   -*. +#. %@#+*@
 * @@#  +@*   #@#  +@@. -+@@+#*@% =#:    #@= :@@-.%#      -=.  :   @@# .*@*  =@=  :*@:=@@-:@+
 * -#%+@#-  :@#@@+%++@*@*:=%+..%%#=      *@  *@++##.    =%@%@%%#-  =#%+@#-   :*+**+=: %%++%*
 *
 * @title: tinydaemons.js
 * @author: Max Flow O2 -> @MaxFlowO2 on bird app/GitHub
 * @notice: web3.js file for tinydaemons.html
 */

/*import TravellerTokenABI from "../abi/traveller_token.js"
import DualityTokenABI from "../abi/duality_token.js"*/

"use strict";
// Constants used for JS/web3 crap later
const AVAX_M = 43114;
const AVAX_T = 43113;
const BNB_M = 56;
const BNB_T = 97;
const ETH_M = 1;
const ETH_T = 4;
const FTM_M = 250;
const FTM_T = 4002;
const MATIC_M = 137;
const MATIC_T = 80001;
const OP_M = 10;
const OP_T = 69;

// Constants for web3
const AVAX_TESTCA = "0x9CBD8Ea530436bbE6Ef581f2156D619479055D41";
const BNB_TESTCA = "0x9CBD8Ea530436bbE6Ef581f2156D619479055D41";
const ETH_TESTCA = "0xcC0573BB57cf1F789A7c9Be70D81e3Af9DeD1BB8";
const FTM_TESTCA = "0x9CBD8Ea530436bbE6Ef581f2156D619479055D41";
const MATIC_TESTCA = "0x27746bEfd385661dA4Bb0FfEAa141CfD4E50F616";
const OP_TESTCA = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
const AVAX_MAINCA = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
const BNB_MAINCA = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
const ETH_MAINCA = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
const FTM_MAINCA = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
const MATIC_MAINCA = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";
const OP_MAINCA = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";

// lz endpoints current as of 27 July 2022
const AVAX_EPMAIN = "0x3c2269811836af69497E5F486A85D7316753cf62";
const AVAX_EPTEST = "0x93f54D755A063cE7bB9e6Ac47Eccc8e33411d706";
const BNB_EPMAIN = "0x3c2269811836af69497E5F486A85D7316753cf62";
const BNB_EPTEST = "0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1";
const ETH_EPMAIN = "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675";
const ETH_EPTEST = "0x79a63d6d8BBD5c6dfc774dA79bCcD948EAcb53FA";
const FTM_EPMAIN = "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7";
const FTM_EPTEST = "0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf";
const MATIC_EPMAIN = "0x3c2269811836af69497E5F486A85D7316753cf62";
const MATIC_EPTEST = "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8";
const OP_EPMAIN = "0x3c2269811836af69497E5F486A85D7316753cf62";
const OP_EPTEST = "0x72aB53a133b27Fa428ca7Dc263080807AfEc91b5"

// the ABI's
const ABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"string","name":"_initNotRevealedUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}];
const ENDPOINT = [{"inputs":[{"internalType":"uint16","name":"_chainId","type":"uint16"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"version","type":"uint16"}],"name":"DefaultReceiveVersionSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"version","type":"uint16"}],"name":"DefaultSendVersionSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"version","type":"uint16"}],"name":"NewLibraryVersionAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"srcChainId","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"srcAddress","type":"bytes"},{"indexed":false,"internalType":"uint64","name":"nonce","type":"uint64"},{"indexed":false,"internalType":"address","name":"dstAddress","type":"address"}],"name":"PayloadCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"srcChainId","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"srcAddress","type":"bytes"},{"indexed":false,"internalType":"address","name":"dstAddress","type":"address"},{"indexed":false,"internalType":"uint64","name":"nonce","type":"uint64"},{"indexed":false,"internalType":"bytes","name":"payload","type":"bytes"},{"indexed":false,"internalType":"bytes","name":"reason","type":"bytes"}],"name":"PayloadStored","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"chainId","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"srcAddress","type":"bytes"}],"name":"UaForceResumeReceive","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"ua","type":"address"},{"indexed":false,"internalType":"uint16","name":"version","type":"uint16"}],"name":"UaReceiveVersionSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"ua","type":"address"},{"indexed":false,"internalType":"uint16","name":"version","type":"uint16"}],"name":"UaSendVersionSet","type":"event"},{"inputs":[],"name":"BLOCK_VERSION","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_VERSION","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"chainId","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultReceiveLibraryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultReceiveVersion","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultSendLibrary","outputs":[{"internalType":"contract ILayerZeroMessagingLibrary","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultSendVersion","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_dstChainId","type":"uint16"},{"internalType":"address","name":"_userApplication","type":"address"},{"internalType":"bytes","name":"_payload","type":"bytes"},{"internalType":"bool","name":"_payInZRO","type":"bool"},{"internalType":"bytes","name":"_adapterParams","type":"bytes"}],"name":"estimateFees","outputs":[{"internalType":"uint256","name":"nativeFee","type":"uint256"},{"internalType":"uint256","name":"zroFee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"}],"name":"forceResumeReceive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_version","type":"uint16"},{"internalType":"uint16","name":"_chainId","type":"uint16"},{"internalType":"address","name":"_userApplication","type":"address"},{"internalType":"uint256","name":"_configType","type":"uint256"}],"name":"getConfig","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"}],"name":"getInboundNonce","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_dstChainId","type":"uint16"},{"internalType":"address","name":"_srcAddress","type":"address"}],"name":"getOutboundNonce","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userApplication","type":"address"}],"name":"getReceiveLibraryAddress","outputs":[{"internalType":"address","name":"receiveLibraryAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userApplication","type":"address"}],"name":"getReceiveVersion","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userApplication","type":"address"}],"name":"getSendLibraryAddress","outputs":[{"internalType":"address","name":"sendLibraryAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userApplication","type":"address"}],"name":"getSendVersion","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"}],"name":"hasStoredPayload","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"inboundNonce","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isReceivingPayload","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSendingPayload","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestVersion","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"libraryLookup","outputs":[{"internalType":"contract ILayerZeroMessagingLibrary","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newLayerZeroLibraryAddress","type":"address"}],"name":"newVersion","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"address","name":"","type":"address"}],"name":"outboundNonce","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"},{"internalType":"address","name":"_dstAddress","type":"address"},{"internalType":"uint64","name":"_nonce","type":"uint64"},{"internalType":"uint256","name":"_gasLimit","type":"uint256"},{"internalType":"bytes","name":"_payload","type":"bytes"}],"name":"receivePayload","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_srcChainId","type":"uint16"},{"internalType":"bytes","name":"_srcAddress","type":"bytes"},{"internalType":"bytes","name":"_payload","type":"bytes"}],"name":"retryPayload","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_dstChainId","type":"uint16"},{"internalType":"bytes","name":"_destination","type":"bytes"},{"internalType":"bytes","name":"_payload","type":"bytes"},{"internalType":"address payable","name":"_refundAddress","type":"address"},{"internalType":"address","name":"_zroPaymentAddress","type":"address"},{"internalType":"bytes","name":"_adapterParams","type":"bytes"}],"name":"send","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_version","type":"uint16"},{"internalType":"uint16","name":"_chainId","type":"uint16"},{"internalType":"uint256","name":"_configType","type":"uint256"},{"internalType":"bytes","name":"_config","type":"bytes"}],"name":"setConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_newDefaultReceiveVersion","type":"uint16"}],"name":"setDefaultReceiveVersion","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_newDefaultSendVersion","type":"uint16"}],"name":"setDefaultSendVersion","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_newVersion","type":"uint16"}],"name":"setReceiveVersion","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_newVersion","type":"uint16"}],"name":"setSendVersion","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"storedPayload","outputs":[{"internalType":"uint64","name":"payloadLength","type":"uint64"},{"internalType":"address","name":"dstAddress","type":"address"},{"internalType":"bytes32","name":"payloadHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"uaConfigLookup","outputs":[{"internalType":"uint16","name":"sendVersion","type":"uint16"},{"internalType":"uint16","name":"receiveVersion","type":"uint16"},{"internalType":"address","name":"receiveLibraryAddress","type":"address"},{"internalType":"contract ILayerZeroMessagingLibrary","name":"sendLibrary","type":"address"}],"stateMutability":"view","type":"function"}];

const XBOOABI = [{"inputs":[{"internalType":"contract IERC20","name":"_xboo","type":"address"},{"internalType":"contract IERC721","name":"_magicat","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"by","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"AddAuth","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenRecovered","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AdminTokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"by","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"RevokeAuth","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"by","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"SetAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_gemsPerSecond","type":"uint256"}],"name":"SetRewardPerSecond","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"StakeMagicat","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"tokenID","type":"uint256"}],"name":"UnstakeMagicat","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"MAX_MAGICAT_POWER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardPerSecond","type":"uint256"},{"internalType":"contract IERC20Ext","name":"_Token","type":"address"},{"internalType":"uint32","name":"_startTime","type":"uint32"},{"internalType":"uint32","name":"_endTime","type":"uint32"},{"internalType":"address","name":"_protocolOwner","type":"address"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_auth","type":"address"}],"name":"addAuth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"authorized","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUserLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUserLimitTime","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_time","type":"uint32"}],"name":"changeBaseUserLimitTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint32","name":"addSeconds","type":"uint32"}],"name":"changeEndTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint32","name":"_time","type":"uint32"}],"name":"changePoolUserLimitEndTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"changeUserLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256[]","name":"tokenIDs","type":"uint256[]"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"tokenIDs","type":"uint256[]"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_mp","type":"uint256"}],"name":"effectiveMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256[]","name":"tokenIDs","type":"uint256[]"}],"name":"emergencyCatWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyCatWithdrawable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"getStakedMagicats","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isAuth","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isRewardToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"magicat","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"magicatBoost","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"xbooReward","type":"uint256"},{"internalType":"uint256","name":"magicatReward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"RewardToken","type":"address"},{"internalType":"uint32","name":"userLimitEndTime","type":"uint32"},{"internalType":"uint8","name":"TokenPrecision","type":"uint8"},{"internalType":"uint256","name":"xBooStakedAmount","type":"uint256"},{"internalType":"uint256","name":"mpStakedAmount","type":"uint256"},{"internalType":"uint256","name":"RewardPerSecond","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShareMagicat","type":"uint256"},{"internalType":"address","name":"protocolOwnerAddress","type":"address"},{"internalType":"uint32","name":"lastRewardTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"precisionOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rarityOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIDs","type":"uint256[]"}],"name":"rarityOfBatch","outputs":[{"internalType":"uint256[]","name":"rarities","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"recoverWrongTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"relinquishSetRarity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_auth","type":"address"}],"name":"revokeAuth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"mul","type":"uint256"}],"name":"setCatMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"allowed","type":"bool"}],"name":"setEmergencyCatWithdrawable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"boost","type":"uint32"}],"name":"setMagicatBoost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"rarities","type":"uint256[]"},{"internalType":"uint256","name":"offset","type":"uint256"}],"name":"setRarities","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_rewardPerSecond","type":"uint256"}],"name":"setRewardPerSecond","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256[]","name":"stakeTokenIDs","type":"uint256[]"},{"internalType":"uint256[]","name":"unstakeTokenIDs","type":"uint256[]"}],"name":"stakeAndUnstakeMagicats","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_xboo","type":"uint256"}],"name":"stakeableMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"stakeableMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedMagicatPower","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"stopReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIDs","type":"uint256[]"}],"name":"sumOfRarities","outputs":[{"internalType":"uint256","name":"sum","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"userCurrentStakeableMP","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"catDebt","type":"uint256"},{"internalType":"uint256","name":"mp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256[]","name":"tokenIDs","type":"uint256[]"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"tokenIDs","type":"uint256[]"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"xboo","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

const MIRRORWORLDABI = [{"inputs":[{"internalType":"contract IERC20","name":"_boo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"BOOBalance","outputs":[{"internalType":"uint256","name":"booAmount_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_booAmount","type":"uint256"}],"name":"BOOForxBOO","outputs":[{"internalType":"uint256","name":"xBOOAmount_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"boo","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_share","type":"uint256"}],"name":"leave","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_xBOOAmount","type":"uint256"}],"name":"xBOOForBOO","outputs":[{"internalType":"uint256","name":"booAmount_","type":"uint256"}],"stateMutability":"view","type":"function"}];

const MICROABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"string","name":"tokenURI_","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"postSetTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI_","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;

// Add's networks to metamask
async function addNetwork(id) {
  let networkData;
  switch (id) {
    // OP Test-G
    case 420:
      networkData = [
        {
          chainId: "0x1A4",
          chainName: "Optimism Goerli",
          rpcUrls: ["https://goerli.optimism.io"],
          nativeCurrency: {
            name: "Optimism ETH",
            symbol: "oETH",
            decimals: 18,
          },
          blockExplorerUrls: ["https://blockscout.com/optimism/goerli"],
        },
      ];
      break;
    // OP Test-K
    case 69:
      networkData = [
        {
          chainId: "0x45",
          chainName: "Optimism Kovan",
          rpcUrls: ["https://kovan.optimism.io"],
          nativeCurrency: {
            name: "Optimism ETH",
            symbol: "oETH",
            decimals: 18,
          },
          blockExplorerUrls: ["https://kovan-optimistic.etherscan.io"],
        },
      ];
      break;
    // OP main
    case 10:
      networkData = [
        {
          chainId: "0xA",
          chainName: "Optimism",
          rpcUrls: ["https://mainnet.optimism.io"],
          nativeCurrency: {
            name: "Optimism ETH",
            symbol: "oETH",
            decimals: 18,
          },
          blockExplorerUrls: ["https://optimistic.etherscan.io/"],
        },
      ];
      break;
    //AVAX-C
    case 43114:
      networkData = [
        {
          chainId: "0xA86A",
          chainName: "Avalanche C-Chain",
          rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
          nativeCurrency: {
            name: "Avalanche",
            symbol: "AVAX",
            decimals: 18,
          },
          blockExplorerUrls: ["https://snowtrace.io"],
        },
      ];
      break;
    //AVAX-C-testnet
    case 43113:
      networkData = [
        {
          chainId: "0xA869",
          chainName: "FUJI (Avalanche)",
          rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
          nativeCurrency: {
            name: "Avalanche",
            symbol: "AVAX",
            decimals: 18,
          },
          blockExplorerUrls: ["https://testnet.snowtrace.io"],
        },
      ];
      break;
    //BNB
    case 56:
      networkData = [
        {
          chainId: "0x38",
          chainName: "Binance Scam Chain",
          rpcUrls: ["https://bsc-dataseed.binance.org/"],
          nativeCurrency: {
            name: "Binance",
            symbol: "BNB",
            decimals: 18,
          },
          blockExplorerUrls: ["https://bscscan.com"],
        },
      ];
      break;
    //BNB Testnet
    case 97:
      networkData = [
        {
          chainId: "0x61",
          chainName: "Binance Scam Chain Testnet",
          rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
          nativeCurrency: {
            name: "Binance",
            symbol: "BNB",
            decimals: 18,
          },
          blockExplorerUrls: ["https://testnet.bscscan.com"],
        },
      ];
      break;
   //Matic Mainnet
    case 137:
      networkData = [
        {
          chainId: "0x89",
          chainName: "Polygon",
          rpcUrls: ["https://polygon-rpc.com/"],
          nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18,
          },
          blockExplorerUrls: ["https://polygonscan.com/"],
        },
      ];
      break;
   //Matic Mumbai
    case 80001:
      networkData = [
        {
          chainId: "0x13881",
          chainName: "Mumbai (Polygon)",
          rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
          nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18,
          },
          blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
        },
      ];
      break;
    //Fantom
    case 250:
      networkData = [
        {
          chainId: "0xfa",
          chainName: "Fantom",
          rpcUrls: ["https://rpc.ftm.tools"],
          nativeCurrency: {
            name: "Fantom",
            symbol: "FTM",
            decimals: 18,
          },
          blockExplorerUrls: ["https://ftmscan.com/"],
        },
      ];
      break;
    //Fantom Testnet
    case 4002:
      networkData = [
        {
          chainId: "0xfa2",
          chainName: "Fantom Testnet",
          rpcUrls: ["https://rpc.testnet.fantom.network/"],
          nativeCurrency: {
            name: "Fantom",
            symbol: "FTM",
            decimals: 18,
          },
          blockExplorerUrls: ["https://testnet.ftmscan.com/"],
        },
      ];
      break;
    default:
      break;
  }

  // add these
  return window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: networkData,
  });
}

// Address of the selected account
let selectedAccount;

// init() web3modal
function init() {

  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  console.log("Fortmatic is", Fortmatic);
  console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

  if(location.protocol !== 'https:') {
    const alert = document.querySelector("#alert-error-https");
    alert.style.display = "block";
    document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
    return;
  }
  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "66e9cad39c594d7d93f5a93104cdf16e", //MaxflowO2 keys might not get milage
      }
    },

    fortmatic: {
      package: Fortmatic,
      options: {
        key: "pk_live_1EBC325C45415739" //MaxflowO2 keys might not get milage
      }
    }
  };

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });

  console.log("Web3Modal instance is", web3Modal);
}

// UI for fetchAccountData()
async function fetchAccountData() {

  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);
  console.log("Web3 instance is", web3);

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  console.log("Selected Account is", selectedAccount);


  // Display fully loaded UI for wallet data
  document.querySelector("#prepare").style.display = "none";
  document.querySelector("#connected").style.display = "block";

  // Display address over Disconnect
  var startString = selectedAccount.substring(0,3);
  var dots ="…";
  var endString = selectedAccount.substring(selectedAccount.length - 3)
  var display = startString+dots+endString;
  document.getElementById("addWallet").innerHTML = display;
  //populate NFTs
  await populateNFTs(selectedAccount);
  await populateMICROs(selectedAccount);
  await setNumbers(selectedAccount) //set minted/supply

  let contractBalance = await web3.eth.getBalance("0xf9e393CbD7e8F34FB87127195f1F74E699D3d595");
  contractBalance = contractBalance / 1e18;
  console.log('BBC contract balance: ' + contractBalance.toString() + '$FTM');
  let multisigBalance = await web3.eth.getBalance("0x5FC85515d6613164457724035413c5f8b2d899E5");
  multisigBalance = multisigBalance / 1e18;
  console.log('MultiSig balance: ' + multisigBalance.toString() + '$FTM');
  let flipBalance = await web3.eth.getBalance("0x948E422Da3Bd457289C526C8bE6319949411BD5A");
  flipBalance = flipBalance / 1e18;
  console.log('Flipporrr balance: ' + flipBalance.toString() + '$FTM'); //get treasury balances

  let xBooContract = await new web3.eth.Contract(XBOOABI, "0x399D73bB7c83a011cD85DF2a3CdF997ED3B3439f");
  let xBooBalance = await xBooContract.methods.balanceOf("0x5FC85515d6613164457724035413c5f8b2d899E5").call();
  let mirrorworldContract = await new web3.eth.Contract(MIRRORWORLDABI, "0xa48d959AE2E88f1dAA7D5F611E01908106dE7598");
  let xBooToBoo = await mirrorworldContract.methods.xBOOForBOO("100000000").call();
  xBooToBoo = xBooToBoo / 1e8
  xBooBalance = xBooBalance / 1e18;
  console.log('xBOO balance: ' + xBooBalance.toString() + '$xBOO'); //get treasury balances
  console.log('BOO balance: ' + xBooBalance*xBooToBoo.toString() + '$xBOO');
  let totalFTM = contractBalance + multisigBalance + flipBalance;
  //document.getElementById("ftmTB").innerHTML = totalFTM.toString(); //populate FTM treasury balance
  //document.getElementById("xbooTB").innerHTML = xBooBalance.toString(); //populate FTM treasury balance
  //console.log('populated treasury balances');
  //displayTokenName();
  //collapsible divs
  var coll = document.getElementsByClassName("collapsible");
  console.log(coll);
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
  //end collapsible
}

/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */


async function refreshAccountData() {

  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data
  document.querySelector("#connected").style.display = "none";
  document.querySelector("#prepare").style.display = "block";

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
  await fetchAccountData(provider);
  document.querySelector("#btn-connect").removeAttribute("disabled")
}

// "connect button"
async function onConnect() {

  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  fetchAccountData();

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });
  const element = document.getElementById('connectwarning');
  element.remove();
  const element2 = document.getElementById('connectwarning2');
  element2.remove();
}

// "disconnect button"
async function onDisconnect() {

  console.log("Killing the wallet connection", provider);

  // TODO: Which providers have close method?
  if(provider.close) {
    await provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavir.
    await web3Modal.clearCachedProvider();
    provider = null;
  }

  selectedAccount = null;

  // Set the UI back to the initial state
  document.querySelector("#prepare").style.display = "block";
  document.querySelector("#connected").style.display = "none";
}

// These set/swap chains immediately... useful later in this plethora of wtf
async function swapChain(network, hex) {
  try {
    // check if the chain to connect to is installed
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: hex }], // chainId must be in hexadecimal numbers
    });
  } catch (error) {
    // This error code indicates that the chain has not been added to MetaMask
    // if it is not, then install it into the user MetaMask
    if (error.code === 4902) {
      try {
        addNetwork(network);
      } catch (addError) {
        console.error(addError);
      }
    }
    console.error(error);
  }
}

async function swapToEth(hex) {
  try {
    // check if the chain to connect to is installed
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: hex }], // chainId must be in hexadecimal numbers
    });
  } catch (error) {
    // This error code indicates that the chain has not been added to MetaMask
    // It's Ethereum... it should be there.
   if (error.code === 4902) {
      try {
        console.log("ETH not installed??");
      } catch (addError) {
        console.error(addError);
      }
    }
    console.error(error);
  }
}

//after window is loaded completely
window.onload = function(){
  //hide the preloader
  $(".preloader").fadeOut(1000);
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
}

// fetch times from contract
async function fetchWeb3PSTime() {
  const web3 = new Web3("https://rpc.ftm.tools");
  //const web3 = new Web3("https://rpc.testnet.fantom.network/");
  let tokenContract = await new web3.eth.Contract(ABI, FTM_MAINCA);
  //let tokenContract = await new web3.eth.Contract(ABI, FTM_TESTCA);
  let timeOne = await tokenContract.methods.showPresaleStart().call();
  if(timeOne == 0) return countDownDate;
  return timeOne;
}

// fetch times from contract
async function fetchWeb3STime() {
  const web3 = new Web3("https://rpc.ftm.tools");
  //const web3 = new Web3("https://rpc.testnet.fantom.network/");
  let tokenContract = await new web3.eth.Contract(ABI, FTM_MAINCA);
  //let tokenContract = await new web3.eth.Contract(ABI, FTM_TESTCA);
  let timeOne = await tokenContract.methods.showStart().call();
  if(timeOne == 0) return countDownDate;
  return timeOne;
}

// Useful for later you'll see
let presaleStart;
let presaleEnd;

// Update the count down every 1 second
// rewritten to web2 => web3 via contract abi... using FTM for the web3
// all contracts will have same datum
/*
window.setInterval(async () => {

  presaleStart = await fetchWeb3PSTime();
  presaleEnd = await fetchWeb3STime();

  // Get today's date and time in seconds
  var timeMeow = new Date().getTime();
  timeMeow = parseInt(timeMeow/1000);

  // 3 html id's to replace
  var showTime;
  var showText;
  var buttonText;

  // set the variables
  if (presaleStart > timeMeow) {
    showTime = presaleStart;
    showText = "Presale Mint live in: ";
    buttonText = "Not Active";
  } else if (presaleEnd > timeMeow && timeMeow > presaleStart) {
    showTime = presaleEnd;
    showText = "WL Mint active, Mint live in: ";
    buttonText = "Mint 2";
  }

  // Find the distance between now and the count down date
  var distance = showTime - timeMeow;

  if (distance > 0) {
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (60 * 60 * 24));
    var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
    var minutes = Math.floor((distance % (60 * 60)) / (60));
    var seconds = Math.floor(distance % 60);

    // Display the results in the elements
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    document.getElementById("clockText").innerHTML = showText;
    document.getElementById("buttonText").innerHTML = buttonText;
  } else {
    // Display the "null" results in the elements
    document.getElementById("demo").innerHTML = " ";
    document.getElementById("clockText").innerHTML = " ";
    document.getElementById("buttonText").innerHTML = "Mint 1";
  }
}, 1000);
*/

// swaps background image depending on chain
function changeBG(param) {
  $("body").css("background-image", "url(./images/"+param+"_tbg.png)");
}

// web3 call() for how many have minted on that contract
async function queryMinted(contractAddress) {
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  //let value = await tokenContract.methods.minterCurrentMints().call();
  let value = await tokenContract.methods.totalSupply().call();
  console.log(value, "has been minted");
  return value;
}

// web3 call() for how many allowed to mint on that contract
async function queryAlloted(contractAddress) {
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  //let value = await tokenContract.methods.minterMaximumCapacity().call();
  let value = await tokenContract.methods.maxSupply().call();
  console.log(value, "to mint on this chain");
  return value;
}

// async to pull CA's
async function getCA() {

  // set locals
  let contractAddress;

  // web3
  const web3 = new Web3(provider);

  // Get account of the connected wallet (refresh)
  let accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];

  // chainId
  const chainId = await web3.eth.getChainId();

  // if-else if for chainID's aka to for Addresses
  if (chainId == 1) {
    contractAddress = ETH_MAINCA;
  } else if (chainId == 56) {
    contractAddress = BNB_MAINCA;
  } else if (chainId == 43114) {
    contractAddress = AVAX_MAINCA;
  } else if (chainId ==  137) {
    contractAddress = MATIC_MAINCA;
  } else if (chainId == 250) {
    contractAddress = FTM_MAINCA;
  } else if (chainId == 4) {
    contractAddress = ETH_TESTCA;
  } else if (chainId == 97) {
    contractAddress = BNB_TESTCA;
  } else if (chainId == 43113) {
    contractAddress = AVAX_TESTCA;
  } else if (chainId == 80001) {
    contractAddress = MATIC_TESTCA;
  } else if (chainId == 4002) {
    contractAddress = FTM_TESTCA;
  } else if (chainId == 10) {
    contractAddress = OP_MAINCA;
  } else if (chainId == 69) {
    contractAddress = OP_TESTCA;
  } else {
    console.log("The chainID", chainId, "has no CA set");
  }

  // return the address
  return contractAddress;
}

// puts the above together with innerHTML rewrite could go innerTEXT as well
async function setNumbers(address) {
  const FTMSCAN_API_KEY = 'J75A2G6SIAQ8FUBXN4D7ECIWGQTPCPU2KE';
  let startBlock = 25639393;

  let contractAddress = '0xf9e393CbD7e8F34FB87127195f1F74E699D3d595';
  let theCount = await queryMinted(contractAddress);
  let theTotal = await queryAlloted(contractAddress);
  //let theString = `${queryMinted}/${queryAlloted}`;
  //console.log(theString);
  //document.getElementById("count").innerHTML = theString;
  document.getElementById("count").innerHTML = theCount;
  document.getElementById("total").innerHTML = theTotal;

  let ca_micro = '0x90B93c7A6DbAeb685878f6fe712Fb0E1cF2babe4';
  let theMicroCount = await queryMinted(ca_micro);
  let totalShares = theCount + 2*(theMicroCount); //total shares
  console.log(totalShares);


  var ftmscan_query = `https://api.ftmscan.com/api?module=account&action=tokennfttx`
  + `&contractaddress=${contractAddress}&address=${address}&startblock=${startBlock}&endblock=999999999&sort=asc&apikey=${FTMSCAN_API_KEY}`
  // console.log(ftmscan_query)
  var result = await axios.get(ftmscan_query)
  .then(response => {
    // console.log('Axios got a response...');console.log(response);
    return response.data.result
  })
  .catch(error => {
    console.log(error)
  })

  var tokenList = []
  for (var t of result) {
    // Only filter where t.to is this address (t.from sends it away)
    if (t.to.toLowerCase() == address.toLowerCase()) {
      tokenList.push(t.tokenID)} //add token ID if incoming
    if (t.from.toLowerCase() == address.toLowerCase()) {
      var index = tokenList.indexOf(t.tokenID);
      if (index > -1) {tokenList.splice(index, 1)}}} //remove token ID if outgoing

  let Nb = tokenList.length;
  console.log(Nb);

  var ftmscan_query = `https://api.ftmscan.com/api?module=account&action=tokennfttx`
  + `&contractaddress=${ca_micro}&address=${address}&startblock=${startBlock}&endblock=999999999&sort=asc&apikey=${FTMSCAN_API_KEY}`
  // console.log(ftmscan_query)
  var result = await axios.get(ftmscan_query)
  .then(response => {
    // console.log('Axios got a response...');console.log(response);
    return response.data.result
  })
  .catch(error => {
    console.log(error)
  })

  var tokenList = []
  for (var t of result) {
    // Only filter where t.to is this address (t.from sends it away)
    if (t.to.toLowerCase() == address.toLowerCase()) {
      tokenList.push(t.tokenID)} //add token ID if incoming
    if (t.from.toLowerCase() == address.toLowerCase()) {
      var index = tokenList.indexOf(t.tokenID);
      if (index > -1) {tokenList.splice(index, 1)}}} //remove token ID if outgoing

  let Nm = tokenList.length;
  console.log(Nm);


  let sharePercent = 100*(Nb + 2*(Nm))/totalShares;
  console.log(sharePercent);

  document.getElementById("yourshare").innerHTML = `<h2>Your holdings represent a <em>${sharePercent.toFixed(4)}%</em> share of the BBC treasury</h2>`;





  }

// async to pull EP's
async function getEP() {

  // set locals
  let endpointAddress;

  // web3
  const web3 = new Web3(provider);

  // chainId
  const chainId = await web3.eth.getChainId();

  // if-else if for chainID's aka to for Addresses
  if (chainId == 1) {
    endpointAddress = ETH_EPMAIN;
  } else if (chainId == 56) {
    endpointAddress = BNB_EPMAIN;
  } else if (chainId == 43114) {
    endpointAddress = AVAX_EPMAIN;
  } else if (chainId ==  137) {
    endpointAddress = MATIC_EPMAIN;
  } else if (chainId == 250) {
    endpointAddress = FTM_EPMAIN;
  } else if (chainId == 4) {
    endpointAddress = ETH_EPTEST;
  } else if (chainId == 97) {
    endpointAddress = BNB_EPTEST;
  } else if (chainId == 43113) {
    endpointAddress = AVAX_EPTEST;
  } else if (chainId == 80001) {
    endpointAddress = MATIC_EPTEST;
  } else if (chainId == 4002) {
    endpointAddress = FTM_EPTEST;
  } else if (chainId == 10) {
    endpointAddress = OP_EPMAIN;
  } else if (chainId == 69) {
    endpointAddress = OP_EPTEST;
  } else {
    console.log("The chainID", chainId, "has no endpoint or CA set");
  }

  // return the address
  return endpointAddress;
}


//web3 mint from contract
async function mintBBC() {
  let contractAddress = '0xf9e393CbD7e8F34FB87127195f1F74E699D3d595'; //bbc_contract addy

  const web3 = new Web3(provider);

  // Get account of the connected wallet (refresh)
  let accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];

  // define tokenContract because why twice?
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let mintAmount = $('#Nmint').val();
  //let ftm = number * 45000000000000000000;
  //let value = await tokenContract.methods.mint([ftm.toString(), number.toString()]).send({ from: selectedAccount });
  // let value = await tokenContract.methods.mint([ftm.toString(), number.toString()]).send({ from: selectedAccount });
  //try AMGOTH way
  let cost = 45000000000000000000;
  let gasLimit = 285000;
  let totalCostWei = String(cost * mintAmount);
  let totalGasLimit = String(gasLimit * mintAmount);
  console.log("Cost: ", totalCostWei);
  console.log("Gas limit: ", totalGasLimit);
  let value= await tokenContract.methods
    .mint(mintAmount)
    .send({
      gasLimit: String(totalGasLimit),
      to: contractAddress,
      from: selectedAccount,
      value: totalCostWei,
    })
}
// web3 send() of both mint functions based off time, yes time
async function spawnTinyDaemon() {

  // set locals
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);

  // Get account of the connected wallet (refresh)
  let accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];

  // define tokenContract because why twice?
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);

  // current time -> seconds
  let timeMeow = new Date().getTime();
  timeMeow = parseInt(timeMeow/1000);

  // set the variables via if/else if/else
  if (presaleStart > timeMeow) {
    console.log("Can't mint broski time is", timeMeow, "and WL starts at", presaleStart);
  } else if (presaleEnd > timeMeow && timeMeow >= presaleStart) {
    let number = 2;
    let value = await tokenContract.methods.presaleMint(number).send({ from: selectedAccount });
    if (!value) {
      console.log("presaleMint(2) from", selectedAccount, "failed");
    }
  } else {
    let value = await tokenContract.methods.publicMint().send({ from: selectedAccount });
    if (!value) {
      console.log("publicMint() from", selectedAccount, "failed");
    }
  }
}


// web3 send() of traversing chains
async function traverseThis(tokenID, to) {

  // set locals
  let contractAddress = await getCA();
  let endpointAddress = await getEP();
  let tokenContract;
  let endpointContract;

  // web3
  const web3 = new Web3(provider);

  // Get account of the connected wallet (refresh)
  let accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];

  // set contracts
  endpointContract = await new web3.eth.Contract(ENDPOINT, endpointAddress);
  tokenContract = await new web3.eth.Contract(ABI, contractAddress);

  // bytes to send
  let payload = web3.eth.abi.encodeParameters(
                  ['address', 'uint16'],
                  [selectedAccount, tokenID]
                );
  console.log("The payload is", payload);
  let version = 1;
  let number = await tokenContract.methods.currentLZGas().call();
  if (!number) {
    console.log("currentLZGas().call() from", contractAddress, "failed");
  }
  console.log("Current LZ Gas from contract is", number);
  let adapterParams = web3.utils.encodePacked(
                        {value: version, type: 'uint16'},
                        {value: number, type: 'uint256'}
                      );
  console.log("Adapter Params is", adapterParams);

  // gas estimate call
  let amountToSend = await endpointContract
                             .methods
                             .estimateFees(
                                to,
                                contractAddress,
                                payload,
                                false,
                                adapterParams)
                             .call();
  if (!amountToSend) {
    console.log("estimateFees().call() from", endpointAddress, "failed");
  }
  console.log("Estimates fees are", amountToSend);

  // the transaction
  let value = await tokenContract
                  .methods
                  .traverseChains(
                     to,
                     tokenID
                  )
                  .send({
                     from: selectedAccount,
                     value: amountToSend[0]
                  })
                  .on(
                    'transactionHash',
                    function(hash) {
                      console.log(hash);
                    }
                  );
  if (!value) {
    console.log("traverseChains().send() from", selectedAccount, "failed");
  }
}

async function getChainID() {
  // web3
  const web3 = new Web3(provider);

  // chainId
  const chainId = await web3.eth.getChainId();

  return chainId;
}

// these are the primary swappers comment out main or test nets...
async function hitETH() {
  let value = "ETH";
  await swapToEth("0x1");
  //await swapToEth("0x4");
  displayTokenName();
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  //changeBG(value);
  //await setNumbers();
}

async function hitFTM() {
  let value = "FTM";
  await swapChain(FTM_M, "0xfa");
  //await swapChain(FTM_T, "0xfa2");
  displayTokenName();
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  //changeBG(value);
  //await setNumbers();
}

async function hitAVAX() {
  let value = "AVAX";
  await swapChain(AVAX_M, "0xA86A");
  //await swapChain(AVAX_T, "0xA869");
  displayTokenName();
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  //changeBG(value);
  //await setNumbers();
}

async function hitMATIC() {
  let value = "MATIC";
  await swapChain(MATIC_M, "0x89");
  //await swapChain(MATIC_T, "0x13881");
  displayTokenName();
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  //changeBG(value);
  //await setNumbers();
}

async function hitBNB() {
  let value = "BSC";
  await swapChain(BNB_M, "0x38");
  //await swapChain(BNB_T, "0x61");
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  //changeBG(value);
  //await setNumbers();
}

async function hitOP() {
  let value = "OP";
  await swapChain(BNB_M, "0xA");
  //await swapChain(BNB_T, "0x45");
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  //changeBG(value);
  //await setNumbers();
}

// JQuery function for #traversefrom
$(document).ready(async function() {
  $('#traversefrom').change(async function() {
     var value = $(this).val();
     // if-else if for swapping chains
     if (value == "ETH") {
       hitETH();
     } else if (value == "FTM") {
       hitFTM();
     } else if (value == "AVAX") {
       hitAVAX();
     } else if (value == "MATIC") {
       hitMATIC();
     } else if (value == "BSC") {
       hitBNB();
     } else if (value == "OP") {
       hitOP();
     }
  });
});

// the traverse function
async function traverseTinyDaemon() {
  // let's grab the values...
  let to = $('#traverseto').val();
  let tokenID = $('#tinydaemonid').val();

  //what to send
  traverseThis(tokenID, to);
}

// display proper token names for donate button
async function displayTokenName() {
  // locals
  let chainId = await getChainID();
  let displayName;

  // display names for the donate span
  if (chainId == 1 || chainId == 4) {
    displayName = "ETH";
  } else if (chainId == 43114 || chainId == 43113) {
    displayName = "AVAX";
  } else if (chainId == 56 || chainId == 97) {
    displayName = "BNB";
  } else if (chainId == 137 || chainId == 80001) {
    displayName = "MATIC";
  } else if (chainId == 250 || chainId == 4002) {
    displayName = "FTM";
  } else if (chainId == 10 || chainId == 69) {
    displayName = "OP";
  } else {
    displayName = "";
    console.log("We're not in Kansas anymore, Toto. You be on chain", chainId);
  }
  //document.getElementById("token").innerHTML = displayName;
}

// ready your breakfast and eat hardy, for tonight we eat ramen...
async function ramenIsOnTheMenu() {
  // locals
  let amount = $("#donationamount").val(); // in Tokens
  amount = amount * 10**18; // in Wei
  console.log("You are sending", amount);
  const web3 = new Web3(provider);
  let contractAddress = await getCA();
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);

  // the transaction
  let value = await tokenContract
                      .methods
                      .donate()
                      .send(
                         { from: selectedAccount,
                           value: amount });
  if (!value) {
    console.log("traverseChains().send() from", selectedAccount, "failed");
  }
}

async function refreshNFTs() {
  const web3 = new Web3(provider);
  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  await populateNFTs(selectedAccount);
  await populateMICROs(selectedAccount);
}

//BitDaemons loader
async function populateNFTs(address) {
  //if the div already exists, remove it (for wallet switching)
  if (document.contains(document.getElementById("galleryBD"))) {
            document.getElementById("galleryBD").remove();}

  const token_address = '0xf9e393CbD7e8F34FB87127195f1F74E699D3d595'
  const FTMSCAN_API_KEY = 'J75A2G6SIAQ8FUBXN4D7ECIWGQTPCPU2KE'
  // TODO: in the future, to see all NFTs, modify contractCreation and use 0
  let startBlock = 25639393 //just before minting
  //https://api.ftmscan.com/api?module=account&action=tokennfttx&contractaddress=0xBEa7c3F2D91a9c6fD7F5aA9c803d4C31C1dB8db9&address=0x27e9531d81E0D89CE04394E233d406256d66d36a&startblock=0&endblock=99999999&page=1&offset=100&sort=asc&apikey=J75A2G6SIAQ8FUBXN4D7ECIWGQTPCPU2KE
  const ftmscan_query = `https://api.ftmscan.com/api?module=account&action=tokennfttx`
  + `&contractaddress=${token_address}&address=${address}&startblock=${startBlock}&endblock=999999999&sort=asc&apikey=${FTMSCAN_API_KEY}`
  // console.log(ftmscan_query)
  const result = await axios.get(ftmscan_query)
  .then(response => {
    // console.log('Axios got a response...');console.log(response);
    return response.data.result
  })
  .catch(error => {
    console.log(error)
  })

  // console.log(result)
  console.log(result) //need to check!
  //let dictionary = {}
  let tokenList = []
  for (let t of result) {
    // Only filter where t.to is this address (t.from sends it away)
    if (t.to.toLowerCase() == address.toLowerCase()) {
      tokenList.push(t.tokenID)} //add token ID if incoming
    if (t.from.toLowerCase() == address.toLowerCase()) {
      const index = tokenList.indexOf(t.tokenID);
      if (index > -1) {tokenList.splice(index, 1)}}} //remove token ID if outgoing


  //const token_trx = Object.values(dictionary)
  console.log(tokenList)
  console.log(`${address} owns ${tokenList.length} BBChickens`)
  if (tokenList.length > 0) {
    var bdgallery = document.createElement('div')
    bdgallery.classList.add("mac-window", "centered")
    bdgallery.id = "galleryBD";
    document.getElementById('content-wrapper').appendChild(bdgallery)

    //var galleryCode = `<div class="mac-window-title"><span>BitDaemons</span></div>`;
    var galleryCode = `  <h3 class="collapsible">You own ${tokenList.length} BBChickens</h3>`;
    galleryCode += `<div class='content' id="bdboxes">`;
    //galleryCode += `<p class="example-left">👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹</p>`;
    //let i = 0;
    for(let i = 0; i < tokenList.length; i++){
      galleryCode += `
      <div id="bbc-${tokenList[i]}" class="infobox">
        <p><img alt="BBC_${tokenList[i]}" src="./images/BBChickens/${tokenList[i]}.jpg" /></p>
        <p>BBChicken #${tokenList[i]}</p>
        <div class="content-row">
        <div class="button-row">
        <a class="big-icon" href="https://paintswap.finance/marketplace/assets/${token_address}/${tokenList[i]}" target="_blank" rel="noreferrer noopener">
        <img src="./images/PSlogo.png" alt="paintswap" /></a>
        <a class="big-icon" href="https://ipfs.io/ipfs/QmX7b8gR3aE713mY9tNiW655F1Q83Jn8rVa3CpDt6AhaTK/${tokenList[i]}.json" target="_blank" rel="noreferrer noopener">
        <img src="./images/ftmscan_logo.svg" alt="ftmscan" /></a>
        <a class="big-icon" href="https://nftkey.app/collections/bbchickens/token-details/?tokenId=${tokenList[i]}" target="_blank" rel="noreferrer noopener">
        <img src="./images/nftkey_logo.png" alt="nftkey" /></a>
        </div>
        </div>
      </div>
      `;
     }
     //galleryCode += `</div>`;
     //console.log(galleryCode);
     bdgallery.innerHTML = galleryCode
  }
}

async function populateMICROs(address) {
  //if the div already exists, remove it (for wallet switching)
  if (document.contains(document.getElementById("galleryMR"))) {
            document.getElementById("galleryMR").remove();}

  const token_address = '0x90B93c7A6DbAeb685878f6fe712Fb0E1cF2babe4'
  const FTMSCAN_API_KEY = 'J75A2G6SIAQ8FUBXN4D7ECIWGQTPCPU2KE'
  // TODO: in the future, to see all NFTs, modify contractCreation and use 0
  let startBlock = 25639393 //just before minting
  //https://api.ftmscan.com/api?module=account&action=tokennfttx&contractaddress=0xBEa7c3F2D91a9c6fD7F5aA9c803d4C31C1dB8db9&address=0x27e9531d81E0D89CE04394E233d406256d66d36a&startblock=0&endblock=99999999&page=1&offset=100&sort=asc&apikey=J75A2G6SIAQ8FUBXN4D7ECIWGQTPCPU2KE
  const ftmscan_query = `https://api.ftmscan.com/api?module=account&action=tokennfttx`
  + `&contractaddress=${token_address}&address=${address}&startblock=${startBlock}&endblock=999999999&sort=asc&apikey=${FTMSCAN_API_KEY}`
  // console.log(ftmscan_query)
  const result = await axios.get(ftmscan_query)
  .then(response => {
    // console.log('Axios got a response...');console.log(response);
    return response.data.result
  })
  .catch(error => {
    console.log(error)
  })

  // console.log(result)
  console.log(result) //need to check!
  //let dictionary = {}
  let tokenList = []
  for (let t of result) {
    // Only filter where t.to is this address (t.from sends it away)
    if (t.to.toLowerCase() == address.toLowerCase()) {
      tokenList.push(t.tokenID)} //add token ID if incoming
    if (t.from.toLowerCase() == address.toLowerCase()) {
      const index = tokenList.indexOf(t.tokenID);
      if (index > -1) {tokenList.splice(index, 1)}}} //remove token ID if outgoing


  //const token_trx = Object.values(dictionary)
  console.log(tokenList)
  console.log(`${address} owns ${tokenList.length} MicroRoosters`)
  if (tokenList.length > 0) {
    var bdgallery = document.createElement('div')
    bdgallery.classList.add("mac-window", "centered")
    bdgallery.id = "galleryMR";
    document.getElementById('content-wrapper2').appendChild(bdgallery)

    //var galleryCode = `<div class="mac-window-title"><span>BitDaemons</span></div>`;
    var galleryCode = `  <h3 class="collapsible">You own ${tokenList.length} MicroRoosters</h3>`;
    galleryCode += `<div class='content' id="bdboxes">`;
    //create contract instance
    //const Web3 = require('web3');
// web3 lib instance
    const web3 = new Web3(window.ethereum);
// get all accounts
    const microcontract = new web3.eth.Contract(MICROABI, token_address);
    //galleryCode += `<p class="example-left">👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹 The OG interstellar interlopers 👹</p>`;
    //let i = 0;
    for(let i = 0; i < tokenList.length; i++){
      //extras for reading directly from contract
      let tokenMetadataURI = await microcontract.methods.tokenURI(tokenList[i]).call();
      let tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json());
      console.log(tokenMetadata["image"]);
      //back to normal
      galleryCode += `
      <div id="bbc-${tokenList[i]}" class="infobox">
        <p><img alt="BBC_${tokenList[i]}" src="${tokenMetadata["image"]}" /></p>
        <p>MicroRooster #${tokenList[i]}</p>
        <div class="content-row">
        <div class="button-row">
        <a class="big-icon" href="https://paintswap.finance/marketplace/assets/${token_address}/${tokenList[i]}" target="_blank" rel="noreferrer noopener">
        <img src="./images/PSlogo.png" alt="paintswap" /></a>
        <a class="big-icon" href="https://ipfs.io/ipfs/QmX7b8gR3aE713mY9tNiW655F1Q83Jn8rVa3CpDt6AhaTK/${tokenList[i]}.json" target="_blank" rel="noreferrer noopener">
        <img src="./images/ftmscan_logo.svg" alt="ftmscan" /></a>
        <a class="big-icon" href="https://nftkey.app/collections/bbchickens/token-details/?tokenId=${tokenList[i]}" target="_blank" rel="noreferrer noopener">
        <img src="./images/nftkey_logo.png" alt="nftkey" /></a>
        </div>
        </div>
      </div>
      `;
     }
     //galleryCode += `</div>`;
     //console.log(galleryCode);
     bdgallery.innerHTML = galleryCode
  }
}


let timeRequested = 0;

// master event listener... combines all the shit above.
window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
  //document.querySelector("#btn-refreshNFTs").addEventListener("click", refreshNFTs);
  //document.querySelector("#ETH").addEventListener("click", hitETH);
  //document.querySelector("#FTM").addEventListener("click", hitFTM);
  //document.querySelector("#AVAX").addEventListener("click", hitAVAX);
  //document.querySelector("#MATIC").addEventListener("click", hitMATIC);
  //document.querySelector("#BSC").addEventListener("click", hitBNB);
  //document.querySelector("#OP").addEventListener("click", hitOP);
  document.querySelector("#btn-mint").addEventListener("click", mintBBC);
  //document.querySelector("#btn-buyNFT").addEventListener("click", spawnTinyDaemon);
  //document.querySelector("#btn-traverseNFT").addEventListener("click", traverseTinyDaemon);
  //document.querySelector("#btn-Donate").addEventListener("click", ramenIsOnTheMenu);

});
