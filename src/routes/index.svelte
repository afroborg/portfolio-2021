<script>
  import MailMe from '@/components/mail-me.svelte';
  import Projects from '@/components/projects/projects.svelte';
  import Skills from '@/components/skills/skills.svelte';
  import Tag from '@/components/tag.svelte';

  const tags = ['web developer', 'designer', 'freelancer'];
</script>

<div class="homepage">
  <div class="hero-section max-width">
    <h1>
      Hell<span class="filled-o" />!
    </h1>

    <h2>I'm <span>Axel Froborg</span></h2>

    <div class="tag-list">
      {#each tags as tag}
        <Tag>{tag}</Tag>
      {/each}
    </div>

    <div class="mail-me-container">
      <MailMe />
    </div>
  </div>

  <Projects />

  <Skills />
</div>

<style lang="scss">
  @use '../styles/colors';
  @use '../styles/sizes';
  @use '../styles/typography';
  @use '../styles/transition';

  .homepage {
    margin-top: sizes.padding(8);
  }

  .hero-section {
    padding: 0 sizes.$padding-horizontal-mobile;

    @media screen and (min-width: 1000px) {
      font-size: 1.25em;
    }
  }

  h1 {
    color: colors.$light;
    font-size: 5em;
    animation: slideInUp transition.$duration transition.$duration backwards;

    .filled-o {
      display: inline-block;
      height: 0.5em;
      width: 0.5em;
      background: colors.$pink-light;
      border-radius: 50%;
      margin: 0 4px;
    }
  }

  h2 {
    color: colors.$light;
    font-size: 2.6em;
    font-weight: typography.$regular;
    margin-top: sizes.$margin;
    animation: slideInUp transition.$duration transition.$duration * 1.5
      backwards;

    span {
      @include typography.outline(colors.$light);
      color: colors.$blue-primary;
      transition: all transition.$duration;

      &:hover {
        color: colors.$pink-light;
        text-shadow: none;
      }
    }
  }

  .tag-list {
    margin-top: sizes.$margin;
    display: flex;
    gap: sizes.$margin;
    animation: slideInUp transition.$duration transition.$duration * 2 backwards;
  }

  .mail-me-container {
    margin-top: sizes.margin(4);
    width: min(100%, 500px);
    animation: slideInUp transition.$duration transition.$duration * 2.5
      backwards;
  }
</style>
