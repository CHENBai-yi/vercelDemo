import { ChainId, Token, WBNB } from '@pancakeswap/sdk'
import { BUSD_TESTNET, CAKE_TESTNET } from './common'

export const sepTokens = {
  WETH: new Token(
    11155111,
    '0xD16E3763Db63761CD5b38214EdC062FB43776CA3',
    18,
    'WETH',
    'WETH',
    'https://pancakeswap.finance/',
  ),

  // wbtc: new Token(ChainId.BSC_TESTNET, '0xfC8bFbe9644e1BC836b8821660593e7de711e564', 18, 'WBTC', 'Wrapped BTC'),
}
