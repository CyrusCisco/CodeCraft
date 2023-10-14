import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Cyrus Cisco(CC)</GradientText> 👋
        </>
      }
      description={
        <>
          As a computer scientist I have a deep understanding of the{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            EVM Networks
          </a>{' '}
          , I also have experience in decentralized application dev-suite{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            solidity
          </a>{' '}
          and{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            ether.js
          </a>{' '}
          . I will keeping write this blog for share my experience.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
