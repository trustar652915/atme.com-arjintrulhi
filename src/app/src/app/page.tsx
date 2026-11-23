import { getPosts } from "@/lib/posts";
import { DecorativeArt, LinkifiedText } from "@/components/DecorativeArt";

const TELEGRAM_URL = "https://t.me/trulhi";

export default function HomePage() {
  const posts = getPosts().slice(0, 3);

  return (
    <>
      <DecorativeArt />

      <div className="strip">DMs are open again on Telegram</div>

      <header className="hero">
        <svg className="marble" data-m="navy" aria-hidden="true" />
        <div className="sun" aria-hidden="true">
          <svg id="sun" viewBox="-100 -100 200 200" />
        </div>
        <div className="orb" aria-hidden="true" />
        <div className="wrap">
          <p className="who">Arjin Trulhi of The Foregen</p>
          <h1>
            Stuck?<span>Get iT Done.</span>
          </h1>
          <p className="sub">
            1:1 on Telegram, for your brand’s web presence, your sales, your
            creative, your body and your tech. I have the answers and results to
            prove it.
          </p>
          <a className="btn" href={TELEGRAM_URL} rel="noopener">
            DM me on Telegram
          </a>
          <p className="micro">
            Opens a direct chat with me. No forms to fill out.
          </p>
        </div>
      </header>

      <div className="fan" aria-hidden="true">
        <svg>
          <rect width="100%" height="100%" fill="url(#fan)" />
        </svg>
      </div>

      <div className="proof">
        <svg className="marble" data-m="silk" aria-hidden="true" />
        <div className="wrap">
          <div>
            <b>2.5x</b>
            <span>faster subscriber growth since hitting 100 on YouTube</span>
          </div>
          <div>
            <b>20 min</b>
            <span>
              a week on multi-channel distribution, down from hours a day
            </span>
          </div>
          <div>
            <b>100</b>
            <span>
              YouTube subscribers reached, and the loyal ones come back for
              every release
            </span>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>Bring me what you’re stuck on</h2>
          <svg className="orn" viewBox="0 0 200 20" aria-hidden="true">
            <path d="M0 10H82M118 10H200" stroke="#a07a3f" fill="none" />
            <path d="M100 3l7 7-7 7-7-7z" fill="#a07a3f" />
            <circle cx="89" cy="10" r="1.6" fill="#a07a3f" />
            <circle cx="111" cy="10" r="1.6" fill="#a07a3f" />
          </svg>
          <ul className="work">
            <li>
              <h3>Web presence and sales</h3>
              <p>Get your brand’s web presence working and your products sold.</p>
            </li>
            <li>
              <h3>A creative refresh</h3>
              <p>Activities and challenges curated to your craft.</p>
            </li>
            <li>
              <h3>Global, borderless asset portfolios</h3>
              <p>Build assets that aren’t tied to one place.</p>
            </li>
            <li>
              <h3>Longevity, fitness and nutrition</h3>
              <p>Longevity movement and general fitness and nutrition.</p>
            </li>
            <li>
              <h3>Tech you put to work</h3>
              <p>
                Learn the advancements that matter and act on them to elevate
                your life and business.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="steps">
        <svg className="marble" data-m="navy" aria-hidden="true" />
        <div className="wrap">
          <h2>Three steps to done</h2>
          <ol>
            <li>
              <h3>Tap the button</h3>
              <p>It opens a direct chat with me on Telegram.</p>
            </li>
            <li>
              <h3>Tell me where you’re stuck</h3>
              <p>Say what you’re working on and what isn’t moving.</p>
            </li>
            <li>
              <h3>We get it done</h3>
              <p>1:1 messaging, focused on action and results.</p>
            </li>
          </ol>
          <p style={{ marginTop: "2.5rem" }}>
            <a className="btn" href={TELEGRAM_URL} rel="noopener">
              Start the conversation
            </a>
          </p>
        </div>
      </section>
