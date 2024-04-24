import { Provider, Wallet, Contract } from "fuels";
import { NextRequest, NextResponse } from "next/server";
import { abi } from "@/abi";

export async function POST(req: NextRequest, res: NextResponse) {
    const provider = await Provider.create('https://beta-5.fuel.network/graphql');
    const wallet = Wallet.fromPrivateKey(process.env.NEXT_WALLET_PRIVATE_KEY || '', provider);
    const contractId = "0xa080096bc7b7f5d9ff14b98290ac2df65ebf8d96b7116f7eb2f175a4a9be3ea9";

    const contract = new Contract(contractId, abi, wallet);
    const value = await contract.functions.increment(1).get();

    const numberValue = parseInt(value.value.toString());
    return NextResponse.json({ number: numberValue });
}

