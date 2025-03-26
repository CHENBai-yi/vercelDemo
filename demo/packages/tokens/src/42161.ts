import { ChainId, Token, WBNB } from '@pancakeswap/sdk'
import { BUSD_TESTNET, CAKE_TESTNET } from './common'

export const arbTokens = {
  WETH: new Token(
    42161,
    '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    18,
    'WETH',
    'WETH',
    'https://pancakeswap.finance/',
  ),

  // wbtc: new Token(ChainId.BSC_TESTNET, '0xfC8bFbe9644e1BC836b8821660593e7de711e564', 18, 'WBTC', 'Wrapped BTC'),
}
