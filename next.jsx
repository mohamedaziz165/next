import styles from '../styles/Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Welcome to My Portfolio</h1>
    <p>Explore my skills and projects below.</p>
  </div>
);

export default Home;

import Image from 'next/image';
import profilePic from '../public/images/profile.jpg';

const About = () => (
  <div>
    <h1>About Me</h1>
    <Image src={profilePic} alt="Profile Picture" width={200} height={200} />
    <p>Hello! I'm a web developer specializing in Next.js.</p>
  </div>
);

export default About;
