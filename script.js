function updateTime() {
  const newYorkTime = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  const londonTime = new Date().toLocaleString("en-US", {
    timeZone: "Europe/London",
  });
  const tokyoTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Tokyo",
  });

  document.querySelectorAll(".time")[0].textContent = newYorkTime;
  document.querySelectorAll(".time")[1].textContent = londonTime;
  document.querySelectorAll(".time")[2].textContent = tokyoTime;
}

setInterval(updateTime, 1000);
