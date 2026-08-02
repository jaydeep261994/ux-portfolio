export default function HomeHero() {
  return (
    <header className="home-hero">
      <h1 className="home-hero__name">Hi, I&apos;m Jaydeep</h1>

      <p className="home-hero__pitch">
        I redesign the enterprise tools people are stuck using — field ops, insurance
        claims, industrial brands — and ship them.
      </p>

      <p className="home-hero__now">
        <span>Currently at</span>
        <span className="home-hero__employer">
          <img src="/images/logos/accenture.svg" alt="" aria-hidden="true" />
          Accenture
        </span>
      </p>

      <a className="home-hero__cta" href="mailto:jaydeepdas06@gmail.com">
        <span className="home-hero__cta-arrow" aria-hidden="true" />
        Get in touch
      </a>
    </header>
  );
}
