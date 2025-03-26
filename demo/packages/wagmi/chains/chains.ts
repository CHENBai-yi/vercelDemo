// import { rinkeby, mainnet, goerli } from 'wagmi/chains'
import { Chain } from 'wagmi'

export const avalandche: Chain = {
  id: 43114,
  name: 'Avalanche C-Chain',
  network: 'avalanche',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://snowtrace.io/',
    },
  },
}

export const ploygon: Chain = {
  id: 137,
  name: 'Polygon Mainnet',
  network: 'polygon',
  rpcUrls: {
    default: 'https://tame-frequent-fog.matic.quiknode.pro/774f0081965a0e9378059e0622c2a584fb8859f2',
  },
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'polygonscan',
      url: 'https://polygonscan.com',
    },
  },
}

export const optimism: Chain = {
  id: 10,
  name: 'Optimism',
  network: 'Optimism',
  rpcUrls: {
    default: 'https://mainnet.optimism.io/',
  },
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'etherscan',
      url: 'https://optimistic.etherscan.io',
    },
  },
}

export const dogechain: Chain = {
  id: 2000,
  name: 'Dogechain Mainnet',
  network: 'DC',
  rpcUrls: {
    default: 'https://rpc-sg.dogechain.dog',
  },
  nativeCurrency: { name: 'Dogecoin', symbol: 'DOGE', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'dogechain explorer',
      url: 'https://explorer.dogechain.dog',
    },
  },
}

export const okxChain: Chain = {
  id: 66,
  name: 'OKXChain Mainnet',
  network: 'okxchain',
  rpcUrls: {
    default: 'https://exchainrpc.okex.org',
  },
  nativeCurrency: { name: 'OKXChain Global Utility Token', symbol: 'OKT', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'OKLink',
      url: 'https://www.oklink.com/en/okc',
    },
  },
}

export const mbkChain: Chain = {
  id: 12133,
  name: 'MBK Chain Mainnet',
  network: 'mbk',
  rpcUrls: {
    default: 'https://rpcm.mbkscan.com',
  },
  nativeCurrency: { name: 'MBK', symbol: 'MBK', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'mbk',
      url: 'https://www.mbkscan.com/',
    },
  },
}

export const etcChain: Chain = {
  id: 61,
  name: 'Ethereum Classic Mainnet',
  network: 'ETC',
  rpcUrls: {
    default: 'https://www.ethercluster.com/etc',
  },
  nativeCurrency: { name: 'Ethereum Classic Ether', symbol: 'ETC', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'blockscout',
      url: 'https://blockscout.com/etc/mainnet',
    },
  },
}

export const ETHW: Chain = {
  id: 10001,
  name: 'ETHW-mainnet',
  network: 'ETHW',
  rpcUrls: {
    default: 'https://mainnet.ethereumpow.org',
  },
  nativeCurrency: { name: 'ETHW', symbol: 'ETHW', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'ETHW',
      url: 'https://mainnet.ethwscan.com',
    },
  },
}

export const ETF: Chain = {
  id: 513100,
  name: 'ETF-mainnet',
  network: 'ETF',
  rpcUrls: {
    default: 'https://rpc.etherfair.org',
  },
  nativeCurrency: { name: 'ETF', symbol: 'ETF', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'ETF',
      url: 'https://explorer.etherfair.org',
    },
  },
}

export const avalandcheFuji: Chain = {
  id: 43113,
  name: 'Avalanche Fuji',
  network: 'avalanche-fuji',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche_fuji',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://testnet.snowtrace.io/',
    },
  },
  testnet: true,
}

export const fantomOpera: Chain = {
  id: 250,
  name: 'Fantom Opera',
  network: 'fantom',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.ftm.tools',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://ftmscan.com',
    },
  },
}

export const fantomTestnet: Chain = {
  id: 4002,
  name: 'Fantom Testnet',
  network: 'fantom-testnet',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.testnet.fantom.network',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://testnet.ftmscan.com',
    },
  },
  testnet: true,
}

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }

export const bsc: Chain = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  rpcUrls: {
    public: 'https://bsc-dataseed1.binance.org',
    default: 'https://bsc-dataseed3.ninicoin.io',
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 15921452,
  },
}

