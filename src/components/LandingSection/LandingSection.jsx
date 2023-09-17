import { useState } from "react";

export default function LandingSection() {
  const [mail, setMail] = useState("");

  function submitHandler() {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(validRegex)) {
      document.querySelector(".error-holder").classList.add("hidden");
      document
        .querySelector(".landing-input")
        .classList.contains("border-red-500")
        ? document
            .querySelector(".landing-input")
            .classList.replace("border-red-500", "border-green-500")
        : document
            .querySelector(".landing-input")
            .classList.replace("border-desaturated-blue", "border-green-500");
    } else {
      document.querySelector(".error-holder").classList.remove("hidden");
      document
        .querySelector(".landing-input")
        .classList.contains("border-green-500")
        ? document
            .querySelector(".landing-input")
            .classList.replace("border-green-500", "border-red-500")
        : document
            .querySelector(".landing-input")
            .classList.replace("border-desaturated-blue", "border-red-500");
    }
  }

  return (
    <div className="grid pt-[10%] gap-[3em] px-[5%] landscape:grid-cols-2 landscape:pt-[3%]">
      <div className="self-center landscape:col-start-2 landscape:col-end-3 landscape:row-start-1 landscape:row-end-2">
        <img
          src="illustration-1.svg"
          alt=""
          className="w-[90%] mx-auto landscape:w-full"
        />
      </div>
      <div className="self-center text-center grid gap-[1.5em] landscape:text-left">
        <h1 className="font-headings font-bold text-[200%] text-very-dark-blue landscape:lg:text-[230%]">
          All your files in one secure
          <br /> location, accessible anywhere.
        </h1>
        <p className="font-others text-desaturated-blue landscape:pr-[5%]">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <div className="grid gap-[1em] font-headings landscape:grid-cols-[1fr_0.7fr] landscape:pr-[8%]">
          <div>
            <input
              type="text"
              placeholder="Enter your email..."
              className="w-full border-[thin] border-desaturated-blue h-[4em] rounded-[0.3em] pl-[1em] text-[80%] landing-input outline-none"
              onChange={(e) => setMail(e.currentTarget.value)}
            />
            <p className="text-left font-others text-red-500 text-[80%] hidden error-holder">
              Please check your email
            </p>
          </div>
          <button
            className="bg-bright-blue h-[4em] rounded-[0.3em] text-white font-bold text-[80%] hover:opacity-80"
            onClick={submitHandler}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
