import facebookIcon from '../assets/images/icons/facebook.png'
import instaIcon from '../assets/images/icons/insta.png'
import twitterIcon from '../assets/images/icons/twitter1.png'
import youtubeIcon from '../assets/images/icons/youtube.png'

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    icon: facebookIcon,
    url: 'https://www.facebook.com/share/1FpiDQiWHd/',
  },
  {
    name: 'Instagram',
    icon: instaIcon,
    url: 'https://www.instagram.com/highticketofferfinancing?igsh=amcwdXIzZWNjajMy&utm_source=qr',
  },
  {
    name: 'X',
    icon: twitterIcon,
    url: 'https://x.com/htofinancing',
  },
  {
    name: 'YouTube',
    icon: youtubeIcon,
    url: 'https://www.youtube.com/@highticketofferfinancing',
  },
]

const SocialLinksRow = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-10">
      <div className="flex items-center justify-center gap-2">
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#333] bg-white transition-transform duration-200 hover:scale-110"
            aria-label={item.name}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="h-6 w-6 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialLinksRow
