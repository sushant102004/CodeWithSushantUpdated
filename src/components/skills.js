import techStackOne from "./../assets/images/Tech Icons.svg";
import techStackTwo from "./../assets/images/Tech Icons2.svg";

export default function Skills() {
  return (
    <>
      <p className="text-center text-xl font-medium mt-8">Worked On</p>
      <hr
        className="mx-auto w-1/6 bg-yellow-400 rounded-md mt-2 lg:w-12"
        style={{ height: "0.3rem" }}
      />
      <img
        src={techStackOne}
        className="mx-auto px-8 mt-8 lg:px-96"
        alt="tech stack"
      />

      <img
        src={techStackTwo}
        className="mx-auto px-28 mt-8 pb-8 lg:w-2/5"
        alt="tech stack"
      />
    </>
  );
}
