import FiGithub from 'svelte-icons-pack/fi/FiGithub';
import FiGitlab from 'svelte-icons-pack/fi/FiGitlab';
import FiLinkedIn from 'svelte-icons-pack/fi/FiLinkedin';

export const socials = [
  {
    title: 'Github',
    icon: FiGithub,
    href: 'http://github.com/afroborg',
  },
  {
    title: 'GitLab',
    icon: FiGitlab,
    href: 'https://gitlab.com/afroborg',
  },
  {
    title: 'LinkedIn',
    icon: FiLinkedIn,
    href: 'https://www.linkedin.com/in/axelfroborg',
  },
];

export const projects = [
  {
    title: 'inter ikea',
    image: '',
    languages: ['javascript', 'svelte', 'react', 'less'],
    slug: 'ikea',
  },
  {
    title: 'e.on',
    image: '',
    languages: ['typescript', 'react', 'go'],
    slug: 'eon',
  },
  {
    title: 'cdon.com',
    image: '',
    languages: ['typescript', 'vue', 'sass'],
    slug: 'cdon',
  },
  {
    title: 'e-sek',
    image: '',
    languages: ['typescript', 'react', 'node', 'sass', 'go'],
    slug: 'e-sek',
  },
];
