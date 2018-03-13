export const blockTradesAPIs = {
    BASE: "https://api.blocktrades.us/v2",
    BASE_OL: "https://ol-api1.openledger.info/api/v0/ol/support",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_LIMIT: "/deposit-limits",
    ESTIMATE_OUTPUT: "/estimate-output-amount",
    ESTIMATE_INPUT: "/estimate-input-amount"
};

export const rudexAPIs = {
    BASE: "https://gateway.rudex.org/api/vtest",
    COINS_LIST: "/coins",
    NEW_DEPOSIT_ADDRESS: "/new-deposit-address"
};

export const widechainAPIs = {
    BASE : "https://gateway.winex.pro/api/v0/ol/support",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    NEW_DEPOSIT_ADDRESS: "/new-deposit-address",
    WITHDRAW_HISTORY:"/latelyWithdraw",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_HISTORY:"/latelyRecharge"
};

export const settingsAPIs = {
    DEFAULT_WS_NODE: "wss://api.bts.blckchnd.com",
    WS_NODE_LIST: [
        {url: "wss://fake.automatic-selection.com", location: {translate: "settings.api_closest"}},
        {url: "wss://api.bts.blckchnd.com", location: "RuDEX (Falkenstein, Germany)"},
        {url: "wss://api-ru.bts.blckchnd.com", location: "RuDEX (Moscow, Russia)"},
        {url: "ws://127.0.0.1:8090", location: "Locally hosted"},
        {url: "wss://bitshares.openledger.info/ws", location: "Nuremberg, Germany"},
        {url: "wss://eu.openledger.info/ws", location: "Berlin, Germany"},
        {url: "wss://bit.btsabc.org/ws", location: "Hong Kong"},
        {url: "wss://bts.ai.la/ws", location: "Hong Kong"},
        {url: "wss://bitshares.apasia.tech/ws", location: "Bangkok, Thailand"},
        {url: "wss://japan.bitshares.apasia.tech/ws", location: "Tokyo, Japan"},
        {url: "wss://bitshares.dacplay.org/ws", location:  "Hangzhou, China"},
        {url: "wss://bitshares-api.wancloud.io/ws", location:  "China"},
        {url: "wss://openledger.hk/ws", location: "Hong Kong"},
        {url: "wss://bitshares.crypto.fans/ws", location: "Munich, Germany"},
        {url: "wss://node.testnet.bitshares.eu", location: "Public Testnet Server (Frankfurt, Germany)"},
        {url: "wss://ws.gdex.io", location: "GDEX"},
        {url: "wss://ws.gdex.top", location: "China"},
        {url: "wss://dex.rnglab.org", location: "Netherlands"},
        {url: "wss://dexnode.net/ws", location: "Dallas, USA"},
        {url: "wss://kc-us-dex.xeldal.com/ws", location: "Kansas City, USA"},
        {url: "wss://la.dexnode.net/ws", location: "Los Angeles, USA"},
        {url: "wss://btsza.co.za:8091/ws", location: "Cape Town, South Africa"},
    ],
    DEFAULT_FAUCET: "https://faucet.rudex.org",
    TESTNET_FAUCET: "https://faucet.testnet.bitshares.eu",
    RPC_URL: "https://openledger.info/api/"
};

export const  gdexAPIs = {
    BASE: "https://api.gdex.io",
    ASSET_LIST: "/gateway/asset/assetList",
    ASSET_DETAIL: "/gateway/asset/assetDetail",
    GET_DEPOSIT_ADDRESS: "/gateway/address/getAddress",
    CHECK_WITHDRAY_ADDRESS: "/gateway/address/checkAddress",
    DEPOSIT_RECORD_LIST: "/gateway/deposit/recordList",
    DEPOSIT_RECORD_DETAIL: "/gateway/deposit/recordDetail",
    WITHDRAW_RECORD_LIST: "/gateway/withdraw/recordList",
    WITHDRAW_RECORD_DETAIL: "/gateway/withdraw/recordDetail",
    GET_USER_INFO: "/gateway/user/getUserInfo",
    USER_AGREEMENT: "/gateway/user/isAgree",
    WITHDRAW_RULE: "/gateway/withdraw/rule"
}
