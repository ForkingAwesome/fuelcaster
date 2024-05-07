import { Provider, Wallet, Contract, Address } from "fuels";
import { NextRequest, NextResponse } from "next/server";
import { abi } from "@/abi";

export async function POST(req: NextRequest, res: NextResponse) {
    const requestData = await req.json();
    const receiverAddress = new Address(requestData.receiverAddress);
    console.log("User Address: ", receiverAddress);

    const provider = await Provider.create('https://beta-5.fuel.network/graphql');
    const wallet = Wallet.fromPrivateKey(process.env.NEXT_WALLET_PRIVATE_KEY || '', provider);
    const contractId = process.env.NEXT_CONTRACT_ID || '';

    try {
        const contract = new Contract(contractId, abi, wallet);
        const identityInput = { Address: { value: receiverAddress.toB256() } };
        console.log("B256: ", identityInput);
        const value = await contract.functions.mint(identityInput, '0x0000000000000000000000000000000000000000000000000000000000000000', 100).call();
        console.log(value);
        return NextResponse.json({ result: receiverAddress });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ result: "There was an Error" });
    }

}