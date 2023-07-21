"use client";

import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

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
            <h5
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="300"
            >
              WE PROVIDE
            </h5>
            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            >
              RELIABLE <span>SOLUTIONS</span>
            </h2>
            <h2
              data-aos="fade-up"
              data-aos-duration="2500"
              data-aos-offset="300"
            >
              FOR ALL SEGMENTS
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="300"
            >
              We strive to make your day a better williow for the grace to abide
              in the glory of his mercies and togetherness of the living who
              cherish what the do and offer.
            </p>
            {/* <Link href="/about-us" alt="About alphaden">
              Learn more
            </Link> */}
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
      <section className="container mt-5">
        <div className="row my-5">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
            <div className={styles.ourValueWrapper}>
              <div className={styles.iconCtn}>
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
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <h3
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="300"
              >
                Mission Statement
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="300"
              >
                Constantly adopting efficiency dynamics in empowering people to
                deliver excellence with innovation in the pursuit of perfection.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4  col-sm-6 col-12 ">
            <div className={styles.ourValueWrapper}>
              <div className={styles.iconCtn}>
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
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
              </div>
              <h3
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="300"
              >
                Our Vision
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="300"
              >
                To be the dominant EPCI service provider from Africa, delivering
                capital projects globally.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4  col-sm-6 col-12 ">
            <div className={styles.ourValueWrapper}>
              <div className={styles.iconCtn}>
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
                    d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                  />
                </svg>
              </div>
              <h3
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="300"
              >
                Core Values
              </h3>
              <ul
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="300"
              >
                <li>P-eople First</li>
                <li>I-ntegrity</li>
                <li>I-nnovation</li>
                <li>E-fficiency</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4  col-sm-6 col-12 ">
            <div className={styles.ourValueWrapper}>
              <div className={styles.iconCtn}>
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
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </div>
              <h3
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="300"
              >
                Strategy
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="300"
              >
                Our Strategy seeks to maintain us as one of the global leaders
                in the oil and gas industry with a focus….
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className={styles.aboutUs}>
          <div className={styles.aboutUsContent}>
            <h4
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="300"
            >
              WHAT WE DO
            </h4>
            <p>
              The<span> ‘ALPHA’S DEN’ </span>is a hub of professional and well
              experienced Alpha’s, championing their fields while collectively
              making up a provider of fit-for-purpose services to clients across
              various industries.
              <br /> <br /> An Indigenous company, founded over 2 decades ago
              yet quite modern as we continue to show that People, Innovation,
              Integrity & Efficiency values are key towards the success of every
              project.
              <br /> <br />
              We have an unquenchable desire to contribute positively to the
              development of our natural environment & have stayed true to our
              name due to our excellence and strategic contrivance in
              successfully delivering various projects.
            </p>

            <Link href="/about-us">Read more</Link>
          </div>
          <div className={styles.aboutUsImg}>
            <Image
              src="/assets/images/about.png"
              alt="Alphaden group"
              width={100}
              height={30}
              className={styles.aboutImage}
            />
          </div>
        </div>
      </section>
      <section className="container">
        <div className={styles.serviceCtn}>
          <div className={styles.titleCtn}>
            <h1>Our Services</h1>
          </div>
          <div className="row my-5">
            <div className="col-lg-4 col-sm-6 col-12 ">
              <Link href="alphadenenergy.com">
                <div className={styles.serviceWrapper}>
                  <div className={styles.imgCtn}>
                    <Image
                      src="/assets/images/electricity.jpeg"
                      alt="Alphaden group"
                      width={100}
                      height={30}
                    />
                  </div>

                  <h5
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="300"
                  >
                    Alphaden Electricity and Power
                  </h5>
                  <p>
                    inappropriate behavior is often laughed off as “boys will be
                    boys,” women face higher conduct women face higher conduct.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 ">
              <Link href="alphadenenergy.com">
                <div className={styles.serviceWrapper}>
                  <div className={styles.imgCtn}>
                    <Image
                      src="/assets/images/alphaEneg.jpg"
                      alt="Alphaden group"
                      width={100}
                      height={30}
                    />
                  </div>

                  <h5
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="300"
                  >
                    Alphaden Energy
                  </h5>
                  <p>
                    inappropriate behavior is often laughed off as “boys will be
                    boys,” women face higher conduct women face higher conduct.
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-sm-6 col-12 ">
              <Link href="alphadenenergy.com">
                <div className={styles.serviceWrapper}>
                  <div className={styles.imgCtn}>
                    <Image
                      src="/assets/images/greenEnergy.jpeg"
                      alt="Alphaden group"
                      width={100}
                      height={30}
                    />
                  </div>

                  <h5
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="300"
                  >
                    Alphaden Green Energy
                  </h5>
                  <p>
                    inappropriate behavior is often laughed off as “boys will be
                    boys,” women face higher conduct women face higher conduct.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 ">
              <Link href="alphadenenergy.com">
                <div className={styles.serviceWrapper}>
                  <div className={styles.imgCtn}>
                    <Image
                      src="/assets/images/alphaGas.jpg"
                      alt="Alphaden group"
                      width={100}
                      height={30}
                    />
                  </div>

                  <h5
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="300"
                  >
                    Alphaden Gas
                  </h5>
                  <p>
                    inappropriate behavior is often laughed off as “boys will be
                    boys,” women face higher conduct women face higher conduct.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 ">
              <Link href="alphadenenergy.com">
                <div className={styles.serviceWrapper}>
                  <div className={styles.imgCtn}>
                    <Image
                      src="/assets/images/alphaGas2.jpeg"
                      alt="Alphaden group"
                      width={100}
                      height={30}
                    />
                  </div>

                  <h5
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="300"
                  >
                    Alphaden Technology
                  </h5>
                  <p>
                    inappropriate behavior is often laughed off as “boys will be
                    boys,” women face higher conduct women face higher conduct.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className={styles.titleCtn2}>
          <h1>Projects</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>

        <div className={styles.projectCtn}>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-12 p-0">
              <div className={styles.projectOne}>
                <h4>Alex Complex for Residence</h4>
                <p>
                  LCD screens are uniquely modern in style, and the liquid
                  crystals that make them work have allowed humanity to create
                  slimmer.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 p-0">
              <div className={styles.projectTwo}>
                <h4>Alex Complex for Residence</h4>
                <p>
                  LCD screens are uniquely modern in style, and the liquid
                  crystals that make them work have allowed humanity to create
                  slimmer.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 p-0">
              <div className={styles.projectThree}>
                <h4>Alex Complex for Residence</h4>
                <p>
                  LCD screens are uniquely modern in style, and the liquid
                  crystals that make them work have allowed humanity to create
                  slimmer.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 p-0">
              <div className={styles.projectFour}>
                <h4>Alex Complex for Residence</h4>
                <p>
                  LCD screens are uniquely modern in style, and the liquid
                  crystals that make them work have allowed humanity to create
                  slimmer.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 p-0">
              <div className={styles.projectFive}>
                <h4>Alex Complex for Residence</h4>
                <p>
                  LCD screens are uniquely modern in style, and the liquid
                  crystals that make them work have allowed humanity to create
                  slimmer.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 p-0">
              <div className={styles.projectSix}>
                <h4>Alex Complex for Residence</h4>
                <p>
                  LCD screens are uniquely modern in style, and the liquid
                  crystals that make them work have allowed humanity to create
                  slimmer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.ratingCtn}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2">
                <h4>
                  <CountUp
                    end={100}
                    start={0}
                    duration={4}
                    enableScrollSpy={true}
                  />
                </h4>
                <p>Projects completed</p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2">
                <h4>
                  <CountUp
                    end={300}
                    start={0}
                    duration={4}
                    enableScrollSpy={true}
                  />
                </h4>
                <p>Happy clients</p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2">
                <h4>
                  <CountUp
                    end={160}
                    start={0}
                    duration={4}
                    enableScrollSpy={true}
                  />
                </h4>
                <p>Task completed</p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2">
                <h4>
                  <CountUp
                    end={200}
                    start={0}
                    duration={4}
                    enableScrollSpy={true}
                  />
                </h4>
                <p>Token</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className={styles.partnerCtn}>
          <div className={styles.titleCtn2}>
            <p>PARTNERS & SPONSORS</p>
            <h1>OFFICIAL SPONSOR</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className={styles.partner}>
                <Image src="/assets/images/logo_1.png" width={50} height={60} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className={styles.partner}>
                <Image src="/assets/images/logo_2.png" width={50} height={60} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className={styles.partner}>
                <Image src="/assets/images/logo_3.png" width={50} height={60} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className={styles.partner}>
                <Image src="/assets/images/logo_4.png" width={50} height={60} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className={styles.partner}>
                <Image src="/assets/images/logo_5.png" width={50} height={60} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className={styles.partner}>
                <Image src="/assets/images/logo_6.png" width={50} height={60} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className={styles.partner}>
                <Image src="/assets/images/logo_7.png" width={50} height={60} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className={styles.partner}>
                <Image src="/assets/images/logo_8.png" width={50} height={60} />
              </div>
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
                  <p>184 Main Collins Street</p>
                </div>
                <div>
                  <h5>Phone:</h5>
                  <p>(226) 446 9371</p>
                </div>
                <div>
                  <h5>Email:</h5>
                  <p>confer@gmail.com</p>
                </div>
                <div>
                  <h5>Website:</h5>
                  <p>www.confer.com</p>
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
