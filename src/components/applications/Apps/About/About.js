import "./About.css";
import JOEAL from "../../../../assets/JOEAL1.jpeg";
const About = (props) => {
  return (
    <div
      className="idContainer"
      style={
        props.maximize
          ? { height: "100%", width: "100%" }
          : { height: "500px", width: "400px" }
      }
    >
      <div className="name">Joeal Santhana Raj</div>
      <img src={JOEAL} alt={"Joeal"} className="photo" />
      <div className="social">
        <a
          href="https://www.facebook.com/x.joealsanthanaraj/"
          class="fa fa-facebook"
          target="_blank"
        ></a>
        <a
          href="https://twitter.com/XJoeal"
          class="fa fa-twitter"
          target="_blank"
        ></a>
        <a
          href="mailto: xjoeal@gmail.com"
          class="fa fa-google"
          target="_blank"
        ></a>
        <a
          href="https://www.linkedin.com/in/joeal"
          class="fa fa-linkedin"
          target="_blank"
        ></a>
        <a
          href="https://www.instagram.com/p/CGclmlRFznX/?igshid=1a4wwm8z5h79x"
          class="fa fa-instagram"
          target="_blank"
        ></a>
      </div>
    </div>
  );
};
export default About;
