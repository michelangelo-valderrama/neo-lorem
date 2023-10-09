// import HeaderLink from '../HeaderLink.astro'
import { useEffect } from 'preact/hooks'
import { showNav } from '../../scripts/showNav'
import './HeaderNav.css'

export default function HeaderNav({ children }: { children: any }) {
  useEffect(() => {
    const scrollHandler = showNav('.scroll-visibility')
    window.addEventListener('scroll', scrollHandler)
  }, [window.onload])

  return (
    <article
      id="scroll-elem"
      className="top-element scroll-visibility fixed top-[77px] left-0 w-full bg-background/50 backdrop-blur-md border-b border-borderColor-gray py-2 transition-all z-10"
    >
      <nav class="flex gap-4 justify-center font-semibold max-w-scree-md mx-auto">
        {children}
      </nav>
    </article>
  )
}
