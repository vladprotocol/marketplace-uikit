import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (

  <Modal title="Connect to a wallet" onDismiss={onDismiss}>
    {config.map((entry, index) => (
      <WalletCard
        key={entry.title}
        login={login}
        walletConfig={entry}
        onDismiss={onDismiss}
        mb={index < config.length - 1 ? "8px" : "0"}
      />
    ))}
    {/* <HelpLink */}
    {/*  href="https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain" */}
    {/*  external */}
    {/* > */}
    {/*  <HelpIcon color="primary" mr="6px" /> */}
    {/*  Learn how to connect */}
    {/* </HelpLink> */}
  </Modal>
  
  
  // <div className="ctm-modal modal fade wallet-modal" id="connectNft">
  //   <div className="modal-dialog ctmmodal-dialog">
  //     <div className="modal-content">
  //       <div className="modal-header">
  //         <h5 className="modal-title" id="exampleModalLabel">Connect to a wallet</h5>
  //         <button type="button" className="btn-close ctm-btnclose" data-bs-dismiss="modal" aria-label="Close" onClick={onDismiss}>CANCEL</button>
  //       </div>
  //       <div className="modal-body">
  //         <div className="wallet-body">
  //             {config.map((entry, index) => (
  //                 <WalletCard
  //                   key={entry.title}
  //                   login={login}
  //                   walletConfig={entry}
  //                   onDismiss={onDismiss}
  //                   mb={index < config.length - 1 ? "8px" : "0"}
  //                 />
  //             ))}
  //         </div>
  //         <ul className="wallet-help">
  //           <li><a href="#">Learn how to connect <span><img src="assets/images/righticon.svg" alt="question" /></span></a></li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // </div>
        
);

export default ConnectModal;