export const bscTest: Chain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
  },
  rpcUrls: {
    public: 'https://data-seed-prebsc-2-s1.binance.org:8545/',
    default: 'https://data-seed-prebsc-2-s1.binance.org:8545/',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 17422483,
  },
  testnet: true,
}

export const CORE: Chain = {
  id: 1116,
  name: 'CORE',
  network: 'CORE',
  nativeCurrency: { name: 'CORE', symbol: 'CORE', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.coredao.org/',
  },
  blockExplorers: {
    default: {
      name: 'CORE',
      url: 'https://scan.coredao.org',
    },
  },
  testnet: true,
}

export const ARB: Chain = {
  id: 42161,
  name: 'Arbitrum',
  network: 'Arbitrum',
  rpcUrls: {
    default: 'https://arb1.arbitrum.io/rpc',
  },
  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'ARB',
      url: 'https://arbiscan.io',
    },
  },
}

export const SVB: Chain = {
  id: 7899,
  name: 'svb',
  network: 'svb',
  rpcUrls: {
    default: 'https://sv.svchain.link',
  },
  nativeCurrency: { name: 'SVB', symbol: 'SVB', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'SVB',
      url: 'https://www.svchain.link',
    },
  },
}

export const mainnet: Chain = {
  id: 1,
  name: 'ETH',
  network: 'ETH',
  rpcUrls: {
    default: 'https://virginia.rpc.blxrbdn.com',
  },
  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'ETH',
      url: 'https://etherscan.io/',
    },
  },
}

export const MBK: Chain = {
  id: 12133,
  name: 'MBK',
  network: 'MBK',
  rpcUrls: {
    default: 'https://rpcm.mbkscan.com/',
  },
  nativeCurrency: { name: 'MBK', symbol: 'MBK', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'MBK',
      url: ' https://www.mbkscan.com/',
    },
  },
}

export const BASE: Chain = {
  id: 8453,
  name: 'BASE',
  network: 'BASE',
  rpcUrls: {
    default: 'https://developer-access-mainnet.base.org',
  },
  nativeCurrency: { name: 'BASE', symbol: 'BASE', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'BASE',
      url: 'https://basescan.org/',
    },
  },
}

export const opBNB: Chain = {
  id: 204,
  name: 'opBNB',
  network: 'opBNB',
  rpcUrls: {
    default: 'https://opbnb-mainnet-rpc.bnbchain.org/',
  },
  nativeCurrency: { name: 'opBNB', symbol: 'opBNB', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'opBNB',
      url: 'https://mainnet.opbnbscan.com/',
    },
  },
}

export const HECO: Chain = {
  id: 128,
  name: 'HECO',
  network: 'HECO',
  rpcUrls: {
    default: 'https://http-mainnet-node.huobichain.com',
  },
  nativeCurrency: { name: 'HECO', symbol: 'HECO', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'HECO',
      url: 'https://www.hecoinfo.com/',
    },
  },
}

export const PEGO: Chain = {
  id: 20201022,
  name: 'PEGO',
  network: 'PEGO',
  rpcUrls: {
    default: 'https://pegorpc.com',
  },
  nativeCurrency: { name: 'PEGO', symbol: 'PEGO', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'PEGO',
      url: 'https://scan.pego.network',
    },
  },
}

export const OKB: Chain = {
  id: 196,
  name: 'OKBChain (X layer)',
  network: 'OKB',
  rpcUrls: {
    default: 'https://rpc.x1.tech',
  },
  nativeCurrency: { name: 'OKB', symbol: 'OKB', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'OKB',
      url: 'https://www.oklink.com/cn/xlayer',
    },
  },
}

export const APE: Chain = {
  id: 33139,
  name: 'APECHAIN',
  network: 'APE',
  rpcUrls: {
    default: 'https://apechain.calderachain.xyz/http',
  },
  nativeCurrency: { name: 'APE', symbol: 'APE', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'APE',
      url: 'https://apescan.io/',
    },
  },
}

export const SEPOLIA: Chain = {
  id: 11155111,
  name: 'SEPOLIA',
  network: 'SEPOLIA',
  rpcUrls: {
    default: 'https://rpc.sepolia.org',
  },
  nativeCurrency: { name: 'SepoliaETH', symbol: 'SepoliaETH', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'SepoliaETH',
      url: 'https://sepolia.etherscan.io/',
    },
  },
}
// export { rinkeby, mainnet, goerli }
