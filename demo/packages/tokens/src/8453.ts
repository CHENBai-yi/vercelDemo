/*
 * @Author: sh ylmskj21@gmail.com
 * @Date: 2023-07-25 19:01:06
 * @LastEditors: Q
 * @LastEditTime: 2023-07-30 15:54:20
 * @FilePath: \tokenv2\packages\tokens\src\8453.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ChainId, Token, WBNB } from '@pancakeswap/sdk'

export const BASETokens = {
  WETH: new Token(
    1116,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'WETH',
    'https://pancakeswap.finance/',
  ),
}
