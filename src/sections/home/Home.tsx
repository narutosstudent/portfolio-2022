import { NarutoFist } from '../../arts/NarutoFist'
import { Github } from '../../icons/Github'
import { LinkedIn } from '../../icons/LinkedIn'
import { Pen } from '../../icons/Pen'
import { Twitter } from '../../icons/Twitter'
import './Home.css'

export function Home() {
  return (
    <main class="main">
      <NarutoFist class="art" />
      <h1 class="title">Tiger Abrodi</h1>
      <h2 class="subtitle">
        Senior Software Engineer at{' '}
        <a
          href="https://bobsled.co"
          class="subtitle-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bobsled
        </a>
      </h2>
      <div class="texts">
        <p class="text">
          I love programming. It is truly a craft to me, one which combines
          structure and art. I love building things for the web, taking ideas to
          things that people can use.
        </p>
        <p class="text">
          In my spare time, I build side projects, write blog posts and read
          books. I also design using Figma, and have a passion for both
          designing and building accessible experiences.
        </p>
        <p class="text">
          I work across the full stack with an emphasis on the frontend.
        </p>
        <p class="text">
          At the moment, my learning evolve around AWS, Solid.js, Distributed
          Systems and Terraform.
        </p>
      </div>

      <div class="social-links">
        <a
          href="https://www.linkedin.com/in/tiger-abrodi-467695195/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
        >
          <LinkedIn />
        </a>
        <a
          href="https://twitter.com/TAbrodi"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
        >
          <Twitter />
        </a>
        <a
          href="https://github.com/narutosstudent"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
        >
          <Github />
        </a>
        <a
          href="https://tigerabrodi.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
        >
          <Pen />
        </a>
      </div>
    </main>
  )
}
