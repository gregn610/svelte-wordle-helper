<script>
    import {onDestroy, onMount} from 'svelte';
    import Key from './Key.svelte';

    /* These are fn placeholders that get passed when component is instantiated */
    export let onChar;
    export let onDelete;

    const onKeyDown = (e) => {
        const value = e.key.toUpperCase();
        console.log('onKeyDown.value: ' + value);
        if (e.ctrlKey || e.metaKey) return;
        if (value === 'BACKSPACE' || value === 'DELETE') {
            onDelete();
        } else if (value.length === 1 && (value >= 'A' && value <= 'Z')) {
            onChar(value);
        } else if (e.shiftKey && value == '?') {
            onChar(value);
        }
    };

</script>
<svelte:window on:keydown={onKeyDown}/>

<div class="flex flex-col items-center w-100 pb-5">
    <div class="flex gap-1 my-0.5 w-fit">
        <Key kbKey="Q" onClick={onChar}/>
        <Key kbKey="W" onClick={onChar}/>
        <Key kbKey="E" onClick={onChar}/>
        <Key kbKey="R" onClick={onChar}/>
        <Key kbKey="T" onClick={onChar}/>
        <Key kbKey="Y" onClick={onChar}/>
        <Key kbKey="U" onClick={onChar}/>
        <Key kbKey="I" onClick={onChar}/>
        <Key kbKey="O" onClick={onChar}/>
        <Key kbKey="P" onClick={onChar}/>
        <Key kbKey="&larr;" onClick={onDelete}/>
    </div>
    <!-- keyboard row offset is by virtue of being centered but with less buttons -->
    <div class="flex gap-1 my-0.5 w-fit">
        <Key kbKey="A" onClick={onChar}/>
        <Key kbKey="S" onClick={onChar}/>
        <Key kbKey="D" onClick={onChar}/>
        <Key kbKey="F" onClick={onChar}/>
        <Key kbKey="G" onClick={onChar}/>
        <Key kbKey="H" onClick={onChar}/>
        <Key kbKey="J" onClick={onChar}/>
        <Key kbKey="K" onClick={onChar}/>
        <Key kbKey="L" onClick={onChar}/>
    </div>
    <div class="flex gap-1  my-0.5 w-fit">
        <Key kbKey="Z" onClick={onChar}/>
        <Key kbKey="X" onClick={onChar}/>
        <Key kbKey="C" onClick={onChar}/>
        <Key kbKey="V" onClick={onChar}/>
        <Key kbKey="B" onClick={onChar}/>
        <Key kbKey="N" onClick={onChar}/>
        <Key kbKey="M" onClick={onChar}/>
        <Key kbKey="?" onClick={onChar}/>
    </div>
</div>
