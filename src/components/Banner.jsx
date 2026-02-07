import banner from "../assets/images/banner.jpg";
import introVideo from "../assets/videos/intro.mp4";

export default function Banner() {
  // If you prefer image: use <img />
  // If you want video (autoplay muted loop), uncomment video block and ensure file present.
  return (
    <div className="banner-wrap">
      <img src={banner} alt="Tournament Banner" className="banner-img" />
      {/* Example for video instead:
      <video className="banner-video" autoPlay muted loop>
        <source src={introVideo} type="video/mp4" />
      </video>
      */}
    </div>
  );
}
