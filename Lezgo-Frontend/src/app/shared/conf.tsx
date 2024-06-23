"use client"
// import { Header } from "@/app/student/header";
import { useAccount, useApi } from "@gear-js/react-hooks";
// import Curso from "../courses/page";
import { useEffect, useState } from 'react';
import { withProviders } from "../account/hocs";
import { Header } from "../buyer/header";
import Saludo from "./hi";

function useWalletSync() {
    const { account, isAccountReady } = useAccount();
    const { address } = account || {};
    const WALLET_ID_LOCAL_STORAGE_KEY = 'wallet';

    useEffect(() => {
        if (!isAccountReady) return;
        if (!account) return localStorage.removeItem(WALLET_ID_LOCAL_STORAGE_KEY);

        localStorage.setItem(WALLET_ID_LOCAL_STORAGE_KEY, account.meta.source);
    }, [isAccountReady, address, account]);
}

function Component() {
    const { isApiReady } = useApi();
    const { isAccountReady } = useAccount();

    useWalletSync();

    const isAppReady = isApiReady && isAccountReady;
    console.log(isAppReady)
    console.log(isAccountReady);
    return (
        <div className="flex flex-row">
            <Header isAccountVisible={isAccountReady} />
            {isAppReady ? <Saludo /> : <p>Se está cargando</p>}
        </div>
    );
}

export const App = withProviders(Component);