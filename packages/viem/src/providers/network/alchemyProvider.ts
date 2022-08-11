import { AlchemyChain } from '../../chains'
import { JsonRpcProvider, jsonRpcProvider } from './jsonRpcProvider'

export type AlchemyProviderConfig = {
  /**
   * An Alchemy API Key. If not provided, viem will
   * default to the public Alchemy API Key. To prevent,
   * rate-limiting, you must provide your own API Key.
   * One can be created at https://dashboard.alchemyapi.io/.
   * */
  apiKey?: string
  /**
   * The chain that the provider should connect to. Only
   * the chains that Alchemy supports can be provided.
   */
  chain: AlchemyChain
}

export type AlchemyProvider = JsonRpcProvider<AlchemyChain>

const defaultAlchemyApiKey = '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC'

/** @description Connects to the Alchemy JSON-RPC API.  */
export function alchemyProvider({
  apiKey = defaultAlchemyApiKey,
  chain,
}: AlchemyProviderConfig): AlchemyProvider {
  return jsonRpcProvider({
    chain,
    id: 'alchemy',
    name: 'Alchemy',
    url: `${chain.rpcUrls.alchemy}/${apiKey}`,
  })
}