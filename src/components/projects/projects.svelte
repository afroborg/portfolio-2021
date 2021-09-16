<script lang="ts">
  import OutlineHeader from '@/components/outline-header.svelte';
  import Icon from 'svelte-icons-pack';
  import FiArrowRight from 'svelte-icons-pack/fi/FiArrowRight';
  import ProjectCard from './project-card.svelte';

  const projects = [
    {
      title: 'inter ikea',
      image: '',
      languages: ['javascript', 'svelte', 'less'],
      slug: 'ikea',
    },
    {
      title: 'e.on',
      image: '',
      languages: ['typescript', 'react', 'go'],
      slug: 'eon',
    },
    {
      title: 'cdon.com',
      image: '',
      languages: ['typescript', 'vue', 'sass'],
      slug: 'cdon',
    },
    {
      title: 'e-sek',
      image: '',
      languages: ['typescript', 'react', 'node', 'sass', 'go'],
      slug: 'e-sek',
    },
  ];
</script>

<div class="projects  max-width">
  <OutlineHeader opacity=".75">projects</OutlineHeader>

  <div class="projects-container">
    {#each projects as project}
      <ProjectCard {...project} image={`/assets/${project.slug}.png`} />
    {/each}
  </div>

  <div class="see-all-container">
    <a href="/projects">see all <Icon src={FiArrowRight} /> </a>
  </div>
</div>

<style lang="scss">
  @use '../../styles/sizes';
  @use '../../styles/colors';

  .projects {
    padding: sizes.padding(4) sizes.$padding-horizontal-mobile sizes.padding(8);
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(5, minmax(0, 1fr));
    grid-template-areas:
      'card-1 .'
      'card-1 card-2'
      'card-3 card-2'
      'card-3 card-4'
      '. card-4';
    gap: sizes.padding(2);

    @media screen and (min-width: 750px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-template-rows: 1fr;
      grid-template-areas: 'card-1 card-2 card-3 card-4';
      gap: sizes.padding(6);
    }
  }

  .see-all-container {
    margin: sizes.margin(2) sizes.$margin 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: colors.$light;

    :global(svg) {
      vertical-align: bottom;
    }

    @media screen and (min-width: 750px) {
      font-size: 1.25em;
    }
  }
</style>
