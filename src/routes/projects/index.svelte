<script lang="ts">
  import OutlineHeader from '@/components/outline-header.svelte';
  import ProjectListItem from '@/components/projects/project-list-item.svelte';
  import { projects } from '@/constants';

  const work = projects;
  const personal: typeof projects = [
    {
      languages: ['typescript', 'svelte', 'node', 'firebase', 'stripe'],
      slug: 'klundka',
      title: 'KLundka',
      image: '',
    },
    {
      languages: ['typescript', 'vue', 'node', 'firebase'],
      slug: 'shrtlnk',
      title: 'ShrtLnk',
      image: '',
    },
  ];
</script>

<main class="projects max-width">
  <div class="projects-container work-projects">
    <OutlineHeader>work</OutlineHeader>

    <div class="projects-list">
      {#each work as project}
        <ProjectListItem {...project} image={`/assets/${project.slug}.png`} />
      {/each}
    </div>
  </div>

  <div class="projects-container personal-projects">
    <OutlineHeader>personal</OutlineHeader>

    <div class="projects-list">
      {#each personal as project}
        <ProjectListItem {...project} image={`/assets/${project.slug}.png`} />
      {/each}
    </div>
  </div>
</main>

<style lang="scss">
  @use '../../styles/sizes';
  @use '../../styles/colors';

  .projects {
    padding-inline: sizes.$padding-horizontal-mobile;
  }

  .projects-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: sizes.padding(2);
  }

  .projects-container {
    margin-bottom: sizes.margin(8);
  }
</style>
