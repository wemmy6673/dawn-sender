'use client';
import InputField from "./ui/InputField"
import { useState } from "react"
import {chainsToTSender, tsenderAbi, erc20Abi} from "@/constants"
import { useChainId, useConfig, useAccount } from 'wagmi'
import { readContract } from '@wagmi/core'

export default function AirdropForm() {
    const [tokenAddress, setTokenAddress] = useState("")
    const [recipients, setRecipients] = useState("")
    const [amounts, setAmounts] = useState("")
    const chainId = useChainId()
    const config = useConfig()
    const account = useAccount()

    async function getApprovedAmount(tSenderAddress: string | null) : Promise<number>{

        if (!tSenderAddress){
            alert("No address found, Please use a supported chain")
            return 0
        }
        const response = await readContract(config, {
            abi: erc20Abi,
            address: tokenAddress as `0x${string}`,
            functionName: 'allowance',
            args: [account.address, tSenderAddress as `0x${string}`]

        })
        return response as number
    }


    async function handleSubmit() {
        const tSenderAddress = chainsToTSender[chainId]["tsender"]
        const approvedAmount = await getApprovedAmount(tSenderAddress)
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