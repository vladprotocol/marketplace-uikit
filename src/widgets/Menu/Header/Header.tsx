import React from 'react'
import { Link } from 'react-router-dom'
import { Flex } from "../../../components/Flex";
import UserBlock from "../UserBlock";
import Avatar from "../Avatar";
import { Login } from "../../WalletModal/types";
import '../../../style/css/Header.css'

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  profile: any
}

const Header: React.FC<Props> = ({
  account,
  login,
  logout,
  profile,
}) => {
  return (
    <>
      {/* <!-- Start of Navigation --> */}
      <section className="navbar-sec">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="./">
              <i>
                <img src="assets/images/vladcirclelogo.png" className="img-fluid" alt="Vlad Finance Logo" />
              </i>
              Vlad.Finance
            </a>
            <button
              className="navbar-toggler"
              id="mbtn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 tp-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/token-facts.html">
                    Token Facts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="https://app.vlad.finance">
                    Farms
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="https://app.vlad.finance/nft">
                    NFTs
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="team.html">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pactive" href="market-place.html">
                    Marketplace
                  </a>
                </li>
              </ul>
              <ul className="top-sm-nav ms-3">
                <li>
                  <Link to="https://t.me/VladFinanceOfficial" target="_blank">
                    <div>
                      <img src="assets/images/telegramicon.svg" className="img-fluid" alt="" />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://vlad-finance.medium.com/" target="_blank">
                    <div>
                      <img src="assets/images/mediumicon.svg" className="img-fluid" alt="" />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com/VladFinance" target="_blank">
                    <div>
                      <img src="assets/images/twitter-logo.svg" className="img-fluid" alt="" />
                    </div>
                  </Link>
                </li>
              </ul>
              <ul className="tp-navconnect ms-3">
                <li>
                  <Link to="/" target="_blank" className="cmynft" data-bs-toggle="modal" data-bs-target="#myNft">
                    <div>My NFT</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Connect wallet Popup */}
          <Flex>
            <UserBlock account={account} login={login} logout={logout} />
            {profile && <Avatar profile={profile} />}
          </Flex>
          {/* End of Wallet Popup */}
          {/* Connect myNft Popup */}
          <div
            className="ctm-modal modal fade"
            id="myNft"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog ctmmodal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    <img src="assets/images/wallet.svg" alt="wallet icon" />
                    Account
                  </h5>
                  <button type="button" className="btn-close ctm-btnclose" data-bs-dismiss="modal" aria-label="Close">
                    CANCEL
                  </button>
                </div>
                <div className="modal-body">
                  <hr />
                  <p>
                    Connected with <b>Wallet Connect</b>
                  </p>
                  <ul className="mynft-body">
                    <li>
                      <Link to="/">
                        0x1b82...6666{' '}
                        <span>
                          <img src="assets/images/external-link.svg" alt="external" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                  <ul className="account-action">
                    <li>
                      <Link to="/">Log Out</Link>
                    </li>
                    <li>
                      <Link to="/">Copy Address</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End of Wallet Popup */}
        </nav>
      </section>
      {/* <!-- End of Navigation --> */}
    </>
  )
}

export default React.memo(Header)
