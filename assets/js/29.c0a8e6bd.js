(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{294:function(t,e,a){"use strict";a.r(e);var i=a(22),r=Object(i.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"supported-bips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-bips","aria-hidden":"true"}},[t._v("#")]),t._v(" Supported BIPs")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/using-wasabi/BIP.html#what-is-supported-today"}},[t._v("What is supported today")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/using-wasabi/BIP.html#what-will-be-supported-in-twoweeks"}},[t._v("What will be supported in #twoweeks")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/using-wasabi/BIP.html#what-is-not-supported"}},[t._v("What is not supported")])],1)]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Wasabi Wallet strives toward establishing solid industry best practices and standards.\nHere is a list of all the supported and integrated Bitcoin Improvement Proposals:")]),t._v(" "),a("h2",{attrs:{id:"what-is-supported-today"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-supported-today","aria-hidden":"true"}},[t._v("#")]),t._v(" What is supported today")]),t._v(" "),a("details",{attrs:{id:"bip-21-uri-scheme"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-21-uri-scheme","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 21: URI Scheme")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 21: URI Scheme"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-32-hierarchical-deterministic-wallets"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-32-hierarchical-deterministic-wallets","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 32: Hierarchical Deterministic Wallets")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 32: Hierarchical Deterministic Wallets"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-38-password-protected-private-key"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-38-password-protected-private-key","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 38: Password-Protected Private Key")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 38: Password-Protected Private Key"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-39-mnemonic-code-for-generating-deterministic-keys"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-39-mnemonic-code-for-generating-deterministic-keys","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 39: Mnemonic Code for Generating Deterministic Keys")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 39: Mnemonic Code for Generating Deterministic Keys"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-44-multi-account-hierarchy-for-deterministic-wallets"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-44-multi-account-hierarchy-for-deterministic-wallets","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 44: Multi-Account Hierarchy for Deterministic Wallets")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 44: Multi-Account Hierarchy for Deterministic Wallets"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-72-bitcoin-uri-extensions-for-payment-protocol"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-72-bitcoin-uri-extensions-for-payment-protocol","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 72: bitcoin: uri extensions for Payment Protocol")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0072.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 72: bitcoin: uri extensions for Payment Protocol"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-84-derivation-scheme-for-p2wpkh-based-accounts"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-84-derivation-scheme-for-p2wpkh-based-accounts","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 84: Derivation scheme for P2WPKH Based Accounts")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/using-wasabi/BIP.html#bip-84-derivation-scheme-for-p2wpkh-based-accounts"}},[t._v("BIP 84")]),t._v(" defines a standard derivation scheme for hierarchical deterministic wallets BIP 32, specifically for segregated witness P2WPKH "),a("router-link",{attrs:{to:"/using-wasabi/BIP.html#bip-173-base32-address-format-for-native-v0-16-witness-outputs"}},[t._v("BIP 173")]),t._v(".\nThis allows to generate one root master seed that can derive a tree of public keys with different paths "),a("router-link",{attrs:{to:"/using-wasabi/BIP.html#bip-44-multi-account-hierarchy-for-deterministic-wallets"}},[t._v("BIP 44")]),t._v(".\n"),a("code",[t._v("m / purpose' / coin_type' / account' / change / address_index")]),t._v(".\nWasabi specifically uses this standard "),a("code",[t._v("m/84'/0'/0'")]),t._v(".\nOn the TestNet and on the RegTest Wasabi deviates from the standard and usees "),a("code",[t._v("m/84'/0'/0'")]),t._v(" instead of "),a("code",[t._v("m/84'/1'/0'")]),t._v(".")],1)]),a("details",{attrs:{id:"bip-141-segregated-witness-consensus-layer"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-141-segregated-witness-consensus-layer","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 141: Segregated Witness (Consensus Layer)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 141: Segregated Witness (Consensus Layer)"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-142-address-format-for-segregated-witness"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-142-address-format-for-segregated-witness","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 142: Address Format for Segregated Witness")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0142.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 142: Address Format for Segregated Witness"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-143-transaction-signature-verification-for-version-0-witness-program"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-143-transaction-signature-verification-for-version-0-witness-program","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 143: Transaction Signature Verification for Version 0 Witness Program")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 143: Transaction Signature Verification for Version 0 Witness Program"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-144-segregated-witness-peer-services"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-144-segregated-witness-peer-services","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 144: Segregated Witness (Peer Services)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0144.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 144: Segregated Witness (Peer Services)"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-158-compact-block-filters-for-light-clients"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-158-compact-block-filters-for-light-clients","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 158: Compact Block Filters for Light Clients")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/using-wasabi/BIP.html#bip-158-compact-block-filters-for-light-clients"}},[t._v("BIP 158 Block filters")]),t._v(" are the reverse of "),a("router-link",{attrs:{to:"/using-wasabi/BIP.html#bip-37-connection-bloom-filters"}},[t._v("BIP 37 Bloom filters")]),t._v(' - the client will connect to a Bitcoin node and say "Hey, for every block, I would like a condensed list of addresses that were affected."\nWhat would happen next is that a Bitcoin node would give the same filter that it gives to every client, because the client has thus far revealed nothing!\nOnce a block filter has come in and the client believes that there is a transaction that affects the client, the client pings a single random node for a single full block.\nIt then parses the block, and finds the transaction.\nThis has been proven to be by far the best way to do light clients privately, and is the way Wasabi works today.')],1)]),a("details",{attrs:{id:"bip-173-base32-address-format-for-native-v0-16-witness-outputs"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-173-base32-address-format-for-native-v0-16-witness-outputs","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 173: Base32 address format for native v0-16 witness outputs")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 173: Base32 address format for native v0-16 witness outputs"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-174-partially-signed-bitcoin-transaction-format"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-174-partially-signed-bitcoin-transaction-format","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 174: Partially Signed Bitcoin Transaction Format")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 174: Partially Signed Bitcoin Transaction Format"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"hardware-wallet-interface"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-wallet-interface","aria-hidden":"true"}},[t._v("#")]),t._v(" Hardware Wallet Interface")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin-core/HWI",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hardware Wallet Interface"),a("OutboundLink")],1)])]),a("h2",{attrs:{id:"what-will-be-supported-in-twoweeks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-will-be-supported-in-twoweeks","aria-hidden":"true"}},[t._v("#")]),t._v(" What will be supported in #twoweeks")]),t._v(" "),a("details",{attrs:{id:"bip-156-dandelion-privacy-enhancing-routing"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-156-dandelion-privacy-enhancing-routing","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 156: Dandelion - Privacy Enhancing Routing")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0156.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 156 Dandelion"),a("OutboundLink")],1),t._v(" is a transaction routing mechanism that provides formal anonymity guarantees against attacks on Bitcoin's transaction spreading protocol.\nWhen a node generates a transaction without Dandelion, it transmits that transaction to its peers with independent, exponential delays.\nThis approach, known as diffusion in academia, allows network adversaries to link transactions to IP addresses.")]),t._v(" "),a("p",[t._v('Dandelion mitigates this class of attacks by sending transactions over a randomly selected path before diffusion.\nTransactions travel along this path during the "stem phase" and are then diffused during the "fluff phase" (hence Dandelion).\nWe have shown that this routing protocol provides near-optimal anonymity guarantees among schemes that do not introduce additional encryption mechanisms.')])]),a("details",{attrs:{id:"bip-157-client-side-block-filtering"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-157-client-side-block-filtering","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 157: Client Side Block Filtering")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 157"),a("OutboundLink")],1),t._v(" describes a new light client protocol in Bitcoin that improves upon currently available options.\nThe standard light client protocol in use today, defined in "),a("router-link",{attrs:{to:"/using-wasabi/BIP.html#bip-37-connection-bloom-filters"}},[t._v("BIP 37")]),t._v(", has known flaws that weaken the security and privacy of clients and allow denial-of-service attack vectors on full nodes.\nThe new protocol overcomes these issues by allowing light clients to obtain compact probabilistic filters of block content from full nodes and download full blocks if the filter matches relevant data.")],1),t._v(" "),a("p",[t._v("New P2P messages empower light clients to securely sync the blockchain without relying on a trusted source.\nThis BIP also defines a filter header, which serves as a commitment to all filters for previous blocks and provides the ability to efficiently detect malicious or faulty peers serving invalid filters.\nThe resulting protocol guarantees that light clients with at least one honest peer are able to identify the correct block filters.")])]),a("details",{attrs:{id:"bip-322-generic-message-signing-format"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-322-generic-message-signing-format","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 322: Generic Message Signing Format")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0322.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 322"),a("OutboundLink")],1),t._v(" is a standard for interoperable generic signed messages based on the Bitcoin Script format.")])]),a("details",{attrs:{id:"bip-schnorr"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-schnorr","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP Schnorr")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/sipa/bips/blob/bip-schnorr/bip-schnorr.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP Schnorr"),a("OutboundLink")],1),t._v(" is a digital signature scheme which has many benefits over the status-quo ECDSA.\nOne advantage is that any N-of-N and M-of-N multisignature can be easily made to look like a single-sig when included on the blockchain.")])]),a("details",{attrs:{id:"bip-taproot"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-taproot","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP Taproot")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/sipa/bips/blob/bip-schnorr/bip-taproot.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP Taproot"),a("OutboundLink")],1),t._v(" is a way to combine "),a("router-link",{attrs:{to:"/using-wasabi/BIP.html#bip-schnorr"}},[t._v("Schnorr signatures")]),t._v(" with "),a("a",{attrs:{href:"https://bitcoinmagazine.com/articles/the-next-step-to-improve-bitcoin-s-flexibility-scalability-and-privacy-is-called-mast-1476388597/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAST"),a("OutboundLink")],1),t._v(".\nThe Schnorr signature can be used to spend the coin, but also a MAST tree can be revealed only when the user wants to use it.\nThe schnorr signature can be any N-of-N or use any scriptless script contract.\nThe consequence of taproot is a much larger anonymity set for interesting smart contracts, as any contract such as Lightning Network, CoinSwap, multisignature, etc would appear indistinguishable from regular single-signature on-chain transaction.")],1),t._v(" "),a("p",[t._v("The taproot scheme is so useful because it is almost always the case that interesting scripts have a logical top level branch which allows satisfaction of the contract with nothing other than a signature by all parties.\nOther branches would only be used where some participant is failing to cooperate.")])]),a("details",{attrs:{id:"bip-tapscript"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-tapscript","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP Tapscript")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/sipa/bips/blob/bip-schnorr/bip-tapscript.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP Tapscript"),a("OutboundLink")],1),t._v(" defines a slight variation on Bitcoin’s existing Script language to be used in "),a("router-link",{attrs:{to:"/using-wasabi/BIP.html#bip-taproot"}},[t._v("BIP Taproot")]),t._v(" merkle spends.")],1)]),a("h2",{attrs:{id:"what-is-not-supported"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-not-supported","aria-hidden":"true"}},[t._v("#")]),t._v(" What is not supported")]),t._v(" "),a("details",{attrs:{id:"bip-37-connection-bloom-filtering"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-37-connection-bloom-filtering","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 37: Connection Bloom Filtering")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/using-wasabi/BIP.html#bip-37-connection-bloom-filters"}},[t._v("Bloom filters")]),t._v(' are filters that a client will send to a Bitcoin full node which says "Hey, if you see any transactions that get caught in these filters, they may or may not be mine!".\nWhat would happen next is that a Bitcoin node would start sending tons and tons of transactions to the client, and the client would proceed to distinguish the 99% irrelevant transactions against the 1% relevant ones.\nThis was quite brilliant of an idea at the time, but has since been proven to not protect user privacy, at the expense of wasting a ton of bandwidth and subjecting users to other risks.')],1)]),a("details",{attrs:{id:"bip-69-lexicographical-indexing-of-transaction-inputs-and-outputs"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-69-lexicographical-indexing-of-transaction-inputs-and-outputs","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 69: Lexicographical Indexing of Transaction Inputs and Outputs")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0069.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 69: Lexicographical Indexing of Transaction Inputs and Outputs"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-70-payment-protocol"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-70-payment-protocol","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 70: Payment Protocol")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 70: Payment Protocol"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-125-opt-in-full-replace-by-fee-signaling"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-125-opt-in-full-replace-by-fee-signaling","aria-hidden":"true"}},[t._v("#")]),t._v(" BIP 125: Opt-In full Replace-by-Fee Signaling")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 125: Opt-In full Replace-by-Fee Signaling"),a("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=r.exports}}]);