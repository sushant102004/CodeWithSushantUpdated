import studyEase from "./../assets/images/StudyEaseLogo.svg";
import CustomButton from "./button";

export default function Project() {
  return (
    <>
      <div className="flex flex-col text-center items-center pt-16 lg:w-1/2 lg:mx-auto lg:flex lg:flex-row lg:text-left lg:pb-12">
        <img src={studyEase} className="w-56" alt="Study Ease"></img>
        <div className="lg:ml-24">
          <h2 className="font-medium text-lg mt-6 text-slate-800">
            Study Ease
          </h2>
          <p className="text-slate-700 text-sm px-4 mt-4  lg:px-0">
            Study Ease is designed to help students by providing free study
            notes. It consists of free educational material for engineering
            students.
            <br />
            <br />
            You can easily search topic-wise notes, or you can also upload your
            own notes if you want.
            <br />
            <br />
            <b>Technologies: -</b> NodeJS, ExpressJS, MongoDB, Flutter,
            Firebase, JWT, Digital Ocean, APIs
          </p>
          <div className="mt-6" />
          <CustomButton text="Download" />
          <div className="mt-6" />
        </div>
      </div>
    </>
  );
}
