<script lang="ts">
  import { inlineStyles } from '@/helpers/style.helper';

  export let fontSize = '4em';
  export let color = 'blue';
  export let opacity = '1';
</script>

<h2
  style={inlineStyles({ 'font-size': fontSize, opacity })}
  class:blue={color === 'blue'}
  class:pink={color === 'pink'}
>
  <slot />
</h2>

<style lang="scss">
  @use '../styles/sizes';
  @use '../styles/colors';
  @use '../styles/typography';

  h2 {
    padding: sizes.padding(3) 0;

    &.blue {
      color: colors.$blue-primary;
      @include typography.outline(transparentize(colors.$light, $amount: 0.5));
    }

    &.pink {
      color: colors.$pink-light;
      @include typography.outline(
        transparentize(colors.$blue-primary, $amount: 0.5)
      );
    }
  }
</style>
