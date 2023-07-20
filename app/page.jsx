import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className="main-ctn">
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <div>
            <h5>WE PROVIDE</h5>
            <h2>
              RELIABLE <span>SOLUTIONS</span>
            </h2>
            <h2>FOR ALL SEGMENTS</h2>
            <p>
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
              Learn more
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
