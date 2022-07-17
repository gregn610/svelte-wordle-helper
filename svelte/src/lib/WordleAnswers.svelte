<script lang="ts">
    import {onMount} from "svelte";
    import Keyboard from "./Keyboard.svelte";
    import SearchGrid from "./SearchGrid.svelte";
    import {searchTermStore, searchTermIndex} from '../stores'


    let onlyWordleWords: boolean = true;
    let complete: string[] = [];
    let answers: string[] = [];
    let wordList = [];

    onMount(async function () {
        const response = await fetch('./wordle-all.json');
        complete = await response.json();
        const response2 = await fetch('./wordle-answers.json');
        answers = await response2.json();
        refreshAnswers();
    });

    const match = (entry) => {
        /* Switch non-alpha chars for regexp wildcard dot
        *  Add start & end anchors
        * */
        const subst = RegExp(/[^A-Za-z]/g);
        return RegExp('^' + $searchTermStore.join('').replace(subst, '.') + '$', 'i').test(entry);
    }

    const refreshAnswers = () => {
        /* An array-on-the-left assignment to force svelte bindings to update */
        wordList = onlyWordleWords ? answers : complete;
    }

    const onChar = (value: string) => {
        $searchTermStore[$searchTermIndex] = value;
        if ($searchTermIndex < 4) {
            $searchTermIndex += 1;
        }
        refreshAnswers();
    };

    const onDelete = () => {
        $searchTermStore[$searchTermIndex] = '?';
        if ($searchTermIndex > 0) {
            $searchTermIndex -= 1;
        }
        refreshAnswers();
    };

    const onIndex = (idx) => {
        $searchTermIndex = idx;
    };

</script>

<header class="h-14 p-6">Wordle Helper</header>

<div class="flex">
    <div name="colleft" class="flex-none w-14 "></div>
    <div name="colmain" class="flex-grow justify-center">
        <div>
            <input id="wwo" type="checkbox" bind:checked={onlyWordleWords} on:change={refreshAnswers}>
            <label for="wwo">Wordle answers only</label>
        </div>

        <SearchGrid {onIndex}/>

        <Keyboard {onChar} {onDelete}></Keyboard>

        <div>
            <ul class="p-2 mb-12 whitespace-nowrap no-scrollbar overflow-x-scroll overflow-y-hidden">
                {#each wordList.filter(val => match(val)) as val, idx}
                    <li>{val}</li>
                {/each}
            </ul>
        </div>

    </div>
    <div name="colright" class="flex-none w-14 "></div>

</div>
<footer>Created with Svelte & TailwindCSS.<br>
    Special thanks to <a href="https://github.com/SamuelQuinones/svelte-wordle">SamuelQuinones/svelte-wordle</a>.
</footer>

