// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80
  },
  testnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
  },
  litecoin: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0
  },
  desire: {
    messagePrefix: '\x20Desire Signed Message:\n',
    bip32: {
      public: 0x2FE52F8,
      private: 0x2FE52CC
    },
    pubKeyHash: 0x1E,
    scriptHash: 0x10,
    wif: 0xCC
  },
  gravium: {
    messagePrefix: '\x20Gravium Signed Message:\n',
    bip32: {
      public: 0x2FE52F8,
      private: 0x2FE52CC
    },
    pubKeyHash: 0x26,
    scriptHash: 0x61,
    wif: 0xA6
  },
  ucacoin: {
    messagePrefix: '\x20DarkNet Signed Message:\n',
    bip32: {
      public: 0x133AEE3,
      private: 0x133B12E
    },
    pubKeyHash: 0x44,
    scriptHash: 0x82,
    wif: 0xc0
  }
}
