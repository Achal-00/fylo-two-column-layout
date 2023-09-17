export default function Testimonial() {
  return (
    <div className="bg-white rounded-[0.3em] p-[2em] grid gap-[1em] shadow-md landscape:w-[60%] landscape:mt-[5%]">
      <img src="icon-quotes.svg" alt="" />
      <p className="font-others text-very-dark-blue text-[90%]">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div className="flex items-center gap-[1em]">
        <img
          src="avatar-testimonial.jpg"
          alt=""
          className="rounded-full w-[3em] landscape:w-[2em]"
        />
        <div>
          <p className="font-headings font-bold text-very-dark-blue text-[90%]">
            Kyle Burton
          </p>
          <p className="font-others text-very-dark-blue text-[80%]">
            Founder & CEO, Huddle
          </p>
        </div>
      </div>
    </div>
  );
}
