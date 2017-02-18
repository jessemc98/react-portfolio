import githubIcon from '../assets/icons/github.svg'
import codepenIcon from '../assets/icons/codepen.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'

const navLinks = [
    {path: '/', name: 'HOME', isIndex: true, color: "#0F4E6E"},
    {path: '/projects', name: 'PROJECTS', color: "#1370A0"},
    {path: '/about', name: 'ABOUT', color: "#257DAA"},
    {path: '/contact', name: 'CONTACT', color: "#3FBEFE"}
]

const socialLinks = [
    {icon: githubIcon, path:"https://github.com/jessemc98", alt: 'view jesses github page'},
    {icon: codepenIcon, path:"http://codepen.io/jessemc98/", alt: 'view jesses codepen page'},
    {icon: linkedinIcon, path:"https://www.linkedin.com/in/jesse-mcintosh-61b842117", alt: 'view jesses linkdin profile'}
]

export {navLinks, socialLinks}
