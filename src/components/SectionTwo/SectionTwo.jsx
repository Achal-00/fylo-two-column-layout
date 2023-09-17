import { useState } from "react";

export default function SectionTwo() {
  const [mail, setMail] = useState("");

  function submitHandlerBottom() {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(validRegex)) {
      document.querySelector(".bottom-error").classList.add("hidden");
      document
        .querySelector(".bottom-input")
        .classList.contains("border-red-500")
        ? document
            .querySelector(".bottom-input")
            .classList.replace("border-red-500", "border-green-500")
        : document
            .querySelector(".bottom-input")
            .classList.replace("border-transparent", "border-green-500");
    } else {
      document.querySelector(".bottom-error").classList.remove("hidden");
      document
        .querySelector(".bottom-input")
        .classList.contains("border-green-500")
        ? document
            .querySelector(".bottom-input")
            .classList.replace("border-green-500", "border-red-500")
        : document
            .querySelector(".bottom-input")
            .classList.replace("border-transparent", "border-red-500");
    }
  }

  return (
    <div className="bg-desaturated-blue p-[3.5em] text-center grid gap-[2em] landscape:grid-cols-[0.8fr_1fr] landscape:text-left landscape:py-[5em]">
      <div className="grid gap-[1em]">
        <h1 className="font-headings text-white font-bold text-[150%] landscape:text-[200%]">
          Get early access today
        </h1>
        <p className="font-others text-light-grey">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <div className="grid gap-[0.5em] w-[90%] mx-auto landscape:w-[80%] landscape:mx-0 landscape:justify-self-end self-center">
        <div>
          <input
            type="text"
            placeholder="email@example.com"
            className="h-[3em] font-headings text-[90%] rounded-[0.3em] pl-[1em] w-full bottom-input border-transparent border-[thin] outline-none"
            onChange={(e) => setMail(e.currentTarget.value)}
          />
          <p className="font-others text-light-greyish-blue text-[80%] text-left hidden bottom-error">
            Please check your email
          </p>
        </div>
        <button
          className="h-[3em] font-headings font-bold text-[90%] bg-bright-blue text-white rounded-[0.3em] landscape:w-[40%] hover:brightness-125"
          onClick={submitHandlerBottom}
        >
          Get Started For Free
        </button>
      </div>
    </div>
  );
}
