const teams = [
  { name: "Chennai Super Kings", short: "CSK", nickname: "Yellow Army", titles: 5, years: [2010, 2011, 2018, 2021, 2023], color: "#f7d51d" },
  { name: "Mumbai Indians", short: "MI", nickname: "Mumbai Indians", titles: 5, years: [2013, 2015, 2017, 2019, 2020], color: "#1476d4" },
  { name: "Kolkata Knight Riders", short: "KKR", nickname: "Knight Riders", titles: 3, years: [2012, 2014, 2024], color: "#7438a8" },
  { name: "Royal Challengers Bengaluru", short: "RCB", nickname: "Royal Challengers", titles: 2, years: [2025, 2026], color: "#d71920" },
  { name: "Rajasthan Royals", short: "RR", nickname: "Royals", titles: 1, years: [2008], color: "#ea4c9a" },
  { name: "Sunrisers Hyderabad", short: "SRH", nickname: "Orange Army", titles: 1, years: [2016], color: "#f36b21" },
  { name: "Gujarat Titans", short: "GT", nickname: "Titans", titles: 1, years: [2022], color: "#169b8c" },
  { name: "Delhi Capitals", short: "DC", nickname: "Capitals", titles: 0, years: [], color: "#17479e" },
  { name: "Punjab Kings", short: "PBKS", nickname: "Kings", titles: 0, years: [], color: "#ed1b24" },
  { name: "Lucknow Super Giants", short: "LSG", nickname: "Super Giants", titles: 0, years: [], color: "#35a9df" }
];

const buttonContainer = document.getElementById("teamButtons");

teams.forEach((team, index) => {
  const button = document.createElement("button");
  button.className = "team-btn";
  button.innerHTML = `<span class="mini-logo" style="--team-color:${team.color}">${team.short}</span>${team.short}`;
  button.title = team.name;
  button.addEventListener("click", () => showTeam(index, button));
  buttonContainer.appendChild(button);

  if (index === 0) showTeam(index, button);
});

function showTeam(index, clickedButton) {
  const team = teams[index];

  document.querySelectorAll(".team-btn").forEach(btn => btn.classList.remove("active"));
  clickedButton.classList.add("active");

  const card = document.getElementById("teamCard");
  card.style.setProperty("--team-color", team.color);

  document.getElementById("teamLogo").textContent = team.short;
  document.getElementById("logoWatermark").textContent = team.short;
  document.getElementById("teamName").textContent = team.name;
  document.getElementById("teamNickname").textContent = team.nickname;
  document.getElementById("titles").textContent = team.titles;

  const yearsBox = document.getElementById("years");

  if (team.years.length === 0) {
    yearsBox.innerHTML = '<span class="year">No IPL title yet</span>';
    document.getElementById("note").textContent =
      "This team has not won the IPL championship.";
  } else {
    yearsBox.innerHTML = team.years.map(year =>
      `<span class="year">${year}</span>`
    ).join("");

    document.getElementById("note").textContent =
      `Won the IPL championship ${team.titles} time${team.titles > 1 ? "s" : ""}.`;
  }
}