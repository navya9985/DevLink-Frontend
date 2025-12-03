
import image from "../assets/image.png"
const Corosoul = () => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${image})` }}>

      <div className="hero-content">
        <h1>Connect with Top Developers Worldwide</h1>
        <p>
          Build meaningful professional relationships, collaborate on real-world
          projects, and grow your career with DevLink.
        </p>

        <button className="hero-btn">Get Started</button>
      </div>

    </div>
  );
};

export default Corosoul;
