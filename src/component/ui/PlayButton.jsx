function PlayButton() {
  return (
    <div className="group absolute inset-0 z-10 flex items-center justify-center bg-black/40">
      <div className="transform rounded-full bg-black bg-opacity-80 p-3 transition-transform duration-300 group-hover:scale-110">
        <svg
          className="h-6 w-6 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M6 4l10 6-10 6V4z" />
        </svg>
      </div>
    </div>
  )
}

export default PlayButton
