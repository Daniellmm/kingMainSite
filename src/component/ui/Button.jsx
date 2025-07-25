// function Button({
//   children,
//   variant = 'gradient', // 'gradient' | 'solid'
//   color = '#1cb67c', // used when variant is 'solid'
//   width = '170px',
//   height = 'auto',
//   padding = '11px 28px', // top-bottom 14px, left-right 28px (same as px-7 py-[14px])
//   className = '',
//   ...props
// }) {
//   const gradientBackground =
//     'linear-gradient(90deg, rgb(231, 166, 71) 0%, rgb(255, 215, 107) 50%, rgb(191 140 65) 100%)'

//   return (
//     <button
//       className={`flex items-center justify-center rounded-full text-xs font-semibold text-black shadow-md ${className}`}
//       style={{
//         fontFamily: 'Montserrat, sans-serif',
//         background: variant === 'gradient' ? gradientBackground : color,
//         fontWeight: 600,
//         minWidth: width,
//         height: height,
//         padding: padding,
//       }}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// export default Button

function Button({
  children,
  variant = 'gradient', // 'gradient' | 'solid'
  color = '#1cb67c',
  width = '170px',
  height = 'auto',
  className = '',
  size = 'normal', // 'normal' | 'large'
  style = {},
  ...props
}) {
  const gradientBackground =
    'linear-gradient(90deg, rgb(231, 166, 71) 0%, rgb(255, 215, 107) 50%, rgb(191 140 65) 100%)'

  // Define padding variants using Tailwind classes
  const sizeClasses = {
    normal: 'px-5 py-[10px] md:py-[12px]',
    large: 'px-7 py-[14px] md:py-[16px]',
  }

  const dynamicStyle = {
    fontFamily: 'Montserrat, sans-serif',
    background: variant === 'gradient' ? gradientBackground : color,
    minWidth: width,
    height,
    ...style,
  }

  return (
    <button
      className={`flex items-center justify-center rounded-full text-xs font-semibold text-black shadow-md ${sizeClasses[size]} ${className}`}
      style={dynamicStyle}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
