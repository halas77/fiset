import { createContext, ReactNode, useEffect, useState } from "react";
import { ethers } from "ethers";

type MainContextType = {
  account: string;
  connectWallet: () => void;
};

export const MainContext = createContext<MainContextType | undefined>(
  undefined
);

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    if (typeof window?.ethereum === "undefined") {
      console.log("Metamask is not insatlled!");
      alert("Metamask is not insatlled!");
      return;
    }
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);
      window.location.reload();
    } catch (error) {}
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (typeof window.ethereum === "undefined") {
        console.log("Metamask is not insatlled!");
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // check if wallet is connect
  useEffect(() => {
    checkIfWalletIsConnect();
  }, [account]);

  return (
    <MainContext.Provider value={{ account, connectWallet }}>
      {children}
    </MainContext.Provider>
  );
};
