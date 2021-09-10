import React from "react";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (  
  <div className="ctm-modal modal fade show wallet-modal" id="connectNft" style={{ display: 'block' }}>
    <div className="modal-dialog ctmmodal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Connect to a wallet</h5>
          <button type="button" className="btn-close ctm-btnclose" data-bs-dismiss="modal" aria-label="Close" onClick={onDismiss}>CANCEL</button>
        </div>
        <div className="modal-body">
          <div className="wallet-body">
              {config.map((entry, index) => (
                  <WalletCard
                    key={entry.title}
                    login={login}
                    walletConfig={entry}
                    onDismiss={onDismiss}
                    mb={index < config.length - 1 ? "8px" : "0"}
                  />
              ))}
          </div>
          <ul className="wallet-help">
            <li><a href="https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain">Learn how to connect <span><img src="assets/images/righticon.svg" alt="question" /></span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
        
);

export default ConnectModal;
