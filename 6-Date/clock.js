const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();
  const hours = now.getHours();
  const min = now.getMinutes();
  const seconds = now.getSeconds();
  console.log(hours + ":" + min + ":" + seconds);

  const html = `<span>0${hours}</span> :
  <span>${min}</span> :
  <span>${seconds}</span>
  `;
  clock.innerHTML = html;
};
setInterval(tick, 1000);
