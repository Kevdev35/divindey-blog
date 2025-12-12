<script lang="ts">
    import logo from '$lib/assets/logo.webp';
	import { ChevronDown } from '@lucide/svelte';

    interface NavItem {
        name: string;
        href: string;
        submenu?: NavItem[];
        description?: string;
    }

    const navItems: NavItem[] = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { 
            name: 'Resources', 
            href: '#', 
            submenu:[
                { name: 'Web Development', href: '/resources/web-development', description: 'learn web development' },
                { name: 'App Development', href: '/resources/app-development', description: 'learn app development' },
                { name: "Git commands essentials cheat sheet", href: '/resources/git-commands-essentials-cheat-sheet', description: 'a handy git commands essentials cheat sheet' },
                { name: 'VS Code Extensions', href: '/resources/vs-code-extensions', description: 'best vs code extensions for developers' }
            ]
         },
        { name: 'Contact', href: '/contact' }
    ]

    let openDropdown: number | null = null;

    function toggleDropdown(index: number) {
        openDropdown =  openDropdown === index ? null : index;
    }

    function closeDropdown() {
        openDropdown = null;
    }
</script>

<nav class="flex justify-between items-center p-2 text-white px-8 pt-8 mx-4 rounded-lg z-50">
    <img src={logo} alt="logo de divindey" class="w-auto h-10"/>
    <div class="flex justify-between gap-4">
        {#each navItems as items, index(index)}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="relative px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer" on:mouseenter={() => toggleDropdown(index)} on:mouseleave={closeDropdown}>
            {#if items.submenu}
                <button class="relative">
                    <span class="flex items-center align-middle gap-2">{items.name} <ChevronDown /></span>
                    {#if openDropdown === index}
                        <div>
                            <ul class="absolute bg-black/90 backdrop-blur-xl text-white text-start mt-2 rounded-lg shadow-lg flex flex-col min-w-50 z-10 border-gray-800 border" on:mouseleave={closeDropdown}>
                                {#each items.submenu as submenuItem}
                                    <li class="px-4 py-2 hover:bg-gray-950 hover:rounded-lg flex">
                                        <a href={submenuItem.href} class="flex flex-col ">
                                            {submenuItem.name}
                                            {#if submenuItem.description}
                                                <span class="text-sm text-gray-400 flex">{submenuItem.description}</span>
                                            {/if}
                                        </a>
                                        
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    {/if}
                </button>
                {:else}
                <a href={items.href}>{items.name}</a>
            {/if}
        </div>
        {/each}
    </div>
</nav>