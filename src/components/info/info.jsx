import clsx from "clsx";
import { useState } from "react";
import Description from "./description";

export default function Info(params) {
  let buttons = ["Tavsif", "Aktyorlsr va ijodkrar", "Sharhlar"];
  const [active, setActive] = useState(buttons[0]);
  return (
    <section className="">
      <div className="container ">
        <div className="flex gap-3">
          {buttons.map((item) => (
            <button
              onClick={() => setActive(item)}
              className={clsx("btn rounded-md mt-4 transition-all duration-300", {
                "btn-ghost": item !== active,
                "bg-green-600": item === active,
                "hover:bg-green-800": item === active,
              })}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
        {active === "Tavsif" && <Description />}
      </div>
    </section>
  );
}
