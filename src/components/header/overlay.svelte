<script>
  import { page } from '$app/stores';
  import { socials } from '@/constants';
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import OutlineHeader from '../outline-header.svelte';
  import { isOpen, toggle } from './header.store';

  const links = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'about me',
      path: '/about',
    },
    {
      name: 'projects',
      path: '/projects',
    },
  ];

  $: currentRoute = $page.path;
</script>

<div class="navigation-overlay" class:is-open={$isOpen}>
  <OutlineHeader color="pink">menu</OutlineHeader>

  <ul class="link-list">
    {#each links as { name, path } (`menu--${path}`)}
      <li>
        <a
          href={path}
          class:is-active={currentRoute === path}
          on:click={toggle(400)}>{name}</a
        >
      </li>
    {/each}
  </ul>

  <OutlineHeader color="pink">follow me!</OutlineHeader>
  <div class="socials">
    {#each socials as { href, icon, title }}
      <a {href} target="_blank" rel="noreferrer" aria-label={title}>
        <Icon src={icon} {title} />
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
  @use "../../styles/colors";
  @use "../../styles/sizes";
  @use "../../styles/transition";
  @use "../../styles/typography";
  @use "../../styles/zindex";

  .navigation-overlay {
    --transform: 100%;

    padding: sizes.$navbar-height sizes.$padding-horizontal-mobile;
    position: fixed;
    transform: translateX(var(--transform));
    background: colors.$pink-light;
    height: 100vh;
    top: 0;
    right: 0;
    width: 100%;
    transition: transform transition.$duration;
    z-index: zindex.$overlay;

    &.is-open {
      --transform: 0%;
    }

    @media screen and (min-width: 750px) {
      width: 400px;
    }
  }

  .link-list {
    list-style: none;
    margin-bottom: sizes.margin(8);
    display: flex;
    flex-direction: column;

    li {
      width: max-content;
    }

    a {
      display: inline-block;
      height: 100%;
      font-size: 1.5em;
      font-weight: typography.$bold;
      color: colors.$blue-primary;
      margin-bottom: sizes.margin(2);
      position: relative;

      &::before {
        --width: 0;
        content: '';
        position: absolute;
        height: 3px;
        width: 100%;
        background: colors.$blue-primary;
        bottom: sizes.$margin * -1;
        transform: scaleX(var(--width));
        transform-origin: center;
        transition: transform transition.$duration;
      }

      &::after {
        --scale: 0;
        content: 'you are here';
        position: absolute;
        font-size: 0.9rem;
        color: white;
        padding: sizes.$padding;
        background: colors.$pink-dark;
        left: 120%;
        top: 50%;
        transform: translateY(-50%) scale(var(--scale));
        white-space: nowrap;
        transition: transform transition.$duration;
      }

      &.is-active::after {
        --scale: 1;
      }

      &:hover::before {
        --width: 1;
      }
    }
  }

  .socials {
    display: flex;
    gap: sizes.$margin;
    font-size: 1.5em;
    color: colors.$blue-primary;

    a {
      height: 1.75em;
      width: 1.75em;
      display: grid;
      place-items: center;
      border-radius: 50%;
      transition: background transition.$duration;

      &:hover {
        background: transparentize(colors.$light, 0.6);
      }
    }
  }
</style>
