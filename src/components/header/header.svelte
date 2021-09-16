<script lang="ts">
  import LogoBtn from '../logo-btn.svelte';
  import { isOpen, toggle } from './header.store';
  import Overlay from './overlay.svelte';

  /**
   * Disables scrolling on window when overlay is open
   * @param node HTML Window element
   * @param options The passed scrollable value
   */
  const wheel = (node: HTMLElement, options: { scrollable: boolean }) => {
    let { scrollable } = options;

    const handler = (e: Event) => {
      if (!scrollable) e.preventDefault();
    };

    node.addEventListener('wheel', handler, { passive: false });

    return {
      update(options: { scrollable: boolean }) {
        scrollable = options.scrollable;
      },
      destroy() {
        node.removeEventListener('wheel', handler);
      },
    };
  };

  $: label = $isOpen ? 'Close menu' : 'Open menu';
</script>

<svelte:window use:wheel={{ scrollable: !$isOpen }} />

<header class="container max-width" class:is-open={$isOpen}>
  <div class="logo-container">
    <LogoBtn isInverted={$isOpen} />
  </div>

  <button class="menu-btn" on:click={toggle()} title={label} aria-label={label}>
    {#each Array(3).fill(null) as _}
      <span class="line" class:is-open={$isOpen} />
    {/each}
  </button>

  <Overlay />
</header>

<style lang="scss">
  @use "../../styles/colors";
  @use "../../styles/sizes";
  @use "../../styles/transition";
  @use "../../styles/zindex";

  .container {
    height: sizes.$navbar-height;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 sizes.$padding-horizontal-mobile;
    position: sticky;
    top: 0;
    background: colors.$blue-primary;
    overflow-x: hidden;
    z-index: zindex.$navbar;

    &.is-open {
      .line {
        background: colors.$blue-primary;

        /** Rotate and create a cross with the lines **/
        &:nth-child(1) {
          transform: rotate(-45deg) translateY(0.9em);
        }

        &:nth-child(3) {
          transform: rotate(45deg) translateY(-1em);
        }

        &:nth-child(2) {
          opacity: 0;
        }
      }
    }
  }

  .logo-container {
    z-index: zindex.$navbar-btns;
  }

  .menu-btn {
    display: flex;
    flex-direction: column;
    gap: 6px;
    border: none;
    background: none;
    cursor: pointer;
    position: relative;
    z-index: zindex.$navbar-btns;

    .line {
      display: inline-block;
      height: 3px;
      width: 28px;
      background: colors.$pink-dark;
      border-radius: 10px;
      transition: all transition.$duration;
    }

    &:hover .line {
      opacity: 0.8;
      &:nth-child(2) {
        transform: rotate(-6deg);
      }
    }
  }
</style>
