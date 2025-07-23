function Button({
  children,
  variant = 'gradient', // 'gradient' | 'solid'
  color = '#E7A647', // used when variant is 'solid'
  width = '170px',
  height = 'auto',
  padding = '12px 28px', // top-bottom 14px, left-right 28px (same as px-7 py-[14px])
  className = '',
  ...props
}) {
  const gradientBackground =
    'linear-gradient(90deg, rgb(231, 166, 71) 0%, rgb(255, 215, 107) 50%, rgb(191 140 65) 100%)'

  return (
    <button
      className={`flex items-center justify-center rounded-full text-xs font-semibold text-black shadow-md ${className}`}
      style={{
        fontFamily: 'Montserrat, sans-serif',
        background: variant === 'gradient' ? gradientBackground : color,
        fontWeight: 600,
        minWidth: width,
        height: height,
        padding: padding,
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
