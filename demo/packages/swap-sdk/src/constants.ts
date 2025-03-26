import JSBI from 'jsbi'
import { Token } from './entities/token'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  ETHEREUM = 1,
  RINKEBY = 4,
  GOERLI = 5,
  BSC = 56,
  BSC_TESTNET = 97,
  AVALANCHE = 43114,
  POLYGON = 137,
  OPTIMISM = 10,
  DOGECHAIN = 2000,
  OKXCHAIN = 66,
  MBKCHAIN = 12133,
  ETCCHAIN = 61,
  ETHW = 10001,
  ETF = 513100,
  ARB = 42161,
  CORE = 1116,
  BASE = 8453,
  opBNB = 204,
  HECO = 128,
  PEGO = 20201022,
  OKB = 196,
  APE = 33139,
  SEPOLIA = 11155111,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}

export const FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'

// // TODO: ETH This is test version, do not depends on it
const FACTORY_ADDRESS_ETH = '0xD93801d7D3a368D94A3A32E97A20f7aC1948a5dB'
// const FACTORY_ADDRESS_ETH = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  // [ChainId.ETHEREUM]: FACTORY_ADDRESS_ETH,
  [ChainId.ETHEREUM]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.RINKEBY]: FACTORY_ADDRESS_ETH,
  [ChainId.GOERLI]: FACTORY_ADDRESS_ETH,
  [ChainId.BSC]: FACTORY_ADDRESS,
  [ChainId.BSC_TESTNET]: '0x6725f303b657a9451d8ba641348b6761a6cc7a17',
  [ChainId.ARB]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [ChainId.CORE]: '0x425E4b9f455849671De93d02A2D6eb132355274E',
  [ChainId.MBKCHAIN]: '0x872CF2b748E594d766500f75005E9Cd7E59508a7',
  [ChainId.BASE]: '0xd16e3763db63761cd5b38214edc062fb43776ca3',
  [ChainId.opBNB]: '0xd50aaE6C73E2486B0Da718D23F35Dcf5aad25911',
  [ChainId.HECO]: '0xb0b670fc1F7724119963018DB0BfA86aDb22d941',
  [ChainId.PEGO]: '0x94274b1Ed6E1BDe55fa631f502Aa18512Aa3007b',
  [ChainId.OKB]: '0xa7afb6163c331ddb0845843889d6f9544328846f',
  [ChainId.APE]: '0x06f2b773a8dD3021e51FC024BeE1e942b796BEe7',
  [ChainId.SEPOLIA]: '0x9a2E752a6b8e80bDa9e12A393F6bd269CD97F6b8',
  [ChainId.POLYGON]: '0x9e5A52f57b3038F1B8EeE45F28b3C1967e22799C',
}
export const INIT_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'

const INIT_CODE_HASH_ETH = '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d'
export const INIT_CODE_HASH_MAP: Record<number, string> = {
  // [ChainId.ETHEREUM]: INIT_CODE_HASH_ETH,
  [ChainId.ETHEREUM]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  [ChainId.RINKEBY]: INIT_CODE_HASH_ETH,
  [ChainId.GOERLI]: INIT_CODE_HASH_ETH,
  [ChainId.BSC]: INIT_CODE_HASH,
  // [ChainId.MBKCHAIN]: INIT_CODE_HASH,
  [ChainId.MBKCHAIN]: '0xa5934690703a592a07e841ca29d5e5c79b5e22ed4749057bb216dc31100be1c0',
  [ChainId.BSC_TESTNET]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
  [ChainId.ARB]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.CORE]: '0x5bc0c987398ee8f9be4436590a75eab19e9feb184d6cea41867f8805b6d0f2bb',
  [ChainId.BASE]: '0x6c758b28009887c7a79e6472ce2aedfd8af5f34b2a321ee81ed090cebe5256aa',
  [ChainId.opBNB]: '0x6c758b28009887c7a79e6472ce2aedfd8af5f34b2a321ee81ed090cebe5256aa',
  [ChainId.HECO]: '0x2ad889f82040abccb2649ea6a874796c1601fb67f91a747a80e08860c73ddf24',
  [ChainId.PEGO]: '0x6e9d1a9446dcdf45071ca6c9bedfdfa09b568b1a208558039c34e9aa660bb9da',
  [ChainId.OKB]: '0xb79803c7b3e6448ffb477bfb01feef39c5f9e33a23c5e1c3c444426561221cf5',
  [ChainId.APE]: '0x09c30db4dd75533e64762cbd9a31f900a39da5ae8f187c28b1cb56a2c222fe06',
  [ChainId.SEPOLIA]: '0xda9dd58cb2c2ee6d8c17aee1c79bcbd39b94f709ed1a9059234ed5158de8ffb9',
  [ChainId.POLYGON]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _9975 = JSBI.BigInt(9975)
