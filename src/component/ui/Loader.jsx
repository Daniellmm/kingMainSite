function Loader() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60">
      <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-white"></div>
      <p className="ml-3 text-sm font-medium text-white">Loading video...</p>
    </div>
  )
}

export default Loader
