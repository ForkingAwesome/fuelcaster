export const abi = {
    "types": [
        {
            "typeId": 0,
            "type": "u64",
            "components": null,
            "typeParameters": null
        }
    ],
    "functions": [
        {
            "inputs": [],
            "name": "get",
            "output": {
                "name": "",
                "type": 0,
                "typeArguments": null
            },
            "attributes": [
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
                    "name": "amount",
                    "type": 0,
                    "typeArguments": null
                }
            ],
            "name": "increment",
            "output": {
                "name": "",
                "type": 0,
                "typeArguments": null
            },
            "attributes": [
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
    "loggedTypes": [],
    "messagesTypes": [],
    "configurables": []
}