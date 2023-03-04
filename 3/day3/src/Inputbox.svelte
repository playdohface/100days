<script lang="ts">

    import * as db from './database' ;
    import Userview from './Userview.svelte';
    import type { User } from './types';
    


    let inputval:string = "";

    let outputval: User | null;
    $: outputval = null;
    
    function matchInput() { 
        let user = db.getUser(inputval);       
        if (user) {          
            outputval = user;          
        } else {
            outputval = null;
        }
    }
</script>

<input type="text" name="maininput" bind:value={inputval} on:input={matchInput}/>
<h1>
    {#if outputval}
        <Userview user={outputval} />
    {:else}
        Nothing interesting
    {/if}
</h1>

<style>
    input {
        min-width: 500px;
        min-height: 40px;
        font-size: x-large;
        font-family: 'Courier New', Courier, monospace;
    }
</style>