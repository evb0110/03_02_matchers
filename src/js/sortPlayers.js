const healthComparator = (a, b) => a.health - b.health;

const sortPlayers = players => players.sort(healthComparator);

export default sortPlayers;
