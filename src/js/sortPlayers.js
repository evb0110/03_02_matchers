const healthComparator = (a, b) => {
  return a.health - b.health;
}

const sortPlayers = (players) => {
  return players.sort(healthComparator)
}

export default sortPlayers;