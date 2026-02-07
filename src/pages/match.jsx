import Banner from "../components/Banner";
import MatchCard from "../components/MatchCard";
import matches from "../data/matches";

export default function Match() {
  return (
    <div className="match-page">
      <Banner />
      <div className="matches-grid">
        {matches.map((m) => (
          <MatchCard key={m.id} match={m} />
        ))}
      </div>
    </div>
  );
}
