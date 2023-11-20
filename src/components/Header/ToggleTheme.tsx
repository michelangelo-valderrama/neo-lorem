import { useState } from "preact/hooks"
import { lightTheme, toggleTheme } from "../../consts"

export function ToggleTheme() {
  const [light, setLight] = useState(lightTheme)

  const handleClick = () => {
    toggleTheme()
    setLight(!light)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-button/80 hover:text-textColor-accent hover:border-[3px] border-borderColor-accent box-border rounded-lg hover:shadow-textColor-accent/40 hover:shadow-[0_2px_40px_-4px] focus:scale-90 transition-all"
      title={light ? "Activar Modo Oscuro" : "Activar Modo Claro"}
    >
      {light ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="w-5 h-5"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="w-5 h-5"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
    </button>
  )
}
