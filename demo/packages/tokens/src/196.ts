import { ChainId, Token, WBNB } from '@pancakeswap/sdk'
import { BUSD_TESTNET, CAKE_TESTNET } from './common'

export const okbTokens = {
  WETH: new Token(
    196,
    '0xe538905cf8410324e03A5A23C1c177a474D59b2b',
    18,
    'WOKB',
    'WOKB',
    'https://pancakeswap.finance/',
  ),

  // wbtc: new Token(ChainId.BSC_TESTNET, '0xfC8bFbe9644e1BC836b8821660593e7de711e564', 18, 'WBTC', 'Wrapped BTC'),

  // [ChainId.OKB]: new Token(
  //     ChainId.OKB,
  //     '0xe538905cf8410324e03A5A23C1c177a474D59b2b',
  //     18,
  //     'WOKB',
  //     'OKB',
  //     'https://weth.io'
  // ),
}
