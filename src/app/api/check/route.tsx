import { Provider, Wallet, Contract } from "fuels";
import { NextRequest, NextResponse } from "next/server";
import { abi } from "@/abi";

export async function POST(req: NextRequest, res: NextResponse) {
    const provider = await Provider.create('https://beta-5.fuel.network/graphql');
    const wallet = Wallet.fromPrivateKey(process.env.NEXT_WALLET_PRIVATE_KEY || '', provider);
    const contractId = "0xd7ae8520cf6b540fffcdefddccd629e610bf1490708366f7a65155deb98e08dc";

    const contract = new Contract(contractId, abi, wallet);
    const value = await contract.functions.increment(1).get();

    const numberValue = parseInt(value.value.toString());
    return NextResponse.json({ number: numberValue });
}