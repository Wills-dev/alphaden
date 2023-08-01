import React from "react";
import "@styles/footer.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footerWrap">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="footerCtn">
                <h4>Corporate Office</h4>
                <p>
                  Plot 23 Furo Ezimora Street, Off Adewunmi Adebimpe Drive, Off
                  Marwa Roundabout, Lekki Phase 1, Lagos State, Nigeria.
                </p>
                <p>+(234) 0909-933-3222</p>
                <p>info@alphadenenergy.com</p>
                <div className="footerSocial">
                  <Link href="twitter.com/">
                    <Image
                      src="/assets/icons/linkedin.svg"
                      width={20}
                      height={12}
                      alt="alphaden linkedin"
                    />
                  </Link>
                  <Link href="twitter.com/">
                    <Image
                      src="/assets/icons/instagram.svg"
                      width={20}
                      height={12}
                      alt="alphaden intagram"
                    />
                  </Link>
                  <Link href="twitter.com/">
                    <Image
                      src="/assets/icons/twitter.svg"
                      width={20}
                      height={12}
                      alt="Alphaden twitter"
                    />
                  </Link>
                  <Link href="twitter.com/">
                    <Image
                      src="/assets/icons/facebook.svg"
                      width={20}
                      height={12}
                      alt="Alphaden facebook"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="footerCtn">
                <h4>Operations</h4>
                <p>
                  No 36 Trans Amadi Layout, Port Harcourt, Rivers State,
                  Nigeria.
                </p>
                <p>info@alphadenenergy.com</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="footerCtn">
                <h4>South Korea Office</h4>
                <p>
                  #302, 42, Geojejungang-ro,15-Gil, Geoje-si, Kyeongsangnam-do,
                  Republic of Korea
                </p>
                <p>info@alphadenenergy.com</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="footerCtn">
                <h4>USA Office</h4>
                <p>5048 Nicollet Avenue, Minneapolis Mn. 55419, USA</p>
                <p>info@alphadenholding.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="privacyCtn">
          <p>Copyright © 2023 Alphaden Holding Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
