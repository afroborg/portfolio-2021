<script lang="ts">
  import FiMail from 'svelte-icons-pack/fi/FiMail';
  import Icon from 'svelte-icons-pack/Icon.svelte';

  let isCopied = false;

  const email = 'axel.froborg@gmail.com';

  const copy = () => {
    navigator.clipboard.writeText(email);
    isCopied = true;
  };
</script>

<div class="container">
  <div class="mail-me">
    <div class="icon-container">
      <Icon src={FiMail} />
    </div>

    <div class="email" on:click={copy}>
      <span>{email}</span>

      <div class="copy-overlay">
        {#if !isCopied}
          Click to copy
        {:else}
          Copied!
        {/if}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @use '../styles/colors';
  @use '../styles/sizes';
  @use '../styles/transition';

  .container {
    background: colors.$pink-dark;
    padding: sizes.padding(2);
  }

  $height: 40px;

  .mail-me {
    height: $height;
    width: 100%;
    border: 2px solid colors.$pink-light;
    display: flex;
    align-items: center;
  }

  .icon-container {
    height: 100%;
    width: $height;
    background: colors.$pink-light;
    display: grid;
    place-content: center;
    color: colors.$pink-dark;
  }

  .email {
    color: colors.$pink-light;
    font-size: 0.85em;
    position: relative;
    padding-left: sizes.padding(2);
    height: 100%;
    width: 100%;
    line-height: $height;
    cursor: pointer;

    &:hover .copy-overlay {
      transform: scaleY(1);
    }
  }

  .copy-overlay {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    background: transparentize(colors.$pink-light, $amount: 0.4);
    color: colors.$blue-primary;
    padding-left: sizes.$padding;
    font-size: 1rem;
    height: 100%;
    overflow: hidden;
    transition: all transition.$duration;
    transform: scaleY(0);
    transform-origin: bottom;
  }
</style>
