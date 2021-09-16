<script lang="ts">
  import TechStack from '@/components/about/tech-stack.svelte';
  import DrawnArrow from '@/components/icons/drawn-arrow.svelte';
  import OutlineHeader from '@/components/outline-header.svelte';
  import { socials } from '@/constants';
  import Icon from 'svelte-icons-pack';
  import FiArrowRight from 'svelte-icons-pack/fi/FiArrowRight';

  const now = new Date().getFullYear();

  $: programmingYears = now - 2015;
  $: yearsOld = now - 2000;
</script>

<main class="max-width">
  <div class="me-wrapper">
    <div class="me-container">
      <div class="me-img">
        <img src="/me.png" alt="Axel Froborg (me)" />

        <div class="pointer">
          <span>that's me!</span>
          <DrawnArrow />
        </div>
      </div>
    </div>
  </div>

  <OutlineHeader opacity=".6">about me</OutlineHeader>

  <div class="info-box">
    {#each socials as { title, icon, href }}
      <a {href} target="_blank" class="section">
        <Icon src={icon} {title} />
        <span>{title}</span>
      </a>
    {/each}
  </div>

  <div class="text-container">
    <p>
      Student by day, developer when I have free time. I'm a {yearsOld}
      year old developer based in Sweden.
    </p>

    <p>
      I've programmed for about {programmingYears}
      years now. Starting in high school and learning my way through countless tutorials
      and courses, as well as working for multiple big companies learning agile development
      techniques.
    </p>

    <p>
      The main focus for me has primarily been on web development and ensuring
      the end user gets a beautiful as well as intiuitive experience.
    </p>

    <a href="/projects">
      Check out my projects
      <Icon src={FiArrowRight} />
    </a>
  </div>

  <TechStack />
</main>

<style lang="scss">
  @use '../styles/sizes';
  @use '../styles/colors';
  @use '../styles/typography';

  main {
    padding: sizes.padding(4) sizes.$padding-horizontal-mobile;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
  }

  .me-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .me-container {
    position: relative;
    width: fit-content;
  }

  .me-img {
    $size: 200px;
    height: $size;
    width: $size;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    border: 1px solid colors.$blue-secondary;
  }

  .pointer {
    position: absolute;
    top: 0;
    right: -40px;
    display: flex;
    flex-direction: column;
    color: colors.$light;
    justify-content: center;
    gap: sizes.$padding;
  }

  .info-box {
    width: 100%;
    color: colors.$blue-secondary;
    display: flex;
    justify-content: center;
    gap: sizes.padding(2);

    .section {
      background: colors.$pink-light;
      padding: sizes.padding(2) sizes.padding(4);
      display: flex;
      align-items: center;

      :global(svg) {
        vertical-align: middle;
      }

      span {
        margin-left: sizes.$margin;
        font-size: 0.8em;
      }

      @media screen and (max-width: 600px) {
        border-radius: 50%;
        padding: sizes.padding(2);
        span {
          display: none;
        }
      }

      &:hover,
      &:focus {
        background: colors.$light;
      }
    }
  }

  .text-container {
    margin-top: sizes.padding(4);

    p {
      margin-top: sizes.padding(2);
      color: colors.$light;
    }

    a {
      display: inline-block;
      color: colors.$pink-dark;
      margin-top: sizes.margin(4);
      font-weight: typography.$bold;

      :global(svg) {
        vertical-align: bottom;
      }
    }
  }
</style>
