import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              className="mr-1 h-10 w-10 stroke-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none"></path>
              <text
                x="8"
                y="18"
                fontFamily="Arial"
                fontSize="18"
                textAnchor="middle"
                fill="currentColor"
              >
                C
              </text>
              <text
                x="16"
                y="18"
                fontFamily="Arial"
                fontSize="18"
                textAnchor="middle"
                fill="currentColor"
              >
                C
              </text>
            </svg>
          }
          name="CodeCraft"
        />
      </a>
      <NavMenu>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="/">GitHub</NavMenuItem>
        <NavMenuItem href="/">Twitter</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
