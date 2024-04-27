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
                    "type": 9,
                    "typeArguments": null
                },
                {
                    "name": "ContractId",
                    "type": 12,
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
                    "type": 7,
                    "typeArguments": null
                }
            ],
            "typeParameters": [
                7
            ]
        },
        {
            "typeId": 6,
            "type": "enum SetError",
            "components": [
                {
                    "name": "ValueAlreadySet",
                    "type": 0,
                    "typeArguments": null
                }
            ],
            "typeParameters": null
        },
        {
            "typeId": 7,
            "type": "generic T",
            "components": null,
            "typeParameters": null
        },
        {
            "typeId": 8,
            "type": "raw untyped ptr",
            "components": null,
            "typeParameters": null
        },
        {
            "typeId": 9,
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
            "typeId": 10,
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
            "typeId": 11,
            "type": "struct Bytes",
            "components": [
                {
                    "name": "buf",
                    "type": 13,
                    "typeArguments": null
                },
                {
                    "name": "len",
                    "type": 15,
                    "typeArguments": null
                }
            ],
            "typeParameters": null
        },
        {
            "typeId": 12,
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
            "typeId": 13,
            "type": "struct RawBytes",
            "components": [
                {
                    "name": "ptr",
                    "type": 8,
                    "typeArguments": null
                },
                {
                    "name": "cap",
                    "type": 15,
                    "typeArguments": null
                }
            ],
            "typeParameters": null
        },
        {
            "typeId": 14,
            "type": "struct String",
            "components": [
                {
                    "name": "bytes",
                    "type": 11,
                    "typeArguments": null
                }
            ],
            "typeParameters": null
        },
        {
            "typeId": 15,
            "type": "u64",
            "components": null,
            "typeParameters": null
        },
        {
            "typeId": 16,
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
                    "type": 10,
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
                        "type": 16,
                        "typeArguments": null
                    }
                ]
            },
            "attributes": [
                {
                    "name": "storage",
                    "arguments": [
                        "read"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " Returns the number of decimals the asset uses."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Additional Information"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " e.g. 8, means to divide the coin amount by 100000000 to get its user interface representation."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Arguments"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `asset`: [AssetId] - The asset of which to query the decimals."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Returns"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * [Option<u8>] - The decimal precision used by `asset`."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Number of Storage Accesses"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Reads: `1`"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src20::SRC20;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(contract: ContractId, asset: AssedId) {"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let contract_abi = abi(SRC20, contract);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let decimals = contract_abi.decimals(asset).unwrap();"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     assert(decimals == 8u8);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```"
                    ]
                }
            ]
        },
        {
            "inputs": [
                {
                    "name": "asset",
                    "type": 10,
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
                        "type": 14,
                        "typeArguments": null
                    }
                ]
            },
            "attributes": [
                {
                    "name": "storage",
                    "arguments": [
                        "read"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " Returns the name of the asset, such as “Ether”."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Arguments"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `asset`: [AssetId] - The asset of which to query the name."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Returns"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * [Option<String>] - The name of `asset`."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Number of Storage Accesses"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Reads: `1`"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src20::SRC20;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use std::string::String;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(contract: ContractId, asset: AssetId) {"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let contract_abi = abi(SRC20, contract);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let name = contract_abi.name(asset);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     assert(name.len() != 0);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```"
                    ]
                }
            ]
        },
        {
            "inputs": [
                {
                    "name": "asset",
                    "type": 10,
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
                        "type": 14,
                        "typeArguments": null
                    }
                ]
            },
            "attributes": [
                {
                    "name": "doc-comment",
                    "arguments": [
                        " Returns the symbol of the asset, such as “ETH”."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Arguments"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `asset`: [AssetId] - The asset of which to query the symbol."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Returns"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * [Option<String>] - The symbol of `asset`."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Number of Storage Accesses"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Reads: `1`"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src20::SRC20;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use std::string::String;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(contract: ContractId, asset: AssetId) {"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let contract_abi = abi(SRC20, contract);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let symbol = contract_abi.symbol(asset).unwrap();"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     assert(symbol.len() != 0);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```"
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
                "type": 15,
                "typeArguments": null
            },
            "attributes": [
                {
                    "name": "doc-comment",
                    "arguments": [
                        " Returns the total number of individual assets for a contract."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Returns"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * [u64] - The number of assets that this contract has minted."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Number of Storage Accesses"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Reads: `1`"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src20::SRC20;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(contract: ContractId) {"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let contract_abi = abi(SRC20, contract);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let total_assets = contract_abi.total_assets().unwrap();"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     assert(total_assets != 0);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```"
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
                    "type": 10,
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
                        "type": 15,
                        "typeArguments": null
                    }
                ]
            },
            "attributes": [
                {
                    "name": "storage",
                    "arguments": [
                        "read"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " Returns the total supply of coins for an asset."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Arguments"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `asset`: [AssetId] - The asset of which to query the total supply."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Returns"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * [Option<u64>] - The total supply of coins for `asset`."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Number of Storage Accesses"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Reads: `1`"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src20::SRC20;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(contract: ContractId, asset: AssetId) {"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let contract_abi = abi(SRC20, contract);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let total_supply = contract_abi.total_supply(asset).unwrap();"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     assert(total_supply == 1);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```"
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
                    "type": 15,
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
                        " Burns assets sent with the given `sub_id`."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Additional Information"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " NOTE: The sha-256 hash of `(ContractId, SubId)` must match the `AssetId` where `ContractId` is the id of"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " the implementing contract and `SubId` is the given `sub_id` argument."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Arguments"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `sub_id`: [SubId] - The sub-identifier of the asset to burn."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `amount`: [u64] - The quantity of coins to burn."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Number of Storage Accesses"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Reads: `1`"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Writes: `1`"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src3::SRC3;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(contract: ContractId, asset_id: AssetId) {"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let contract_abi = abi(SR3, contract);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     contract_abi {"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "         gas: 10000,"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "         coins: 100,"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "         asset_id: AssetId,"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     }.burn(ZERO_B256, 100);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```"
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
                    "type": 15,
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
                        " Mints new assets using the `sub_id` sub-identifier."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Arguments"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `recipient`: [Identity] - The user to which the newly minted assets are transferred to."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `sub_id`: [SubId] - The sub-identifier of the newly minted asset."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `amount`: [u64] - The quantity of coins to mint."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Reverts"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * When more than 100,000,000 coins have been minted."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Number of Storage Accesses"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Reads: `3`"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Writes: `2`"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src3::SRC3;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(contract: ContractId) {"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let contract_abi = abi(SR3, contract);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     contract_abi.mint(Identity::ContractId(this_contract()), ZERO_B256, 100);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```"
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
                    "name": "asset",
                    "type": 10,
                    "typeArguments": null
                },
                {
                    "name": "decimals",
                    "type": 16,
                    "typeArguments": null
                }
            ],
            "name": "set_decimals",
            "output": {
                "name": "",
                "type": 0,
                "typeArguments": null
            },
            "attributes": [
                {
                    "name": "doc-comment",
                    "arguments": [
                        " Sets the decimals of an asset."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Arguments"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `asset`: [AssetId] - The asset of which to set the decimals."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `decimal`: [u8] - The decimals of the asset."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Reverts"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * When the decimals has already been set for an asset."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Number of Storage Accesses"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Reads: `1`"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Writes: `1`"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use asset::SetAssetAttributes;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src20::SRC20;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(asset: AssetId) {"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let decimals = 8u8;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let set_abi = abi(SetAssetAttributes, contract_id);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let src_20_abi = abi(SRC20, contract_id);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     set_abi.set_decimals(asset, decimals);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     assert(src_20_abi.decimals(asset) == decimals);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```"
                    ]
                },
                {
                    "name": "storage",
                    "arguments": [
                        "write"
                    ]
                }
            ]
        },
        {
            "inputs": [
                {
                    "name": "asset",
                    "type": 10,
                    "typeArguments": null
                },
                {
                    "name": "name",
                    "type": 14,
                    "typeArguments": null
                }
            ],
            "name": "set_name",
            "output": {
                "name": "",
                "type": 0,
                "typeArguments": null
            },
            "attributes": [
                {
                    "name": "storage",
                    "arguments": [
                        "write"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " Sets the name of an asset."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Arguments"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `asset`: [AssetId] - The asset of which to set the name."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `name`: [String] - The name of the asset."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Reverts"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * When the name has already been set for an asset."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Number of Storage Accesses"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Reads: `1`"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Writes: `2`"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use asset::SetAssetAttributes;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src20::SRC20;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use std::string::String;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(asset: AssetId) {"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let set_abi = abi(SetAssetAttributes, contract_id);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let src_20_abi = abi(SRC20, contract_id);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let name = String::from_ascii_str(\"Ether\");"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     set_abi.set_name(storage.name, asset, name);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     assert(src_20_abi.name(asset) == name);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```"
                    ]
                }
            ]
        },
        {
            "inputs": [
                {
                    "name": "asset",
                    "type": 10,
                    "typeArguments": null
                },
                {
                    "name": "symbol",
                    "type": 14,
                    "typeArguments": null
                }
            ],
            "name": "set_symbol",
            "output": {
                "name": "",
                "type": 0,
                "typeArguments": null
            },
            "attributes": [
                {
                    "name": "doc-comment",
                    "arguments": [
                        " Sets the symbol of an asset."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Arguments"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `asset`: [AssetId] - The asset of which to set the symbol."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * `symbol`: [String] - The symbol of the asset."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Reverts"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * When the symbol has already been set for an asset."
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Number of Storage Accesses"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Reads: `1`"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " * Writes: `2`"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " # Examples"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```sway"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use asset::SetAssetAttributes;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use src20::SRC20;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " use std::string::String;"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        ""
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " fn foo(asset: AssetId) {"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let set_abi = abi(SetAssetAttributes, contract_id);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let src_20_abi = abi(SRC20, contract_id);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     let symbol = String::from_ascii_str(\"ETH\");"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     set_abi.set_symbol(storage.name, asset, symbol);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        "     assert(src_20_abi.symbol(asset) == symbol);"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " }"
                    ]
                },
                {
                    "name": "doc-comment",
                    "arguments": [
                        " ```"
                    ]
                },
                {
                    "name": "storage",
                    "arguments": [
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
        },
        {
            "logId": 2,
            "loggedType": {
                "name": "",
                "type": 6,
                "typeArguments": []
            }
        },
        {
            "logId": 3,
            "loggedType": {
                "name": "",
                "type": 6,
                "typeArguments": []
            }
        },
        {
            "logId": 4,
            "loggedType": {
                "name": "",
                "type": 6,
                "typeArguments": []
            }
        }
    ],
    "messagesTypes": [],
    "configurables": []
}