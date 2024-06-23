"use client"

import { AccountButton } from "./account-button";

type Props = {
    balance: {
        value: string;
        unit: string;
    } | undefined;//Account['balance'];
    address: string;
    name: string | undefined;
    onClick: () => void;
};

function Wallet({ balance, address, name, onClick }: Props) {
    return (
        <div className="flex justify-between">
            <AccountButton address={address} name={name} onClick={onClick} />
            <p>
                {balance?.value} <span >{balance?.unit}</span>
            </p>

        </div>
    );
}

export { Wallet };
