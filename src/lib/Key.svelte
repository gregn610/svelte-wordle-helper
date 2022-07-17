<script>
    export let kbKey;
    export let onClick;

    const handleClick = (e) => {
        onClick(kbKey);
        //@ts-ignore this will exist
        e.currentTarget.blur();
    };
</script>

<button class="regular-key" on:click={handleClick}>{kbKey}</button>

<style lang="postcss" global>
    .regular-key {
        @apply w-7 sm:w-10 bg-gray-200 hover:bg-gray-300 h-14 grid items-center rounded font-semibold cursor-pointer;
    }
</style>