import Button from "./Button";
import Card from "./Card";

export default function MatchCard({ match }) {
  return (
    <Card>
      <div className="match-top">
        <h3>{match.title}</h3>
        <span className="muted">{match.time}</span>
      </div>

      <div className="match-body">
        <p>Prize: <strong>₹{match.prize}</strong></p>
        <p>Entry: <strong>₹{match.fee}</strong></p>
      </div>

      <div className="match-actions">
        <Button text="Join" />
      </div>
    </Card>
  );
}
