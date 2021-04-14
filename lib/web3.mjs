import Web3 from 'web3';
import config from '../config.mjs';

const web3 = new Web3(new Web3.providers.HttpProvider(config.httpProvider));

export default web3;
