<script lang="ts">

    import { Copy } from "lucide-svelte";

    export let titleCommand: string = ""

    export let command: string = ""

    let copied: boolean = false;

    async function copy() { 
        try {
            await navigator.clipboard.writeText(command);
            copied = true;
            setTimeout(() => (copied = false), 1500);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

</script>

<div class="m-5 bg-black/80 backdrop-blur-xl px-4 py-2 rounded-lg shadow-lg border border-gray-800">
    <div class="flex items-center justify-between  rounded-lg p-1 ">
        <p>{titleCommand}</p>
        <button on:click={copy} class="cursor-pointer hover:text-gray-9000 transition-colors duration-200 ease-in-out flex items-center">
            {#if copied}
                <span class="bg-green-500 text-white px-2 py-1 rounded">Copied!</span>
            {:else}
                <span class="flex gap-2 items-center text-gray-500 "><Copy size={16}/> Copy</span>
            {/if}
        </button>
    </div>

    <div class="bg-gray-900/80 backdrop-blur-xl text-green-400 p-4 rounded-lg my-2 overflow-x-auto code-line">
        <pre><code class="code-line">{command}</code></pre>
    </div>
</div>
