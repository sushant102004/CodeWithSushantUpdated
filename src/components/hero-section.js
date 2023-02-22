import heroSectionImage from "./../assets/images/hero-section.svg";
import linkedin from "./../assets/images/LinkedIn-Original.svg";
import github from "./../assets/images/Github-Original.svg";

export default function HeroSection() {
  return (
    <>
      <img
        src={heroSectionImage}
        className="w-64 mx-auto pt-24"
        alt="coder"
      ></img>
      <h1 className="text-center pt-10 text-2xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
        HI, I'M SUSHANT DHIMAN
      </h1>
      <p className="text-center text-slate-700 text-sm pt-6 tracking-wider md:text-lg lg:text-lg">
        An App & Back-End developer trying to convert <br></br> imagination into
        technology
      </p>
      <div className="flex justify-center mt-8">
        <img src={linkedin} alt="linkedin" className="w-6 mr-6"></img>
        <img src={github} alt="linkedin" className="w-6"></img>
      </div>
    </>
  );
}
