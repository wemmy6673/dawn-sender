'use client';
import InputField from "./ui/InputField"
import { useState } from "react"
import {chainsToTSender, tsenderAbi, erc20Abi} from "@/constants"
import { useChainId } from 'wagmi'

export default function AirdropForm() {
    const [tokenAddress, setTokenAddress] = useState("")
    const [recipients, setRecipients] = useState("")
    const [amounts, setAmounts] = useState("")
    const chainId = useChainId()

    async function getApprovedAmount(tSenderAddress: string | null) : Promise<number>{

        if (!tSenderAddress){
            alert("No address found, Please use a supported chain")
            return 0
        }
    }


    async function handleSubmit() {
        const tsenderAddress = chainsToTSender[chainId]["tsender"]
    }

    return(
        <div className="w-[60%] mx-auto flex flex-col space-y-6">
        <InputField 
            label="Token Address"
            placeholder="0x..."
            value={tokenAddress}
            onChange={setTokenAddress}
            large
        />
        <InputField 
            label="Recipients"
            placeholder="0x..., 0x..., 0x..."
            value={recipients}
            onChange={setRecipients}
            large
        />

        <InputField 
            label="Amount"
            placeholder="100,200,300,..."
            value={amounts}
            onChange={setAmounts}
            large
        />

        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Send Tokens</button>
        </div>
    )
}