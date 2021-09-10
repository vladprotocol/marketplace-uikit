import React from "react";
import { localStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  return (
      <button type="button"
        className="btn btn-with-icon text-uppercase"
        onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(localStorageKey, "1");
        onDismiss();
        }}>
          {title} <span><Icon width="32px" /></span>
      </button>
  );
};

export default WalletCard;
