export const abi = {
    "types": [
        {
            "typeId": 0,
            "type": "()",
            "components": [],
            "typeParameters": null
        },
        {
            "typeId": 1,
            "type": "b256",
            "components": null,
            "typeParameters": null
        },
        {
            "typeId": 2,
            "type": "enum BurnError",
            "components": [
                {
                    "name": "NotEnoughCoins",
                    "type": 0,
                    "typeArguments": null
                }
            ],
            "typeParameters": null
        },
        {
            "typeId": 3,
            "type": "enum Identity",
            "components": [
                {
                    "name": "Address",
                    "type": 10,
                    "typeArguments": null
                },
                {
                    "name": "ContractId",
                    "type": 13,
                    "typeArguments": null
                }
            ],
            "typeParameters": null
        },
        {
            "typeId": 4,
            "type": "enum MintError",
            "components": [
                {
                    "name": "MaxMinted",
                    "type": 0,
                    "typeArguments": null
                }
            ],
            "typeParameters": null
        },
        {
            "typeId": 5,
            "type": "enum Option",
            "components": [
                {
                    "name": "None",
                    "type": 0,
                    "typeArguments": null
                },
                {
                    "name": "Some",
                    "type": 6,
                    "typeArguments": null
                }
            ],
            "typeParameters": [
                6
            ]
        },
        {
            "typeId": 6,
            "type": "generic T",
            "components": null,
            "typeParameters": null
        },
        {
            "typeId": 7,
            "type": "raw untyped ptr",
            "components": null,
            "typeParameters": null
        },
        {
            "typeId": 8,
            "type": "str[5]",
            "components": null,
            "typeParameters": null
        },
        {
            "typeId": 9,
            "type": "str[7]",
            "components": null,
            "typeParameters": null
        },
        {
            "typeId": 10,
            "type": "struct Address",
            "components": [
                {
                    "name": "value",
                    "type": 1,
                    "typeArguments": null
                }
            ],
            "typeParameters": null
        },
        {
            "typeId": 11,
            "type": "struct AssetId",
            "components": [
                {
                    "name": "value",
                    "type": 1,
                    "typeArguments": null
                }
            ],
            "typeParameters": null
        },
        {
            "typeId": 12,
            "type": "struct Bytes",
            "components": [
                {
                    "name": "buf",
                    "type": 14,
                    "typeArguments": null
                },
                {
                    "name": "len",
                    "type": 16,
                    "typeArguments": null
                }
            ],
            "typeParameters": null
        },
        {
            "typeId": 13,
            "type": "struct ContractId",
            "components": [
                {
                    "name": "value",
                    "type": 1,
                    "typeArguments": null
                }
            ],
            "typeParameters": null
        },
        {
            "typeId": 14,
            "type": "struct RawBytes",
            "components": [
                {
                    "name": "ptr",
                    "type": 7,
                    "typeArguments": null
                },
                {
                    "name": "cap",
                    "type": 16,
                    "typeArguments": null
                }
            ],
            "typeParameters": null
        },
        {
            "typeId": 15,
            "type": "struct String",
            "components": [
                {
                    "name": "bytes",
                    "type": 12,
                    "typeArguments": null
                }
            ],
            "typeParameters": null
        },
        {
            "typeId": 16,
            "type": "u64",
            "components": null,
            "typeParameters": null
        },
        {
            "typeId": 17,
            "type": "u8",
            "components": null,
            "typeParameters": null
        }
    ],
    "functions": [
        {
            "inputs": [
                {
                    "name": "asset",
                    "type": 11,
                    "typeArguments": null
                }
            ],
            "name": "decimals",
            "output": {
                "name": "",
                "type": 5,
                "typeArguments": [
                    {
                        "name": "",
                        "type": 17,
                        "typeArguments": null
                    }
                ]
            },
            "attributes": [
                {
                    "name": "doc-comment",
                    "arguments": [
                        " Returns the number of decimals the asset uses.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Arguments\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `asset`: [AssetId] - The asset of which to query the decimals, this should be the default `SubId`.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Returns\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * [Option<u8>] - The decimal precision used by `asset`.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src20::SRC20;\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use std::constants::DEFAULT_SUB_ID;\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(contract_id: ContractId) {\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let src_20_abi = abi(SRC20, contract_id);\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let decimals = src_20_abi.decimals(DEFAULT_SUB_ID);\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     assert(decimals.unwrap() == 9u8);\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```\r"
                    ]
                },
                {
                    "name": "storage",
                    "arguments": [
                        "read"
                    ]
                }
            ]
        },
        {
            "inputs": [
                {
                    "name": "asset",
                    "type": 11,
                    "typeArguments": null
                }
            ],
            "name": "name",
            "output": {
                "name": "",
                "type": 5,
                "typeArguments": [
                    {
                        "name": "",
                        "type": 15,
                        "typeArguments": null
                    }
                ]
            },
            "attributes": [
                {
                    "name": "doc-comment",
                    "arguments": [
                        " Returns the name of the asset.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Arguments\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `asset`: [AssetId] - The asset of which to query the name, this should be the default `SubId`.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Returns\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * [Option<String>] - The name of `asset`.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src20::SRC20;\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use std::constants::DEFAULT_SUB_ID;\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(contract_id: ContractId) {\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let src_20_abi = abi(SRC20, contract_id);\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let name = src_20_abi.name(DEFAULT_SUB_ID);\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     assert(name.is_some());\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```\r"
                    ]
                },
                {
                    "name": "storage",
                    "arguments": [
                        "read"
                    ]
                }
            ]
        },
        {
            "inputs": [
                {
                    "name": "asset",
                    "type": 11,
                    "typeArguments": null
                }
            ],
            "name": "symbol",
            "output": {
                "name": "",
                "type": 5,
                "typeArguments": [
                    {
                        "name": "",
                        "type": 15,
                        "typeArguments": null
                    }
                ]
            },
            "attributes": [
                {
                    "name": "doc-comment",
                    "arguments": [
                        " Returns the symbol of the asset.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Arguments\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `asset`: [AssetId] - The asset of which to query the symbol, this should be the default `SubId`.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Returns\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * [Option<String>] - The symbol of `asset`.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src20::SRC20;\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use std::constants::DEFAULT_SUB_ID;\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(contract_id: ContractId) {\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let src_20_abi = abi(SRC20, contract_id);\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let symbol = src_20_abi.symbol(DEFAULT_SUB_ID);\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     assert(symbol.is_some());\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```\r"
                    ]
                },
                {
                    "name": "storage",
                    "arguments": [
                        "read"
                    ]
                }
            ]
        },
        {
            "inputs": [],
            "name": "total_assets",
            "output": {
                "name": "",
                "type": 16,
                "typeArguments": null
            },
            "attributes": [
                {
                    "name": "doc-comment",
                    "arguments": [
                        " Returns the total number of individual assets minted by a contract.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Additional Information\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " For this single asset contract, this is always one.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Returns\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * [u64] - The number of assets that this contract has minted.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src20::SRC20;\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(contract_id: ContractId) {\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let src_20_abi = abi(SRC20, contract_id);\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let assets = src_20_abi.total_assets();\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     assert(assets == 1);\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```\r"
                    ]
                },
                {
                    "name": "storage",
                    "arguments": [
                        "read"
                    ]
                }
            ]
        },
        {
            "inputs": [
                {
                    "name": "asset",
                    "type": 11,
                    "typeArguments": null
                }
            ],
            "name": "total_supply",
            "output": {
                "name": "",
                "type": 5,
                "typeArguments": [
                    {
                        "name": "",
                        "type": 16,
                        "typeArguments": null
                    }
                ]
            },
            "attributes": [
                {
                    "name": "doc-comment",
                    "arguments": [
                        " Returns the total supply of coins for the asset.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Arguments\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `asset`: [AssetId] - The asset of which to query the total supply, this should be the default `SubId`.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Returns\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * [Option<u64>] - The total supply of an `asset`.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src20::SRC20;\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use std::constants::DEFAULT_SUB_ID;\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(contract_id: ContractId) {\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let src_20_abi = abi(SRC20, contract_id);\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let supply = src_20_abi.total_supply(DEFAULT_SUB_ID);\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     assert(supply.unwrap() != 0);\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```\r"
                    ]
                },
                {
                    "name": "storage",
                    "arguments": [
                        "read"
                    ]
                }
            ]
        },
        {
            "inputs": [
                {
                    "name": "sub_id",
                    "type": 1,
                    "typeArguments": null
                },
                {
                    "name": "amount",
                    "type": 16,
                    "typeArguments": null
                }
            ],
            "name": "burn",
            "output": {
                "name": "",
                "type": 0,
                "typeArguments": null
            },
            "attributes": [
                {
                    "name": "doc-comment",
                    "arguments": [
                        " Burns assets sent with the given `sub_id`.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Additional Information\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " NOTE: The sha-256 hash of `(ContractId, SubId)` must match the `AssetId` where `ContractId` is the id of\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " the implementing contract and `SubId` is the given `sub_id` argument.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Arguments\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `sub_id`: [SubId] - The sub-identifier of the asset to burn.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `amount`: [u64] - The quantity of coins to burn.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Number of Storage Accesses\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Reads: `1`\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Writes: `1`\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src3::SRC3;\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(contract: ContractId, asset_id: AssetId) {\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let contract_abi = abi(SR3, contract);\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     contract_abi {\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "         gas: 10000,\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "         coins: 100,\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "         asset_id: AssetId,\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     }.burn(ZERO_B256, 100);\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```\r"
                    ]
                },
                {
                    "name": "storage",
                    "arguments": [
                        "read",
                        "write"
                    ]
                }
            ]
        },
        {
            "inputs": [
                {
                    "name": "recipient",
                    "type": 3,
                    "typeArguments": null
                },
                {
                    "name": "sub_id",
                    "type": 1,
                    "typeArguments": null
                },
                {
                    "name": "amount",
                    "type": 16,
                    "typeArguments": null
                }
            ],
            "name": "mint",
            "output": {
                "name": "",
                "type": 0,
                "typeArguments": null
            },
            "attributes": [
                {
                    "name": "doc-comment",
                    "arguments": [
                        " Mints new assets using the `sub_id` sub-identifier.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Arguments\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `recipient`: [Identity] - The user to which the newly minted assets are transferred to.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `sub_id`: [SubId] - The sub-identifier of the newly minted asset.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `amount`: [u64] - The quantity of coins to mint.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Reverts\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * When more than 100,000,000 coins have been minted.\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Number of Storage Accesses\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Reads: `3`\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Writes: `2`\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src3::SRC3;\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(contract: ContractId) {\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let contract_abi = abi(SR3, contract);\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     contract_abi.mint(Identity::ContractId(this_contract()), ZERO_B256, 100);\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }\r"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```\r"
                    ]
                },
                {
                    "name": "storage",
                    "arguments": [
                        "read",
                        "write"
                    ]
                }
            ]
        }
    ],
    "loggedTypes": [
        {
            "logId": 0,
            "loggedType": {
                "name": "",
                "type": 2,
                "typeArguments": []
            }
        },
        {
            "logId": 1,
            "loggedType": {
                "name": "",
                "type": 4,
                "typeArguments": []
            }
        }
    ],
    "messagesTypes": [],
    "configurables": [
        {
            "name": "TOTAL_SUPPLY",
            "configurableType": {
                "name": "",
                "type": 16,
                "typeArguments": null
            },
            "offset": 6892
        },
        {
            "name": "DECIMALS",
            "configurableType": {
                "name": "",
                "type": 17,
                "typeArguments": null
            },
            "offset": 6844
        },
        {
            "name": "NAME",
            "configurableType": {
                "name": "",
                "type": 9,
                "typeArguments": null
            },
            "offset": 6852
        },
        {
            "name": "SYMBOL",
            "configurableType": {
                "name": "",
                "type": 8,
                "typeArguments": null
            },
            "offset": 6876
        }
    ]
}