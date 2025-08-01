// function Button({
//   children,
//   variant = 'gradient', // 'gradient' | 'solid'
//   color = '#1cb67c',
//   width = '170px',
//   height = 'auto',
//   className = '',
//   size = 'normal', // 'normal' | 'large'
//   style = {},
//   ...props
// }) {
//   const gradientBackground =
//     'linear-gradient(90deg, rgb(231, 166, 71) 0%, rgb(255, 215, 107) 50%, rgb(191 140 65) 100%)'

//   // Define padding variants using Tailwind classes
//   const sizeClasses = {
//     normal: 'px-5 py-[10px] md:py-[12px]',
//     large: 'px-7 py-[14px] md:py-[16px] !text-sm',
//   }

//   const dynamicStyle = {
//     fontFamily: 'Montserrat, sans-serif',
//     background: variant === 'gradient' ? gradientBackground : color,
//     minWidth: width,
//     height,
//     ...style,
//   }

//   return (
//     <button
//       className={`flex items-center justify-center rounded-full text-xs font-semibold text-black shadow-md ${sizeClasses[size]} ${className}`}
//       style={dynamicStyle}
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
  size = 'normal', // 'normal' | 'medium' | 'large'
  style = {},
  ...props
}) {
  const gradientBackground =
    'linear-gradient(90deg, rgb(231, 166, 71) 0%, rgb(255, 215, 107) 50%, rgb(191 140 65) 100%)'

  // Tailwind classes for different sizes (mobile responsive)
  const sizeClasses = {
    normal: 'px-4 py-[8px] text-xs md:px-5 md:py-[12px] md:text-sm',
    medium: 'px-5 py-[10px] text-sm md:px-6 md:py-[13px] md:text-base',
    large: 'px-6 py-[12px] text-sm md:px-7 md:py-[16px] md:text-base',
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
      className={`flex items-center justify-center whitespace-nowrap rounded-full font-semibold text-black shadow-md ${sizeClasses[size]} ${className}`}
      style={dynamicStyle}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
