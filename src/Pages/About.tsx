import KeelanChristie from '../assets/homepage_image_scaled.png';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Keelan Christie</h1>
        <p>Learn more about me, my academic background, and my projects and skills.</p>
      </header>
      <div className="about-content">
        <h2>About</h2>
        <p>
        Hello! I'm Keelan Christie, a passionate Product and Experience Designer. With a foundation in Product Design and I am advancing my studies in Interaction and Experience Design, I aim to create solutions that are both innovative and user-focused.
        </p>

        <h2>My Journey</h2>
        <p>
        I began my career in product design, where I developed a solid understanding of creating functional and aesthetically pleasing designs. Currently, I’m developing new skills with a master’s in Interaction and Experience Design, where I am exploring the interconnection of usability, empathy, and technology.
        </p>

        <h2>Design Philosophy</h2>
        <p>
        I believe that great design starts with understanding people. My approach revolves around human-centered design principles, ensuring that each project I undertake is both accessible and meaningful. Whether it's a physical product or a digital interface, I aim to create seamless, engaging experiences that add real value to users' lives.
        </p>

        <h2>Skills & Interests</h2>
	      <p>
        Key Skills:
        </p>
        <p>
        I have a solid foundation in digital design tools. I am proficient in
        Solidworks, the Affinity suite, Adobe Illustrator and Adobe XD.
        </p>
        <p>
          Additionally, my expertise extends to practical applications such as
          3D printing, model making, and prototyping. I take great care in my
          finishing process, ensuring meticulous attention to detail. This
          includes effectively sanding to a polished finish, spray painting, and
          accurately hand painting smaller details.
          </p>
          <p>
            I pride myself on my ability to effectively communicate ideas through
            various mediums, including sketching, discussion, and modeling,
            ensuring clear and concise expression of design concepts.
            My adaptability, creativity, and attention to detail are complemented
            by strong problem-solving abilities and a collaborative mindset.
          </p>
        

      </div>
      {/* Use the imported image variable here */}
      <img src={KeelanChristie} alt="Keelan Christie" className="about-image" />
    </div>
  );
}

export default About;
