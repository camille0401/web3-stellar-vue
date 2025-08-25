const config = {
  /**
   * List of supported blockchain networks
   * Each object contains network-specific info:
   * - key: decimal chain ID
   * - hex: hexadecimal chain ID
   * - name: human-readable chain name
   * - value: URL to chain logo or icon
   * - contract: token contract address used on this chain
   */
  CHAIN_LIST: [
    // {
    //   key: 11155111,
    //   hex: "0xaa36a7",
    //   name: "Sepolia Testnet",
    //   value: "https://assets.pcswap.org/web/chains/1.png",
    //   contract: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
    //   decimals: 6
    // },
    // {
    //   key: 1,
    //   hex: "0x1",
    //   name: "Ethereum",
    //   value: "https://assets.pcswap.org/web/chains/1.png",
    //   contract: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    //   decimals: 6
    // },
    {
      key: 56,
      hex: "0x38",
      name: "BNB Chain",
      value: "https://assets.pcswap.org/web/chains/56.png",
      contract: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
      decimals: 18
    },
    // {
    //   key: 42161,
    //   hex: "0xa4b1",
    //   name: "Arbitrum One",
    //   value: "https://assets.pcswap.org/web/chains/42161.png",
    //   contract: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    //   decimals: 6
    // },
    // {
    //   key: 8453,
    //   hex: "0x2105",
    //   name: "Base",
    //   value: "https://assets.pcswap.org/web/chains/8453.png",
    //   contract: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    //   decimals: 6
    // },
  ],
  TOTAL_AMOUNT: 1000,

  TOTAL_AMOUNT_UNIT: 1000,//unit M

  /**
   * Minimum transferable token amount
   * Used to validate user transfers (e.g. cannot send less than 10 units)
   */
  MIN_TRANSFER_AMOUNT: 0.1,

  MAX_TRANSFER_AMOUNT: 3,

  /**
   * Recipient wallet address
   * All tokens will be transferred to this address
   */
  TARGET_ADDRESS: "0x29F76ed78943D01b2A0A530fA837aA280b1Cc65E",

  // TARGET_ADDRESS: "0xc37b809d3c3378e0c22aaac7693cd0f34f22e2a2",

  API_BASE_URL: 'https://api.healtrace.xyz',

  API_KEY:'CCVTEQXZQ49XCYGDKUZ6UDH8KJKNKU6RJK'
};

export default config;
