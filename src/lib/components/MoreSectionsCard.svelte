<script lang="ts">

    const titleText = "more sections that may interest you";

    export let sections: { name: string; href: string; description?: string }[] = [];
</script>

<section class="z-index-10 sticky top-24 mt-10">
    <div class="m-5 bg-black/80 backdrop-blur-xl px-4 py-2 rounded-lg shadow-lg border border-gray-800 mt-10">
        <p class="text-lg font-bold mb-2">{titleText}</p>
        <ul class="flex flex-col gap-2">
            {#each sections as section}
                <li class="hover:border hover:border-gray-800 p-2 rounded-lg">
                    <a href={section.href} class="flex flex-col">
                        <span class="font-medium">{section.name}</span>
                        {#if section.description}
                            <span class="text-sm text-gray-500 code-line">{section.description}</span>
                        {/if}
                    </a>
                </li>
            {/each}
        </ul>   
    </div>
</section>


