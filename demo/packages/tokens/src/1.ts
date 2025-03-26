/*
 * @Author: sh ylmskj21@gmail.com
 * @Date: 2023-07-24 19:16:05
 * @LastEditors: sh ylmskj21@gmail.com
 * @LastEditTime: 2023-07-25 13:33:07
 * @FilePath: \tokenv2\packages\tokens\src\1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ChainId, Token, WBNB } from '@pancakeswap/sdk'
import { BUSD_TESTNET, CAKE_TESTNET } from './common'

export const ethTokens = {
  WETH: new Token(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'WETH', 'https://pancakeswap.finance/'),

  // wbtc: new Token(ChainId.BSC_TESTNET, '0xfC8bFbe9644e1BC836b8821660593e7de711e564', 18, 'WBTC', 'Wrapped BTC'),
}
