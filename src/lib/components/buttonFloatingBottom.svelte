<script lang="ts">

	import { ChevronUp, Instagram, type Icon } from "lucide-svelte";

    interface NavbarFloatingBottom {
        name: string,
        href: string,
        icon?: typeof Icon| null,
        color?: string
    }

    const navbarFloatingBottom: NavbarFloatingBottom[] = [
        { name:   "Back to top", href:   "#", icon: ChevronUp },
        { name:  "Instagram", href:  "#", icon: Instagram, color: "pink" },
    ]
</script>

<div class="sticky bottom-4 inset-0 min-w-[200px] max-w-md mx-auto z-50">
    <nav class="flex justify-between items-center p-.5 bg-black/50 text-white shadow-md border-b border-gray-800 backdrop-blur-xl rounded-lg">
        <ul class="flex justify-between gap-4 w-full">
            {#each navbarFloatingBottom as item}
                <li class="relative group">
                    <a
                        href={item.href} target="_blank" rel="noopener noreferrer"
                        class="px-3 py-2 rounded-full hover:scale-105 transition-all flex items-center justify-center text-gray-600 min-w-[44px]"
                        aria-label={item.name}
                    >
                        {#if item.icon}
                            <svelte:component this={item.icon} class="w-5 h-5" style="color: {item.color}" />
                        {/if}
                    </a>

                    <!-- TOOLTIP -->
                    <div class="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 cursor-default mb-2">
                        <div class=" bg-black/80 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-full whitespace-nowrap border-gray-800 backdrop-blur-xl border">
                            {item.name}
                        </div>
                    </div>
                </li>
            {/each}
        </ul>
    </nav>
</div>
