import React from "react";
import { Contract } from "@ethersproject/contracts";
import defiFireAbi from "./defiFireAbi.json";
import { ethers } from "ethers";
import { defiFireAddress } from "./environment";
import { Alert, Slide, Snackbar } from "@mui/material";
let walletAddress = "0x8ba1f109551bD432803012645Ac136ddd64DBA72";

const provider = new ethers.providers.JsonRpcProvider(
  "https://api.avax-test.network/ext/bc/C/rpc"
);

export const voidAccount = new ethers.VoidSigner(walletAddress, provider);
function useContract(address, ABI, signer) {
  return React.useMemo(() => {
    if (signer) {
      return new Contract(address, ABI, signer);
    } else {
      return new Contract(address, ABI, voidAccount);
    }
  }, [address, ABI, signer]);
}

export function useDefiFireContract(signer) {
  return useContract(defiFireAddress, defiFireAbi, signer);
}

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}
export function ToastNotify({ alertState, setAlertState }) {
  return (
    <Snackbar
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={alertState.open}
      autoHideDuration={3000}
      key={"top" + "center"}
      onClose={() => setAlertState({ ...alertState, open: false })}
    >
      <Alert
        onClose={() => setAlertState({ ...alertState, open: false })}
        severity={alertState.severity}
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );
}

export const changeNetwork = async () => {
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xA869" }],
    });
  } catch (error) {
    if (+error.code === 4902) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0xA869",
              chainName: "Avalanche Testnet",
              rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
              nativeCurrency: {
                name: "AVALANCHE COIN",
                symbol: "AVAX",
                decimals: 18,
              },
              blockExplorerUrls: ["https://testnet.snowtrace.io"],
            },
          ],
        });
      } catch (addError) {}
    }
  }
};
