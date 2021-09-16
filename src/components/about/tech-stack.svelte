<script lang="ts">
  import Icon from 'svelte-icons-pack';
  import OutlineHeader from '../outline-header.svelte';
  import { iconMap } from '../projects/icons';

  const l = Object.values(iconMap);

  const languages = [...l, ...l];
</script>

<div class="tech-stack">
  <OutlineHeader opacity=".6">tech stack</OutlineHeader>
  <div class="scrolling-container" style={`--languages: ${languages.length}`}>
    {#each [...languages, ...languages] as language}
      <span class="icon">
        <Icon src={language} />
      </span>
    {/each}
  </div>
</div>

<style lang="scss">
  @use '../../styles/colors';
  @use '../../styles/sizes';
  @use '../../styles/transition';

  .tech-stack {
    width: 100%;
    overflow: hidden;
    margin-top: sizes.margin(4);

    .scrolling-container {
      display: flex;
      flex-direction: row;
      gap: sizes.padding(6);
      animation: scroll 8s linear infinite;
    }

    .icon {
      color: colors.$blue-secondary;
      font-size: 3em;

      :global(svg) {
        fill: currentColor;
      }
    }
  }
</style>
