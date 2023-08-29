"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import "../styles/about-us.css";
import Link from "next/link";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/about-us.css";

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const slideImages = [
    {
      url: "/assets/images/transport.jpg",
      caption: "How energy is transported",
    },
    {
      url: "/assets/images/stored.jpg",
      caption: "How energy is stored",
    },
  ];

  const slideImages1 = [
    {
      url: "/assets/images/banner1.jpg",
      caption: "How energy is consumed",
    },

    {
      url: "/assets/images/produced.jpg",
      caption: "How energy is produced",
    },
  ];

  const slideImages2 = [
    {
      url: "/assets/images/energy.jpeg",
      caption: "How energy is transported",
    },
    {
      url: "/assets/images/background.jpeg",
      caption: "How energy is consumed",
    },
    {
      url: "/assets/images/food.jpeg",
      caption: "How energy is stored",
    },
    {
      url: "/assets/images/food.jpg",
      caption: "How energy is produced",
    },
  ];

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
            <h2>
              Empowering Diversified <span> Growth</span>
            </h2>

            <p>
              Alphaden Holdings is a prominent and dynamic multinational holding
              company, boasting a diverse portfolio of subsidiaries operating
              across several key sectors.
            </p>
          </div>
          <div className={styles.headerLinks}>
            <ul>
              <li>
                <a href="#energy">Energy</a>
              </li>
              <li>
                <a href="#epci">EPCI</a>
              </li>
              <li>
                <a href="#technology">Technology</a>
              </li>
              <li>
                <a href="#food&beverage">Food & Beverage</a>
              </li>
            </ul>
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
          <div className=" col-12 " id="energy">
            <div className={styles.ourValueWrapper}>
              <div className={`${styles.sectorCtn} ${styles.sector1}`}>
                {screenWidth < 770 ? (
                  <div className="row">
                    <div className="col-12 px-0">
                      <Slide>
                        {slideImages2.map((slideImage, index) => (
                          <div key={index}>
                            <div
                              style={{
                                backgroundImage: `url(${slideImage.url})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                position: "relative",
                              }}
                              className={styles.energyCtn}
                            >
                              <span>{slideImage.caption}</span>
                            </div>
                          </div>
                        ))}
                      </Slide>
                    </div>
                  </div>
                ) : (
                  <div className="row">
                    <div className="col-md-6 col-12 px-0">
                      <Slide>
                        {slideImages.map((slideImage, index) => (
                          <div key={index}>
                            <div
                              style={{
                                backgroundImage: `url(${slideImage.url})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                position: "relative",
                              }}
                              className={styles.energyCtn}
                            >
                              <span>{slideImage.caption}</span>
                            </div>
                          </div>
                        ))}
                      </Slide>
                    </div>
                    <div className="col-md-6 col-12 px-0">
                      <Slide>
                        {slideImages1.map((slideImage, index) => (
                          <div key={index}>
                            <div
                              style={{
                                backgroundImage: `url(${slideImage.url})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                position: "relative",
                              }}
                              className={styles.energyCtn}
                            >
                              <span>{slideImage.caption}</span>
                            </div>
                          </div>
                        ))}
                      </Slide>
                    </div>
                  </div>
                )}
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

          <div className="  col-12 " id="epci">
            <div className={styles.ourValueWrapper}>
              <div className={`${styles.sectorCtn} ${styles.sector8}`}>
                <h3>Gas services</h3>
              </div>
              <p>
                Alphaden Gas Subsidiary is a leading name in the oil and gas
                industry, specializing in developing comprehensive midstream and
                downstream solutions. With our cutting-edge expertise and
                dedication to innovation, we have cemented our position as a
                trusted partner for companies seeking top-notch gas processing
                services and hydrogen production capabilities. Our expertise in
                gas processing sets us apart in the industry.
              </p>
              <div className={styles.sectorWrap}>
                <div>
                  <Image
                    src="/assets/images/alphadengas-removebg-preview.png"
                    width={80}
                    height={50}
                  />
                </div>

                <h5>Alphaden Gas</h5>
              </div>
            </div>
          </div>

          <div className="  col-12 " id="technology">
            <div className={styles.ourValueWrapper}>
              <div className={`${styles.sectorCtn} ${styles.sector2}`}>
                <h3>Technology</h3>
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
                <h3>Green Energy</h3>
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
                <h3>Alpha Marine:</h3>
              </div>
              <p>
                Alpha Marine subsidiary excels in delivering diverse maritime
                solutions, including oil and gas services, logistics, vessel
                management, and offshore support. Prioritizing safety,
                efficiency, and environmental responsibility, it serves West
                African clients, tackling complex industry challenges.
              </p>
              <div className={styles.sectorWrap}>
                <div>
                  <Image
                    src="/assets/images/alphalogo-removebg-preview.png"
                    width={80}
                    height={50}
                  />
                </div>

                <h5>Alpha Marine</h5>
              </div>
            </div>
          </div>
          <div className=" col-12 " id="food&beverage">
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

                <h5>Good Life Foods</h5>
              </div>
            </div>
          </div>
          <div className=" col-12 ">
            <div className={styles.ourValueWrapper}>
              <div className={`${styles.sectorCtn} ${styles.sector4}`}>
                <h3>Entertainment:</h3>
              </div>
              <p>
                Parc Management produces captivating content across media
                platforms, including movies, digital media, gaming, and theme
                parks. It aims to captivate global audiences with innovative
                entertainment, focusing on the sub-Saharan African market.
              </p>
              <div className={styles.sectorWrap}>
                <div>
                  <Image
                    src="/assets/images/alphalogo-removebg-preview.png"
                    width={80}
                    height={50}
                  />
                </div>

                <h5>Parc Management</h5>
              </div>
            </div>
          </div>

          <div className=" col-12 ">
            <div className={styles.ourValueWrapper}>
              <div className={`${styles.sectorCtn} ${styles.sector7}`}>
                <h3>Healthcare:</h3>
              </div>
              <p>
                Ocenture Telehealth Care is dedicated to bolstering well-being
                through cutting-edge telemedicine technologies, research,
                pharmaceuticals, and digital healthcare services. The company
                endeavors to augment healthcare accessibility, advance medical
                knowledge, and foster a healthier society.
              </p>
              <div className={styles.sectorWrap}>
                <div>
                  <Image
                    src="/assets/images/alphalogo-removebg-preview.png"
                    width={80}
                    height={50}
                  />
                </div>

                <h5> Ocenture Telehealth Care</h5>
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
                      src="/assets/images/engg.jpeg"
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

                  <h5>Good Life Foods</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className={styles.ceoCtn}>
          <div className={styles.ceoWrap}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              sequi similique velit neque blanditiis doloremque quos qui
              numquam, error odit, totam doloribus ut at! Officia esse dolorum,
              harum optio sapiente dolore ullam qui! Accusantium culpa officiis
              minima fuga porro commodi quos illo ducimus, animi est, ratione
              dolorum vero ad nulla. Explicabo necessitatibus praesentium itaque
              id recusandae adipisci, minima laborum temporibus deserunt quo
              quasi pariatur. Sapiente, quae! Repellendus voluptates, adipisci
              consectetur nesciunt odit reprehenderit, ab repellat amet sint
              quos reiciendis hic vel eveniet explicabo tempora molestiae
              laudantium quia necessitatibus inventore expedita provident quis
              molestias ut aut! Doloremque nisi odit asperiores numquam cum nam
              consequatur velit dolores voluptas. <br /> <br /> Iusto non ea
              ipsa ducimus dolorem, labore earum est corporis blanditiis at illo
              eos perspiciatis, impedit possimus praesentium eveniet hic
              sapiente cum explicabo. Aliquid assumenda necessitatibus nisi quod
              veniam quibusdam eum quaerat ducimus delectus quisquam ipsam
              accusamus similique fugiat eaque veritatis ut soluta quis nihil
              reiciendis quas voluptates, harum pariatur blanditiis possimus!
              Animi quaerat a nesciunt cupiditate officia distinctio corporis
              debitis necessitatibus exercitationem esse cumque nostrum dolorum
              perferendis numquam aliquid sapiente, mollitia laborum est.
              Obcaecati nobis aliquid vitae optio vero necessitatibus rerum esse
              odio temporibus? Corporis inventore facere nesciunt quod labore
              dignissimos hic repudiandae, at sit doloremque. <br /> <br />
              Tenetur eius soluta doloribus accusamus, porro libero architecto
              cumque ipsa possimus similique dolorum aperiam ipsum id ut? Saepe
              labore, excepturi obcaecati magnam consequuntur, hic odit alias
              temporibus sint nulla natus, suscipit rem ipsa accusamus? Quod
              reprehenderit recusandae odit, eaque exercitationem tenetur
              ducimus amet voluptatibus asperiores omnis corrupti id vel porro
              architecto ipsa et laborum voluptates blanditiis. Maxime hic amet
              architecto mollitia. Incidunt at non voluptas laboriosam sunt.
              Dignissimos minus, eius, maxime, blanditiis placeat magnam velit
              dolorum tempore ab voluptas amet dolorem facilis corporis
              cupiditate quod eaque obcaecati facere quo. A voluptates error
              quasi quos iusto magnam reiciendis accusamus cum quidem amet.
              Dolore quos exercitationem amet numquam obcaecati quidem sed
              perspiciatis velit maxime! Nesciunt hic quibusdam eligendi aliquid
              tempore, ea quisquam. Minima natus delectus dolore ullam voluptas
              ab saepe optio ducimus, mollitia dolorem veniam.
            </p>
            <p className={styles.sign}>
              CEO <br /> Charles Evan
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className={styles.newsWrap}>
          <div className={styles.newsHeader}>
            <h4>Latest News</h4>
          </div>
          <div className="row">
            <div className="col-md-6 col-12 mb-5">
              <div className={styles.newsCtn}>
                <div className={`${styles.newsImg} ${styles.newsImg1}`}>
                  <Image
                    src="/assets/images/food.jpeg"
                    alt="Alphaden group"
                    width={140}
                    height={160}
                  />
                </div>
                <div className={styles.newsContent}>
                  <a href="#">
                    <p>
                      Alphaden Holdings’ Non-Executive Director, Victor
                      Osadolor, Appointed to Presidential Committee on Fiscal
                      Policy and Tax Reforms
                    </p>
                    <p>August 11, 2023</p>
                    <p>
                      READ MORE{" "}
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
                          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 mb-5">
              <div className={styles.newsCtn}>
                <div className={`${styles.newsImg} ${styles.newsImg1}`}>
                  <Image
                    src="/assets/images/banner1.jpg"
                    alt="Alphaden group"
                    width={140}
                    height={160}
                  />
                </div>
                <div className={styles.newsContent}>
                  <a href="#">
                    <p>
                      Alphaden Holdings’ Non-Executive Director, Victor
                      Osadolor, Appointed to Presidential Committee on Fiscal
                      Policy and Tax Reforms
                    </p>
                    <p>August 11, 2023</p>
                    <p>
                      READ MORE{" "}
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
                          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 mb-5">
              <div className={styles.newsCtn}>
                <div className={`${styles.newsImg} ${styles.newsImg1}`}>
                  <Image
                    src="/assets/images/foodd.jpeg"
                    alt="Alphaden group"
                    width={140}
                    height={160}
                  />
                </div>
                <div className={styles.newsContent}>
                  <a href="#">
                    <p>
                      Alphaden Holdings’ Non-Executive Director, Victor
                      Osadolor, Appointed to Presidential Committee on Fiscal
                      Policy and Tax Reforms
                    </p>
                    <p>August 11, 2023</p>
                    <p>
                      READ MORE{" "}
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
                          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 mb-5">
              <div className={styles.newsCtn}>
                <div className={`${styles.newsImg} ${styles.newsImg1}`}>
                  <Image
                    src="/assets/images/food.jpg"
                    alt="Alphaden group"
                    width={140}
                    height={160}
                  />
                </div>
                <div className={styles.newsContent}>
                  <a href="#">
                    <p>
                      Alphaden Holdings’ Non-Executive Director, Victor
                      Osadolor, Appointed to Presidential Committee on Fiscal
                      Policy and Tax Reforms
                    </p>
                    <p>August 11, 2023</p>
                    <p>
                      READ MORE{" "}
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
                          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12  mb-5">
              <div className={styles.newsCtn}>
                <div className={`${styles.newsImg} ${styles.newsImg1}`}>
                  <Image
                    src="/assets/images/health.jpeg"
                    alt="Alphaden group"
                    width={140}
                    height={160}
                  />
                </div>
                <div className={styles.newsContent}>
                  <a href="#">
                    <p>
                      Alphaden Holdings’ Non-Executive Director, Victor
                      Osadolor, Appointed to Presidential Committee on Fiscal
                      Policy and Tax Reforms
                    </p>
                    <p>August 11, 2023</p>
                    <p>
                      READ MORE{" "}
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
                          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </p>
                  </a>
                </div>
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
                  <p>
                    {" "}
                    4th/5th floor, 11A Oko Owo street, Victoria Island, Lagos,
                    Nigeria.
                  </p>
                </div>
                <div>
                  <h5>Phone:</h5>
                  <p>+(234) 0700 257 4233</p>
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
