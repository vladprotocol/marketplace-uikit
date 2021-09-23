import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
      <section className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 inner-banner-text text-center">
              <div className="innerbannercopy">
                <h1>Discover, Collect, and Trade NFTs</h1>
                <p>A curated marketplace for the dark underdwellers.</p>
                {/* <div className="innerbannercopy-btn">
                  <ul>
                    <li>
                      <Link to="/" className="btn-white">
                        APPLY TO BE LISTED
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="btn-black">
                        EXPLORE
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
              {/* <div class="downarrow">
                              <img src="assets/images/scroll-down-icon.svg" class="img-fluid" alt="">
                          </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 specialcard-wrap">
              <div className="specialcard">
                <h2 className="section-title">Vlad Genesis Collection</h2>
                <p>The Vlad Finance genesis collection that started it all.</p>
                <ul>
                  <li>
                    <Link to="/genesis-collection">Explore Collection</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Banner
