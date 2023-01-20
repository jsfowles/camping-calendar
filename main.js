import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div style="width: 100vw; height: 100vh;padding: 64px; " >
    <iframe src="https://calendar.google.com/calendar/embed?height=1000&wkst=1&bgcolor=%23ffffff&ctz=America%2FDenver&mode=AGENDA&src=ZTljYTc3YjFkN2NjMDU0NzA2ZDczZGRmM2E2MzBiNDhiYWVhNzE0MTlkMTEyYjE4MGIyYzc5ZWVlMjkxZmU4ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23009688" style="border-width:0" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
  </div>
`;

setupCounter(document.querySelector("#counter"));
