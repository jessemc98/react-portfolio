import githubIcon from '../assets/icons/github.svg'
import codepenIcon from '../assets/icons/codepen.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'

const COLORS = [
  "#0F4E6E",
  "#1370A0",
  "#257DAA",
  "#3FBEFE"
]

const navLinks = [
    {path: '/', name: 'HOME', isIndex: true, color: COLORS[0]},
    {path: '/projects', name: 'PROJECTS', color: COLORS[1]},
    {path: '/about', name: 'ABOUT', color: COLORS[2]},
    {path: '/contact', name: 'CONTACT', color: COLORS[3]}
]

const socialLinks = [
    {icon: githubIcon, path:"https://github.com/jessemc98", alt: 'view jesses github page'},
    {icon: codepenIcon, path:"http://codepen.io/jessemc98/", alt: 'view jesses codepen page'},
    {icon: linkedinIcon, path:"https://www.linkedin.com/in/jesse-mcintosh-61b842117", alt: 'view jesses linkdin profile'}
]

export { COLORS, navLinks, socialLinks}
