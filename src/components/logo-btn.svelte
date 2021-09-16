<script lang="ts">
  import { page } from '$app/stores';
  import Logo from '@/components/icons/logo.svelte';
  import { toggle } from './header/header.store';

  export let isInverted = false;

  const handleClick = (e: MouseEvent) => {
    const onRoot = $page.path === '/';

    if (isInverted) {
      toggle(onRoot ? 0 : 400)();
    }

    if (onRoot) {
      e.preventDefault();
      scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
</script>

<a
  href="/"
  class="logo"
  class:inverted={isInverted}
  on:click={handleClick}
  aria-label="Back home"
>
  <span>
    <Logo />
  </span>
</a>

<style lang="scss">
  @use '../styles/colors';
  @use '../styles/transition';

  .logo {
    color: colors.$pink-dark;
    transition: color transition.$duration;

    &.inverted {
      color: colors.$blue-primary;
    }
  }
</style>
