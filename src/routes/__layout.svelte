<script lang="ts">
  import Footer from '@/components/footer/footer.svelte';
  import Header from '@/components/header/header.svelte';
  import Meta from '@/components/meta.svelte';
</script>

<Meta />

<Header />

<main class="content">
  <slot />
</main>

<Footer />

<style type="scss" global>
  @use '../styles/sizes';

  .content {
    min-height: 100vh;
  }
</style>
