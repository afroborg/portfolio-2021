<script lang="ts">
  // your script goes here
</script>

<span class="tag">
  <slot />
</span>

<style lang="scss">
  @use '../styles/colors';
  @use '../styles/sizes';

  .tag {
    background: colors.$pink-light;
    color: colors.$blue-primary;
    padding: sizes.padding(0.5) sizes.$padding;
  }
</style>
