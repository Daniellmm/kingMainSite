import ScrollAnimation from '../ScrollAnimation'

function Quote({ children, author, className = '', ...props }) {
  return (
    <section
      className={`overflow-hidden bg-white px-12 py-12 lg:px-24 ${className}`}
      {...props}
    >
      <ScrollAnimation animation="fadeIn" delay={0.5}>
        <figure className="text-center">
          <blockquote>
            <p
              className="text-xl font-thin leading-10 tracking-[1px] text-black lg:text-[28px]"
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              “{children}”
            </p>
          </blockquote>
          <figcaption
            className="pt-6 text-3xl text-[#E7A647] lg:text-4xl"
            style={{ fontFamily: 'Adelia, serif' }}
          >
            {author}
          </figcaption>
        </figure>
      </ScrollAnimation>
    </section>
  )
}

export default Quote
