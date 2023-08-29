"use client";

import { useEffect } from "react";
import "@styles/about-us.css";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="aboutMainCtn">
      <div className="aboutMainTitleCtn">
        <div className="container">
          <div className="aboutMainTitleWrapper">
            <h1>ABOUT US</h1>
            <p>
              <Link href="/">Home</Link>
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              About us
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="aboutMainContent">
          <div className="aboutMainOpacityCtn">
            <div>
              <p>
                <span>Alphaden Holdings</span> stands at the forefront of
                transformative change, spearheading innovation and sustainable
                growth in a rapidly evolving global landscape. With an
                unwavering dedication to excellence, we foster a culture of
                ingenuity and collaboration, empowering our subsidiaries to
                excel in their respective domains.
              </p>
              <p>
                Guided by our core values of integrity, adaptability, and social
                responsibility, we continuously strive to make a positive impact
                on the world. Together with our diverse portfolio of
                subsidiaries, we forge ahead with a shared vision: to shape a
                brighter, more resilient future for industries spanning
                Engineering Procurement Construction and Installation (EPCI),
                Energy, Technology, Food and Beverage, Entertainment, Green
                Energy, Marine Services, Healthcare, and beyond.
              </p>
              <p>
                Alphaden's EPCI subsidiary ( Alphaden Energy ) excels in
                providing comprehensive solutions for major infrastructure and
                construction projects. It specializes in engineering design,
                procurement, efficient supply chain management, construction,
                and installation services. By leveraging cutting-edge
                technologies and fostering a culture of excellence, this segment
                delivers world-class projects on schedule and within budget,
                catering to diverse clients globally.
              </p>
              <ul>
                <li>
                  <span>Energy :</span> The Energy division plays a pivotal role
                  in Alphaden's portfolio, focusing on traditional and renewable
                  energy resources. With a commitment to sustainability, this
                  segment invests in conventional power generation as well as
                  renewable energy projects such as Gas, solar, and hydrogen
                  power. Through strategic partnerships and acquisitions, the
                  division expands its reach across the energy sector while
                  contributing to a greener future.
                </li>
                <li>
                  <span>Gas Services :</span> Alphaden Gas Subsidiary is a
                  leading name in the oil and gas industry, specializing in
                  developing comprehensive midstream and downstream solutions.
                  With our cutting-edge expertise and dedication to innovation,
                  we have cemented our position as a trusted partner for
                  companies seeking top-notch gas processing services and
                  hydrogen production capabilities. Our expertise in gas
                  processing sets us apart in the industry.
                </li>
                <li>
                  <span>Technology :</span> In the fast-paced world of
                  technology, Alphaden's Technology subsidiary ( Alphaden
                  Technologies ) remains at the forefront of innovation. It
                  offers a wide range of cutting-edge products and services,
                  including software and hardware development, and emerging
                  technologies. By fostering research and development
                  initiatives, this segment aims to disrupt markets with its
                  software and hardware products in different sectors and lead
                  the digital transformation landscape.
                </li>
                <li>
                  <span>Green Energy :</span> Driven by a commitment to
                  environmental sustainability, Alphaden's Green Energy
                  subsidiary, Alphaden Green Energies focuses on developing and
                  implementing eco-friendly solutions. This includes projects
                  related to renewable energy, energy-efficient technologies,
                  micro-grid development, battery power systems, and sustainable
                  development initiatives. The segment strives to mitigate the
                  impact of climate change and foster a greener planet.
                </li>
                <li>
                  <span>Marine Services :</span> The Marine Services subsidiary
                  excels in providing a wide array of maritime solutions, within
                  the oil and gas services sector, logistics, vessel management,
                  and offshore support services. With an emphasis on safety,
                  efficiency, and environmental responsibility, this segment
                  caters to West African clients in the maritime industry while
                  navigating complex challenges.
                </li>
                <li>
                  <span>Entertainment :</span> The Entertainment division within
                  Alphaden Holdings known as Parc Africa engages in the
                  creation, production, and distribution of captivating and
                  engaging content across diverse media platforms. It includes
                  movie production studios, digital media, gaming enterprises,
                  motorsport and theme park/water/FEC development. By staying
                  attuned to evolving trends, this segment aims to captivate
                  global audiences with innovative and thought-provoking
                  entertainment options focused on the sub-Saharan African
                  market.
                </li>
                <li>
                  <span>Food and Beverage :</span> Good Life Foods and Beverage
                  the subsidiary has earned a reputation for delivering quality
                  products and services. With a focus on delivery excellence and
                  consumer satisfaction, it encompasses various businesses,
                  including bakery, food manufacturing, distribution, water
                  bottling, and beverage distribution. This segment stays
                  attuned to evolving consumer preferences and invests in
                  sustainable practices to contribute to a healthier food
                  ecosystem.
                </li>
                <li>
                  <span>Healthcare :</span> Alphaden's Healthcare subsidiary
                  places a significant emphasis on enhancing people's well-being
                  by investing in state-of-the-art telemedicine technologies,
                  research and development, pharmaceuticals, and digital
                  healthcare services. It strives to improve access to quality
                  healthcare, advance medical knowledge, and promote a healthier
                  society.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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

export default page;
