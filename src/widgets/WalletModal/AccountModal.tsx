import React from "react";
import CopyToClipboard from "./CopyToClipboard";
import { localStorageKey } from "./config";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => (
  
  <div className="ctm-modal modal fade show" id="myNft" style={{ display: 'block' }} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog ctmmodal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel"><img src="/assets/images/wallet.svg" alt="wallet icon" />Account</h5>
          <button type="button" className="btn-close ctm-btnclose" data-bs-dismiss="modal" aria-label="Close" onClick={onDismiss}>CANCEL</button>
        </div>
        <div className="modal-body">
          <hr />
          {/* <p>Connected with <b>Wallet Connect</b></p> */}
          <ul className="mynft-body">
            <li>
              <a href={`https://bscscan.com/address/${account}`} target="_blank" rel="noreferrer">{account} <span><img src="assets/images/external-link.svg" alt="external" /></span></a>
            </li>
          </ul>
          <div className="account-action">

                <button type="button"
                  className="text-uppercase"
                  onClick={() => {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                  }}
                >
                  Logout
                </button>

              <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AccountModal;
