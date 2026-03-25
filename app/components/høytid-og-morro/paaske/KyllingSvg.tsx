export function KyllingSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="34" viewBox="0 0 30 34" fill="none">
      {/* Body */}
      <ellipse cx="15" cy="21" rx="11" ry="12" fill="#FFD54F" />
      {/* Head */}
      <circle cx="15" cy="10" r="8" fill="#FFD54F" />
      {/* Wing */}
      <ellipse cx="22" cy="20" rx="5" ry="7" fill="#FFC107" transform="rotate(-15 22 20)" />
      {/* Eye */}
      <circle cx="18" cy="9" r="1.5" fill="#3E2723" />
      {/* Beak */}
      <polygon points="23,11 28,13 23,15" fill="#FF8F00" />
      {/* Feet */}
      <path
        d="M11 32 L8 34 M11 32 L11 34 M11 32 L14 34"
        stroke="#FF8F00"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19 32 L16 34 M19 32 L19 34 M19 32 L22 34"
        stroke="#FF8F00"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Blush */}
      <circle cx="20" cy="13" r="2" fill="#FFAB91" opacity="0.5" />
    </svg>
  );
}
