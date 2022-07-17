<script>
    export let onIndex
    import {searchTermStore, searchTermIndex} from '../stores'

    let set_class = "bg-black";
    let unset_class = "bg-white";


</script>
<div class="px-10 py-5 grid gap-y-1 items-center w-100 justify-center">
    <div class="flex gap-1 w-fit">
        <div class="known-letter" on:click={() => onIndex(0)} >{$searchTermStore[0]}</div>
        <div class="known-letter" on:click={() => onIndex(1)} >{$searchTermStore[1]}</div>
        <div class="known-letter" on:click={() => onIndex(2)} >{$searchTermStore[2]}</div>
        <div class="known-letter" on:click={() => onIndex(3)} >{$searchTermStore[3]}</div>
        <div class="known-letter" on:click={() => onIndex(4)} >{$searchTermStore[4]}</div>
    </div>
    <div class=" grid place-items-center h-8 font-bold "></div>
    <div class="flex gap-1 w-fit">
        <div class="letter-indicator {$searchTermIndex == 0 ? set_class : unset_class}"></div>
        <div class="letter-indicator {$searchTermIndex == 1 ? set_class : unset_class}"></div>
        <div class="letter-indicator {$searchTermIndex == 2 ? set_class : unset_class}"></div>
        <div class="letter-indicator {$searchTermIndex == 3 ? set_class : unset_class}"></div>
        <div class="letter-indicator {$searchTermIndex == 4 ? set_class : unset_class}"></div>
    </div>
</div>
<style lang="postcss" global>
    .known-letter {
        @apply h-12 w-12 sm:w-14 sm:h-14 grid place-items-center p-0 m-0 font-bold text-2xl rounded-sm text-black border-2 border-gray-300   rounded
    }

    .letter-indicator {
        @apply h-2 w-12 sm:w-14 sm:h-2 grid place-items-center p-0 m-0 rounded-sm border-2 border-gray-300   rounded
    }
</style>