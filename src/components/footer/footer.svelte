<script lang="ts">
  import LogoBtn from '../logo-btn.svelte';

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
</script>

<footer class="container">
  <LogoBtn />

  <div class="links">
    {#each links as { name, path } (path)}
      <a href={path}>{name}</a>
    {/each}
  </div>
</footer>

<style lang="scss">
  @use '../../styles/colors';
  @use '../../styles/sizes';
  .container {
    padding: 38px sizes.$padding-horizontal-mobile;
    background: colors.$blue-secondary;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .links {
    display: flex;
    gap: sizes.margin(2);
    color: colors.$light;
  }
</style>
