<script lang="ts">
    import { key, storage } from './stores';
    import { Option } from './storage';

    export let title = 'Untitled';

    let style = `background: url(assets/banner_${$storage.option}.png); background-size: cover;`;

    function reset(){
        localStorage.removeItem(key);
        $storage.option = Option.None;
    }
</script>

<nav {style}>
    <div id="currency">{$storage.currency} pts</div>
    <div id="title" on:click={reset}>{title}</div>
    <div id="spacer"></div>
</nav>

<style lang="sass">
    @use '../vars' as *
    nav
        display: flex
        height: $nav
        font-size: 1.5em
        z-index: 999
    @media(orientation: landscape)
        nav
            font-size: 2em
    nav > div
        display: flex
        justify-content: center
        align-items: center
        margin: 0.2em
    #currency
        flex: 2
        background-color: $background
        color: var(--theme)
        border-radius: 10px
        white-space: nowrap
    #title
        color: white
        font-weight: bold
        flex: 7
    #spacer
        flex: 2
    #search input
        padding: 0.7em
        font-size: 0.7em

</style>
