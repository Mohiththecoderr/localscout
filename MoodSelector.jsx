function MoodSelector({ onSelectMood }) {
  return (
    <div>
      <h2>Select your mood</h2>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <button onClick={() => onSelectMood("work")}>💼 Work</button>
        <button onClick={() => onSelectMood("date")}>❤️ Date</button>
        <button onClick={() => onSelectMood("quick")}>⚡ Quick Bite</button>
        <button onClick={() => onSelectMood("budget")}>💰 Budget</button>
      </div>
    </div>
  );
}

export default MoodSelector;
