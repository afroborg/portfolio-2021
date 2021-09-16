<script>
  import OutlineHeader from '../outline-header.svelte';
</script>

<div class="container">
  <OutlineHeader color="pink">skills</OutlineHeader>

  <div class="lists">
    <div class="list">
      <h4>Development</h4>
      <ul>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </div>

    <div class="list">
      <h4>Frameworks</h4>
      <ul>
        <li>React.js</li>
        <li>Vue.js</li>
        <li>Svelte</li>
        <li>.NET Core</li>
      </ul>
    </div>

    <div class="list">
      <h4>Tools</h4>
      <ul>
        <li>Photoshop</li>
        <li>Illustrator</li>
        <li>Figma</li>
      </ul>
    </div>
  </div>

  <div class="not-listed">
    <h3>Your language not listed?</h3>
    <p>I'm always looking to learn new skills!</p>
  </div>
</div>

<style lang="scss">
  @use '../../styles/colors';
  @use '../../styles/sizes';
  .container {
    background: colors.$pink-light;
    padding: sizes.padding(3) sizes.$padding-horizontal-mobile sizes.padding(4);
  }

  .lists {
    display: flex;
    gap: sizes.margin(4) sizes.margin(6);
    color: colors.$blue-primary;
    flex-wrap: wrap;
  }

  .list {
    flex-shrink: 0;
    ul {
      list-style: none;

      li {
        margin-bottom: sizes.$margin;
      }
    }

    h4 {
      margin-bottom: sizes.margin(2);
      font-size: 1.1em;
    }
  }

  .not-listed {
    margin-top: sizes.margin(4);
    text-align: right;
    color: colors.$pink-dark;

    p {
      margin-top: sizes.$margin;
    }
  }
</style>
