import { InjectedConnector } from "@web3-react/injected-connector";
// import { NetworkConnector } from '@web3-react/network-connector'
import { NetworkConnector } from "connectors/network";
import { BscConnector } from "connectors/binance";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
// import { LedgerConnector } from '@web3-react/ledger-connector'
// import { LatticeConnector } from '@web3-react/lattice-connector'
// import { FrameConnector } from '@web3-react/frame-connector'
// import { AuthereumConnector } from '@web3-react/authereum-connector'
// import { TorusConnector } from '@web3-react/torus-connector'
// import { RpcUrlMap } from 'types/Chain'

import { chainIds, rpcs } from "config/chains";
import { defaultChainId } from "config/app";

export const injected = new InjectedConnector({ supportedChainIds: chainIds });

export const anonymous = new NetworkConnector({
	urls: rpcs,
	supportedChainIds: chainIds,
	defaultChainId,
});

export const key = new NetworkConnector({
	urls: rpcs,
	supportedChainIds: chainIds,
	defaultChainId,
});

export const walletconnect = new WalletConnectConnector({
	rpc: rpcs,
	qrcode: true,
});

export const walletlink = new WalletLinkConnector({
	url: rpcs[1],
	appName: "SmartContract UI",
	supportedChainIds: chainIds,
});

export const binance = new BscConnector({
	supportedChainIds: [1, 56, 97],
});

// export const ledger = new LedgerConnector({
//   chainId: 1,
//   url: rpcs[1],
//   pollingInterval: POLLING_INTERVAL
// })

// export const lattice = new LatticeConnector({
//   chainId: 4,
//   appName: 'web3-react',
//   url: rpcs[4]
// })

// export const frame = new FrameConnector({ supportedChainIds: chainIds })

// export const authereum = new AuthereumConnector({ chainId: 42 })

// export const torus = new TorusConnector({ chainId: 1 })
