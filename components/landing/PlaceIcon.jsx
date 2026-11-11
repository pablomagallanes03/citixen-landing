// Íconos de tipo de lugar, de trazo, en una grilla de 24.
const PATHS = {
  plaza: 'M12 3c-3 0-5 2.3-5 5 0 2.4 1.7 4.3 4 4.8V20h2v-7.2c2.3-.5 4-2.4 4-4.8 0-2.7-2-5-5-5ZM5 20h14',
  culture: 'M4 9l8-5 8 5M6 9v9M10 9v9M14 9v9M18 9v9M4 20h16',
  school: 'M3 9l9-5 9 5-9 5-9-5ZM7 11.5V16c0 1.5 2.2 3 5 3s5-1.5 5-3v-4.5M21 9v6',
  sport: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3.5 9.5c3 1 6 1 9-1.5s5.5-3 8-2M5 18c1.5-4 4-6.5 8-7.5s6.5.5 7.5 2',
  health: 'M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6V4Z',
  office: 'M4 20V8l8-4 8 4v12M9 20v-6h6v6M8 11h.01M12 11h.01M16 11h.01',
  public: 'M4 17c3-3 5-3 8 0s5 3 8 0M4 12c3-3 5-3 8 0s5 3 8 0M6 7h12',
}

export default function PlaceIcon({ type, size = 20, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[type] || PATHS.public} />
    </svg>
  )
}
