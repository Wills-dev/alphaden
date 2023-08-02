"use client";

import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/about-us.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="main-ctn">
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <div>
            <h2
              data-aos="fade-up"
              data-aos-duration="2500"
              data-aos-offset="300"
            >
              Alphaden Holdings:
            </h2>
            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            >
              Empowering Diversified <span> Growth</span>
            </h2>

            <p>
              Alphaden Holdings is a prominent and dynamic multinational holding
              company, boasting a diverse portfolio of subsidiaries operating
              across several key sectors.
            </p>
            <Link
              className={styles.button}
              href="/about-us"
              alt="About alphaden"
            >
              More information
            </Link>
          </div>
        </div>
      </header>
      <section className="container">
        <div className={styles.aboutUs}>
          <div className={styles.aboutUsContent}>
            <h4>The Holding Company</h4>
            <p>
              Alphaden Holdings is a prominent and dynamic multinational holding
              company, boasting a diverse portfolio of subsidiaries operating
              across several key sectors.
              <br /> <br /> Established with a vision to drive innovation,
              efficiency, and sustainable growth, Alphaden's strategic approach
              centers on nurturing its subsidiaries' expertise in Engineering
              Procurement Construction and Installation (EPCI), Energy,
              Technology, Food and Beverage, Entertainment, Green Energy, Marine
              Services, and Healthcare industries. to name a few.
            </p>

            <Link href="/about-us">Read more</Link>
          </div>
        </div>
      </section>
      <section className="container mt-5">
        <div className="row my-5">
          <div className=" col-12 ">
            <div className={styles.ourValueWrapper}>
              <div className={`${styles.sectorCtn} ${styles.sector1}`}>
                <h3>Energy</h3>
              </div>
              <p>
                Alphaden Energy excels in providing comprehensive solutions for
                major infrastructure and construction projects. It specializes
                in engineering design, procurement, efficient supply chain
                management, construction, and installation services. By
                leveraging cutting-edge technologies and fostering a culture of
                excellence, this segment delivers world-class projects on
                schedule and within budget, catering to diverse clients
                globally.
              </p>
              <div className={styles.sectorWrap}>
                <div>
                  <Image
                    src="/assets/images/alphadenenergy-removebg-preview.png"
                    width={80}
                    height={50}
                  />
                </div>

                <h5>Alphaden Energy</h5>
              </div>
            </div>
          </div>

          <div className="  col-12 ">
            <div className={styles.ourValueWrapper}>
              <div className={`${styles.sectorCtn} ${styles.sector2}`}>
                <h3>Technology:</h3>
              </div>
              <p>
                Alphaden's Technology subsidiary, Alphaden Technologies, leads
                in innovation, offering cutting-edge software, hardware, and
                emerging technology solutions. Through research and development,
                it disrupts markets in various sectors, spearheading digital
                transformation.
              </p>
              <div className={styles.sectorWrap}>
                <div>
                  <Image
                    src="/assets/images/alphadentech-removebg-preview.png"
                    width={80}
                    height={50}
                  />
                </div>

                <h5>Alphaden Technology</h5>
              </div>
            </div>
          </div>
          <div className=" col-12 ">
            <div className={styles.ourValueWrapper}>
              <div className={`${styles.sectorCtn} ${styles.sector5}`}>
                <h3>Green Energy:</h3>
              </div>
              <p>
                Alphaden's Green Energy subsidiary, Alphaden Green Energies, is
                dedicated to environmental sustainability through eco-friendly
                solutions. It focuses on renewable energy projects,
                energy-efficient technologies, micro-grid development, battery
                power systems, and sustainable initiatives, combating climate
                change and promoting a greener planet.
              </p>
              <div className={styles.sectorWrap}>
                <div>
                  <Image
                    src="/assets/images/alphadengreen-removebg-preview.png"
                    width={80}
                    height={50}
                  />
                </div>

                <h5>Alphaden Green</h5>
              </div>
            </div>
          </div>
          <div className="col-12 ">
            <div className={styles.ourValueWrapper}>
              <div className={`${styles.sectorCtn} ${styles.sector6}`}>
                <h3>Marine Services:</h3>
              </div>
              <p>
                Alphaden's Marine Services subsidiary excels in delivering
                diverse maritime solutions, including oil and gas services,
                logistics, vessel management, and offshore support. Prioritizing
                safety, efficiency, and environmental responsibility, it serves
                West African clients, tackling complex industry challenges.
              </p>
              <div className={styles.sectorWrap}>
                <div>
                  <Image
                    src="/assets/images/alphalogo-removebg-preview.png"
                    width={80}
                    height={50}
                  />
                </div>

                <h5>Alphaden Marine</h5>
              </div>
            </div>
          </div>
          <div className=" col-12 ">
            <div className={styles.ourValueWrapper}>
              <div className={`${styles.sectorCtn} ${styles.sector3}`}>
                <h3>Food and Beverage:</h3>
              </div>
              <p>
                Good Life Foods and Beverage, a subsidiary of Alphaden Holdings,
                is renowned for its quality products and services. It includes
                bakery, food manufacturing, distribution, water bottling, and
                beverage distribution. Focused on delivery excellence and
                consumer satisfaction, this segment adapts to evolving
                preferences and invests in sustainable practices for a healthier
                food ecosystem.
              </p>
              <div className={styles.sectorWrap}>
                <div>
                  <Image
                    src="/assets/images/alphalogo-removebg-preview.png"
                    width={80}
                    height={50}
                  />
                </div>

                <h5>GoodLife Foods.ng</h5>
              </div>
            </div>
          </div>
          <div className=" col-12 ">
            <div className={styles.ourValueWrapper}>
              <div className={`${styles.sectorCtn} ${styles.sector4}`}>
                <h3>Entertainment:</h3>
              </div>
              <p>
                Alphaden Holdings' Entertainment division, Parc Africa, produces
                captivating content across media platforms, including movies,
                digital media, gaming, and theme parks. It aims to captivate
                global audiences with innovative entertainment, focusing on the
                sub-Saharan African market.
              </p>
              <div className={styles.sectorWrap}>
                <div>
                  <Image
                    src="/assets/images/alphalogo-removebg-preview.png"
                    width={80}
                    height={50}
                  />
                </div>

                <h5>GoodLife Foods.ng</h5>
              </div>
            </div>
          </div>

          <div className=" col-12 ">
            <div className={styles.ourValueWrapper}>
              <div className={`${styles.sectorCtn} ${styles.sector7}`}>
                <h3>Healthcare:</h3>
              </div>
              <p>
                Alphaden's Healthcare subsidiary is dedicated to bolstering
                well-being through cutting-edge telemedicine technologies,
                research, pharmaceuticals, and digital healthcare services. The
                company endeavors to augment healthcare accessibility, advance
                medical knowledge, and foster a healthier society.
              </p>
              <div className={styles.sectorWrap}>
                <div>
                  <Image
                    src="/assets/images/alphalogo-removebg-preview.png"
                    width={80}
                    height={50}
                  />
                </div>

                <h5>GoodLife Foods.ng</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className={styles.serviceCtn}>
          <div className={styles.titleCtn}>
            <h1>Our Subsidaries</h1>
          </div>
          <div className="row my-5">
            <div className=" col-lg-4 col-sm-6 col-12 ">
              <a
                href="https://alphadenenergy.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.serviceWrapper}>
                  <div className={`${styles.imgCtn} `}>
                    <Image
                      src="/assets/images/serv6.jpeg"
                      alt="Alphaden group"
                      width={300}
                      height={220}
                    />
                  </div>

                  <h5>Alphaden Energy</h5>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 ">
              <a
                href="https://alphadengas.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.serviceWrapper}>
                  <div className={styles.imgCtn}>
                    <Image
                      src="/assets/images/alphaGas.jpg"
                      alt="Alphaden group"
                      width={300}
                      height={220}
                    />
                  </div>

                  <h5>Alphaden Gas</h5>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 ">
              <aboutUs
                href="https://alphadenenergy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.serviceWrapper}>
                  <div className={styles.imgCtn}>
                    <Image
                      src="/assets/images/serv5.jpeg"
                      alt="Alphaden group"
                      width={300}
                      height={220}
                    />
                  </div>

                  <h5>Alphaden Technologies</h5>
                </div>
              </aboutUs>
            </div>

            <div className="col-lg-4 col-sm-6 col-12 ">
              <a
                href="https://alphadenenergy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.serviceWrapper}>
                  <div className={styles.imgCtn}>
                    <Image
                      src="/assets/images/serv7.jpeg"
                      alt="Alphaden group"
                      width={300}
                      height={220}
                    />
                  </div>

                  <h5>Alphaden E and P</h5>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 ">
              <a
                href="https://alphadenenergy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.serviceWrapper}>
                  <div className={styles.imgCtn}>
                    <Image
                      src="/assets/images/serv1.jpeg"
                      alt="Alphaden group"
                      width={300}
                      height={220}
                    />
                  </div>

                  <h5>Alphaden Green Energy</h5>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-sm-6 col-12 ">
              <a
                href="https://alphadenenergy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.serviceWrapper}>
                  <div className={styles.imgCtn}>
                    <Image
                      src="/assets/images/food.jpeg"
                      alt="Alphaden group"
                      width={300}
                      height={220}
                    />
                  </div>

                  <h5>Goodlife Foods.ng</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className={styles.titleCtn2}>
          <p>HAVE QUESTION?</p>
          <h1>CONTACT US</h1>
        </div>
        <div className={styles.contactWrapperForm}>
          <div className="row">
            <div className="col-md-5 col-sm-4 col-12">
              <div className={styles.addressCtn}>
                <div>
                  <h5>Address:</h5>
                  <p>
                    {" "}
                    Plot 23 Furo Ezimora Street, Off Adewunmi Adebimpe Drive,
                    Off Marwa Roundabout, Lekki Phase 1, Lagos State, Nigeria.
                  </p>
                </div>
                <div>
                  <h5>Phone:</h5>
                  <p>+(234) 0909-933-3222</p>
                </div>
                <div>
                  <h5>Email:</h5>
                  <p>info@alphadenholding.com</p>
                </div>
                <div>
                  <h5>Website:</h5>
                  <p>www.alphadenholding.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-8 col-12">
              <form className={styles.contactFormCtn}>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="col-md-6 col-12">
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <input type="email" placeholder="E-Mail" />
                  </div>
                  <div className="col-md-6 col-12">
                    <input type="number" placeholder="Your Number" />
                  </div>
                </div>
                <div className="row">
                  <div className=" col-12">
                    <textarea type="text" placeholder="Your Message" rows={2} />
                  </div>
                </div>

                <button type="submit">
                  SEND MESSAGE{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