export const _10000 = JSBI.BigInt(10000)

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}

export const WETH9 = {
  [ChainId.ETHEREUM]: new Token(
    ChainId.ETHEREUM,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.RINKEBY]: new Token(
    ChainId.RINKEBY,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.GOERLI]: new Token(
    ChainId.GOERLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.ARB]: new Token(
    ChainId.ARB,
    '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.CORE]: new Token(
    ChainId.CORE,
    '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.BASE]: new Token(
    ChainId.BASE,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.PEGO]: new Token(
    ChainId.PEGO,
    '0x0cf4071940782b640d0b595cb17bdf3e90869d70',
    18,
    'WPG',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.OKB]: new Token(
    ChainId.OKB,
    '0xe538905cf8410324e03A5A23C1c177a474D59b2b',
    18,
    'WOKB',
    'OKB',
    'https://weth.io'
  ),
  [ChainId.APE]: new Token(
    ChainId.APE,
    '0x48b62137EdfA95a428D35C09E44256a739F6B557',
    18,
    'WAPE',
    'APE',
    'https://weth.io'
  ),
  [ChainId.SEPOLIA]: new Token(
    ChainId.SEPOLIA,
    '0xD16E3763Db63761CD5b38214EdC062FB43776CA3',
    18,
    'WETH',
    'WETH',
    'https://weth.io'
  ),
  [ChainId.POLYGON]: new Token(
    ChainId.POLYGON,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WPOL',
    'WPOL',
    'https://weth.io'
  ),
}

export const WBNB = {
  [ChainId.ETHEREUM]: new Token(
    ChainId.ETHEREUM,
    '0x418D75f65a02b3D53B2418FB8E1fe493759c7605',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC]: new Token(
    ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.ARB]: WETH9[ChainId.ARB],
  [ChainId.CORE]: WETH9[ChainId.CORE],
  [ChainId.BASE]: WETH9[ChainId.BASE],
  [ChainId.PEGO]: WETH9[ChainId.PEGO],
  [ChainId.OKB]: WETH9[ChainId.OKB],
  [ChainId.APE]: WETH9[ChainId.APE],
  [ChainId.SEPOLIA]: WETH9[ChainId.SEPOLIA],
  [ChainId.POLYGON]: WETH9[ChainId.POLYGON],
}

export const WNATIVE: Record<number, Token> = {
  [ChainId.ETHEREUM]: WETH9[ChainId.ETHEREUM],
  [ChainId.RINKEBY]: WETH9[ChainId.RINKEBY],
  [ChainId.GOERLI]: WETH9[ChainId.GOERLI],
  [ChainId.BSC]: WBNB[ChainId.BSC],
  [ChainId.BSC_TESTNET]: WBNB[ChainId.BSC_TESTNET],
  [ChainId.ARB]: WETH9[ChainId.ARB],
  [ChainId.CORE]: WETH9[ChainId.CORE],
  [ChainId.BASE]: WETH9[ChainId.BASE],
  [ChainId.PEGO]: WETH9[ChainId.PEGO],
  [ChainId.OKB]: WETH9[ChainId.OKB],
  [ChainId.APE]: WETH9[ChainId.APE],
  [ChainId.SEPOLIA]: WETH9[ChainId.SEPOLIA],
  [ChainId.POLYGON]: WETH9[ChainId.POLYGON],
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.ETHEREUM]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  [ChainId.RINKEBY]: { name: 'Rinkeby Ether', symbol: 'RIN', decimals: 18 },
  [ChainId.GOERLI]: { name: 'Goerli Ether', symbol: 'GOR', decimals: 18 },
  [ChainId.BSC]: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  [ChainId.BSC_TESTNET]: {
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
    decimals: 18,
  },
  [ChainId.ARB]: {
    name: 'eth Token',
    symbol: 'ETH',
    decimals: 18,
  },
  [ChainId.CORE]: {
    name: 'core Token',
    symbol: 'CORE',
    decimals: 18,
  },
  [ChainId.BASE]: {
    name: 'eth Token',
    symbol: 'ETH',
    decimals: 18,
  },
  [ChainId.PEGO]: {
    name: 'PEGO',
    symbol: 'PEGO',
    decimals: 18,
  },
  [ChainId.OKB]: {
    name: 'OKB',
    symbol: 'OKB',
    decimals: 18,
  },
  [ChainId.APE]: {
    name: 'APE',
    symbol: 'APE',
    decimals: 18,
  },
  [ChainId.SEPOLIA]: {
    name: 'SEPOLIAETH',
    symbol: 'SEPETH',
    decimals: 18,
  },
  [ChainId.POLYGON]: {
    name: 'POLYGON',
    symbol: 'POL',
    decimals: 18,
  },
}
