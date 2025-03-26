/*
 * @Author: sh ylmskj21@gmail.com
 * @Date: 2023-07-25 19:01:06
 * @LastEditors: sh ylmskj21@gmail.com
 * @LastEditTime: 2023-07-27 11:43:06
 * @FilePath: \tokenv2\packages\tokens\src\1116.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ChainId, Token, WBNB } from '@pancakeswap/sdk'

export const coreTokens = {
  WETH: new Token(
    1116,
    '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f',
    18,
    'WCORE',
    'WCORE',
    'https://pancakeswap.finance/',
  ),
}
