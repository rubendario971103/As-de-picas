const API_KEY = "aa0f6911969db1f13e4833645bbeda18";
const matchesDiv = document.getElementById("matches");

async function loadMatches() {
  const today = new Date().toISOString().split("T")[0];
  const res = await fetch(`https://v3.football.api-sports.io/fixtures?league=239&season=2025&date=${today}`, {
    headers: {
      "x-apisports-key": API_KEY
    }
  });
  const data = await res.json();
  if (!data.response || data.response.length === 0) {
    matchesDiv.innerHTML = "<p>No hay partidos hoy</p>";
    return;
  }
  data.response.forEach(match => {
    const m = document.createElement("div");
    m.innerHTML = `
      <h3>${match.teams.home.name} vs ${match.teams.away.name}</h3>
      <p>${new Date(match.fixture.date).toLocaleTimeString()}</p>
      <button>Apostar</button>
      <hr>`;
    matchesDiv.appendChild(m);
  });
}

loadMatches();
