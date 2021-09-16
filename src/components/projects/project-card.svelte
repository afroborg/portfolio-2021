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

<a href={`/projects/${slug}`} class="card">
  <div class="image">
    <img src={imageUrl} alt="" />
  </div>
  <div class="languages">
    {#each languages as lang}
      <span class="language" title={lang} aria-label={lang}>
        {#if iconMap[lang]}
          <Icon src={iconMap[lang]} title={lang} />
        {/if}
      </span>
    {/each}
  </div>
  <div class="details">
    <span class="title">{title}</span>
    <span class="arrow"><Icon src={FiArrowRight} size="1.2em" /></span>
  </div>
</a>

<style lang="scss">
  @use '../../styles/colors';
  @use '../../styles/sizes';
  @use '../../styles/typography';
  @use '../../styles/transition';

  .card {
    display: grid;
    box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.15);
    grid-template-rows: minmax(0, 4fr) minmax(0, 1fr) minmax(0, 1.5fr);
    max-height: 500px;
    cursor: pointer;
    transition: transform transition.$duration;

    @media screen and (min-width: 1100px) {
      grid-template-rows: minmax(0, 4fr) minmax(0, 1fr) minmax(0, 1fr);
    }

    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
        grid-area: card-#{$i};
      }
    }

    &:hover {
      transform: rotate(-1deg);

      .arrow {
        transform: translateX(5px);
      }
    }
  }

  .image {
    position: relative;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: 0;
    }
  }

  .languages {
    background: colors.$pink-dark;
    display: flex;
    gap: sizes.$margin;
    align-items: center;
    padding-inline: sizes.padding(2);

    @media screen and (min-width: 800px) {
      font-size: 1.25em;
    }

    span {
      display: grid;
      place-items: center;

      :global(svg) {
        fill: colors.$light;
      }
    }
  }

  .details {
    background: colors.$pink-light;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: sizes.padding(2);
    color: colors.$blue-primary;

    .title {
      @include typography.outline(colors.$blue-primary);
      color: colors.$pink-light;
      font-size: 1.4em;
    }
  }

  .arrow {
    transition: transform transition.$duration;
  }
</style>
