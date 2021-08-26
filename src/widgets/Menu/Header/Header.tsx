import React from 'react'
import { Link } from 'react-router-dom'
import { Flex } from "../../../components/Flex";
import UserBlock from "../UserBlock";
import Banner from '../Banner';
import Avatar from "../Avatar";
import { Login } from "../../WalletModal/types";
import '../../../style/css/Header.css'

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  profile: any;
  isHome?: boolean;
}

const Header: React.FC<Props> = ({
  account,
  login,
  logout,
  profile,
  isHome
}) => {
  return (
    <>
      <div className={isHome ? "mkt-bg" : ""}>
        {/* <!-- Start of Navigation --> */}
        <section className="navbar-sec">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <a className="navbar-brand" href="./">
                <i>
                  <img src="/assets/images/vladcirclelogo.png" className="img-fluid" alt="Vlad Finance Logo" />
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
                    <Link className="nav-link pactive" to="/">
                      Marketplace
                    </Link>
                  </li>
                </ul>
                <ul className="top-sm-nav ms-3">
                  <li>
                    <Link to="https://t.me/VladFinanceOfficial" >
                      <div>
                        <img src="/assets/images/telegramicon.svg" className="img-fluid" alt="" />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://vlad-finance.medium.com/">
                      <div>
                        <img src="/assets/images/mediumicon.svg" className="img-fluid" alt="" />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://twitter.com/VladFinance">
                      <div>
                        <img src="/assets/images/twitter-logo.svg" className="img-fluid" alt="" />
                      </div>
                    </Link>
                  </li>
                </ul>
                <ul className="tp-navconnect ms-3">

                  {/* Connect wallet Popup */}
                  <li>
                    <Flex>
                      <UserBlock account={account} login={login} logout={logout} />
                      {profile && <Avatar profile={profile} />}
                    </Flex>
                  </li>
                  {/* End of Wallet Popup */}
                  <li>
                    <Link to={account ? "/my-nft" : ""} className="cmynft">
                      <div>My NFT</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
        {/* <!-- End of Navigation --> */}
        {isHome && <Banner />}
      </div>
    </>
  )
}

export default React.memo(Header)
