<script lang="ts">
  import Icon from 'svelte-icons-pack';
  import FiArrowRight from 'svelte-icons-pack/fi/FiArrowRight';
  import { iconMap } from './icons';

  export let title: string;
  export let image: string;
  export let languages: string[];
  export let slug: string;

  let imageUrl: string;

  $: if (image) {
    imageUrl = image;
  } else {
    imageUrl = '/placeholder-template.png';
  }
</script>

<a href={`/projects/${slug}`} class="project">
  <div class="project-image">
    <img src={imageUrl} alt={title} />

    <div class="languages">
      {#each languages as lang}
        <span class="language" title={lang} aria-label={lang}>
          {#if iconMap[lang]}
            <Icon src={iconMap[lang]} title={lang} />
          {/if}
        </span>
      {/each}
    </div>
  </div>

  <div class="project-details">
    <h3>{title}</h3>
    <span class="arrow"><Icon src={FiArrowRight} size="1.5em" /></span>
  </div>
</a>

<style lang="scss">
  @use '../../styles/sizes';
  @use '../../styles/colors';
  @use '../../styles/typography';
  @use '../../styles/transition';

  .project {
    --skew: -2deg;
    transform: skew(var(--skew));
    transition: transform transition.$duration;
    box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.15);

    &:hover {
      --skew: 0;
    }

    @media screen and (max-width: 800px) {
      --skew: 0;
    }
  }

  .project-image {
    position: relative;
    overflow: hidden;
  }

  .project-details {
    background: colors.$pink-light;
    padding: sizes.padding(3) sizes.padding(4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: colors.$blue-primary;

    h3 {
      @include typography.outline(colors.$blue-primary);
      color: colors.$pink-light;
      font-size: 2em;
    }
  }

  .languages {
    display: flex;
    gap: sizes.margin(3);
    align-items: center;
    padding-inline: sizes.padding(2);
    position: absolute;
    top: sizes.margin(4);
    left: sizes.margin(2);

    @media screen and (min-width: 800px) {
      font-size: 1.25em;
    }
  }

  .language {
    display: grid;
    place-items: center;
    font-size: 1.5em;

    :global(svg) {
      fill: transparentize($color: #000000, $amount: 0.75);
    }
  }
</style>
