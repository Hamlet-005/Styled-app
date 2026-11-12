import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export type NavTheme =
  | 'minimalist'
  | 'glass'
  | 'neo'
  | 'brutal'
  | 'luxury'

interface NavigationLink {
  path: string
  label: string
}

const themes = {
  minimalist: {
    header: css`background:#fff;color:#111;border-bottom:1px solid #e8e8e8;box-shadow:none;`,
    activeBackground: '#111',
    activeColor: '#fff',
    hoverBackground: '#f1f1ef',
  },
  glass: {
    header: css`background:rgba(255,255,255,.18);color:white;border:1px solid rgba(255,255,255,.3);backdrop-filter:blur(18px);`,
    activeBackground: '#111',
    activeColor: '#fff',
    hoverBackground: undefined,
  },
  neo: {
    header: css`background:#e8eaf4;color:#636b84;box-shadow:10px 10px 24px #c9ccda,-10px -10px 24px #fff;`,
    activeBackground: '#111',
    activeColor: '#fff',
    hoverBackground: undefined,
  },
  brutal: {
    header: css`background:#ffdf00;color:#111;border:4px solid #111;border-radius:0;`,
    activeBackground: '#111',
    activeColor: '#fff',
    hoverBackground: undefined,
  },
  luxury: {
    header: css`background:#0c0c0c;color:#f2ebdc;border-bottom:1px solid rgba(201,169,106,.35);`,
    activeBackground: '#c9a96a',
    activeColor: '#111',
    hoverBackground: '#c9a96a22',
  },
}

const links: NavigationLink[] = [
  { path: 'minimalist', label: '01 Index' },
  { path: 'glassmorphism', label: '02 Atmos' },
  { path: 'neumorphism', label: '03 Player' },
  { path: 'brutalist', label: '04 Studio' },
  { path: 'luxury', label: '05 Maison' },
]

const Header = styled.header<{ $theme: NavTheme }>`
  position: sticky;
  top: 12px;
  z-index: 50;
  margin: 12px auto;
  width: min(1180px, calc(100% - 24px));
  min-height: 58px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  transition: background .25s;
  ${(props) => themes[props.$theme].header}

  @media (max-width: 760px) {
    top: 6px;
    width: calc(100% - 12px);
    margin: 6px auto;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 12px;
    padding-bottom: 6px;
  }
`

const Brand = styled(NavLink)`
  color: inherit;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: .18em;
  text-transform: uppercase;
  padding: 10px 12px;
  white-space: nowrap;
`

const Links = styled.nav`
  display: flex;
  gap: 2px;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 760px) {
    width: 100%;
    padding-left: 2px;
  }
`

const LinkItem = styled(NavLink)<{ $theme: NavTheme }>`
  color: inherit;
  white-space: nowrap;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .09em;
  padding: 10px 8px;
  border-radius: 8px;
  opacity: .58;
  transition: .2s ease;

  &.active {
    opacity: 1;
    background: ${(props) => themes[props.$theme].activeBackground};
    color: ${(props) => themes[props.$theme].activeColor};

    &:hover {
      opacity: 1;
      background: ${(props) => themes[props.$theme].hoverBackground};
    }
  }
`

export function StyleNavigation({
  theme,
  brand = 'Portfolio',
}: {
  theme: NavTheme
  brand?: string
}) {
  return (
    <Header $theme={theme}>
      <Brand to="/minimalist" aria-label="Return to first page">
        {brand}
      </Brand>
      <Links aria-label="Design style navigation">
        {links.map((link) => (
          <LinkItem key={link.path} $theme={theme} to={`/${link.path}`}>
            {link.label}
          </LinkItem>
        ))}
      </Links>
    </Header>
  )
}
