import FaLess from 'svelte-icons-pack/fa/FaBrandsLess';
import FaNodejs from 'svelte-icons-pack/fa/FaBrandsNodeJs';
import FaSass from 'svelte-icons-pack/fa/FaBrandsSass';
import FaVue from 'svelte-icons-pack/fa/FaBrandsVuejs';
import SiGo from 'svelte-icons-pack/si/SiGo';
import SiJavascript from 'svelte-icons-pack/si/SiJavascript';
import SiReact from 'svelte-icons-pack/si/SiReact';
import SiSvelte from 'svelte-icons-pack/si/SiSvelte';
import SiTypescript from 'svelte-icons-pack/si/SiTypescript';

export const iconMap: Record<string, any> = {
  react: SiReact,
  less: FaLess,
  svelte: SiSvelte,
  vue: FaVue,
  sass: FaSass,
  typescript: SiTypescript,
  go: SiGo,
  node: FaNodejs,
  javascript: SiJavascript,
};
