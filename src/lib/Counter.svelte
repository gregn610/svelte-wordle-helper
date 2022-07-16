<script lang="ts">
   import { onMount } from "svelte";

  let onlyWordleWords: boolean = false;
  let regex_chars: string[] = ['.', '.', '.', '.', '.'];
  let complete: string[] = [];
  let answers: string[] = [];
  let wordList = [];

  onMount(async function() {
    const response = await fetch('static/wordle-all.json');
    complete = await response.json();
    wordList = complete;
    const response2 = await fetch('static/wordle-answers.json');
    answers = await response2.json();
  });

  const match = (entry) => {
    return RegExp('^' + regex_chars.join('') + '$').test(entry);
  }
  const onChange = () => {
    console.log('onChange fired!')
    wordList = onlyWordleWords ? answers : complete;
  }


</script>
<div>
  <input id="wwo" type="checkbox" bind:checked={onlyWordleWords} on:change={onChange}>
  <label for="wwo">Wordle answers only</label>
</div>
<p>Use a fullstop for unknow characters</p>
<div>
  <p>{'^' + regex_chars.join('') +'$'}</p>
</div>
<div>
  <ol>
    <li><input type="text" minlength=1 maxlength=1 bind:value={regex_chars[0]} on:input={onChange} on:focus="{event => event.target.select()}">
    <li><input type="text" minlength=1 maxlength=1 bind:value={regex_chars[1]} on:input={onChange} on:focus="{event => event.target.select()}">
    <li><input type="text" minlength=1 maxlength=1 bind:value={regex_chars[2]} on:input={onChange} on:focus="{event => event.target.select()}">
    <li><input type="text" minlength=1 maxlength=1 bind:value={regex_chars[3]} on:input={onChange} on:focus="{event => event.target.select()}">
    <li><input type="text" minlength=1 maxlength=1 bind:value={regex_chars[4]} on:input={onChange} on:focus="{event => event.target.select()}">
  </ol>

</div>
<ol>
  {#each wordList.filter(val => match(val)) as val, idx}
    <li>{val}</li>
  {/each}
</ol>

