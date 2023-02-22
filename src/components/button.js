export default function CustomButton(props) {
  return (
    <>
      <div className="flex w-24 h-8 bg-yellow-400 rounded-md justify-center items-center text-sm text-slate-800 mx-auto lg:mx-0">
        <a href={props.link} className="bg-transparent">
          {props.text}
        </a>
      </div>
    </>
  );
}
