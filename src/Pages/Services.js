import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div>
      <h1>Services Page </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat
        metus lacus. Donec quis justo non dui placerat mattis. Mauris et sapien
        id leo porta eleifend ac quis turpis. Aenean eu convallis lorem. In
        viverra urna non mi faucibus, vel laoreet justo semper. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </p>
      <Link to="/Services/:201">Go to ServiceDetails</Link>
    </div>
  );
}
