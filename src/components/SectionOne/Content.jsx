import Testimonial from "./Testimonial";

export default function Content() {
  return (
    <div className="px-[5%] grid gap-[2em] landscape:col-start-1 landscape:col-end-2 landscape:row-start-1 landscape:row-end-2 landscape:pl-[10%] landscape:gap-[1em]">
      <h1 className="font-headings text-center text-very-dark-blue font-bold text-[120%] landscape:text-left landscape:text-[160%] landscape:lg:text-[220%]">
        Stay productive, wherever you are
      </h1>
      <p className="font-others text-very-dark-blue landscape:pr-[6%]">
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>
      <p className="font-others text-very-dark-blue landscape:pr-[6%]">
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required!
      </p>
      <div className="flex items-center gap-[1em] border-b-[thin] w-max border-moderate-cyan mx-auto landscape:mx-0 hover:cursor-pointer hover:brightness-150">
        <p className="font-others text-moderate-cyan">See how Fylo works</p>
        <img src="icon-arrow.svg" alt="" />
      </div>
      <Testimonial />
    </div>
  );
}
