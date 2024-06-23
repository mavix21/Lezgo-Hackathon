
"use client"
import { useState } from "react";
import {
    useApi,
    useAccount,
    useBalance,
    useBalanceFormat,
} from "@gear-js/react-hooks";
import { Button } from "@/components/ui/button";
import { Wallet } from "./wallet";
import { AccountsModal } from "./account-modal";
//import { AccountsModal } from "./account-modal";

export function AccountInfo() {
    const { isApiReady } = useApi();
    const { account, accounts } = useAccount();
    const { balance } = useBalance(account?.address);
    const { getFormattedBalance } = useBalanceFormat();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const formattedBalance =
        isApiReady && balance ? getFormattedBalance(balance) : undefined;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {account ? (
                <Wallet
                    name={account.meta.name}
                    balance={formattedBalance}
                    address={account.address}
                    onClick={openModal}
                />
            ) : (
                <Button onClick={openModal}>Sign In</Button>
            )}
            {isModalOpen && <AccountsModal accounts={accounts} close={closeModal} />}
        </>
    );
}