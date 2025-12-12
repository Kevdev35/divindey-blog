<script lang="ts">
    import CopyPaste from "$lib/components/CopyPaste.svelte";
    import { gitCommandsCheatSheet } from "$lib/cheat-sheets/git-commands";
    import { gitSummaryTable } from "$lib/cheat-sheets/git-commands";

    import MoreSectionsCard from "$lib/components/MoreSectionsCard.svelte";
    import { moreSections } from "$lib/cheat-sheets/more-sections";

    import ButtonFloatingBottom from "$lib/components/buttonFloatingBottom.svelte";

    const titleText = "Git Commands Cheat Sheet - Divindey Dev";
</script>

<svelte:head>
    <title>{titleText}</title>
</svelte:head>

<div class="min-h-screen bg-background px-4 py-8 md:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            <!-- Main Content Section -->
            <div class="space-y-6 lg:col-span-8 xl:col-span-8">
                <header class="space-y-3 ">
                    <h1 class="text-balance mt-10 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Git Commands Essentials Cheat Sheet
                    </h1>
                    <p class="text-pretty text-base text-muted-foreground sm:text-lg">
                        This is a handy cheat sheet for common Git commands.
                    </p>
                </header>

                <section class="m-5 bg-black/80 backdrop-blur-xl px-4 py-5 rounded-lg shadow-lg border border-gray-800 mt-10">
                    <h2 class="mb-3 text-4xl font-bold tracking-tight text-card-foreground sm:text-2xl">
                        What is Git?
                    </h2>
                    <p class="mb-5 text-sm text-muted-foreground sm:text-base">
                        Git is a version control system that allows you to:
                    </p>

                        <ul class="flex flex-col list-disc list-inside gap-2 ml-5 text-sm  sm:text-base">
                            <li class="code-line">Save changes to your files with history</li>
                            <li class="code-line">Work in teams without overwriting each other's code</li>
                            <li class="code-line">Create branches to experiment without breaking the project</li>
                            <li class="code-line">Go back to any point in time</li>
                        </ul>
                    
                </section>

                <!-- Command Sections -->
                <div class="space-y-6">
                    {#each gitCommandsCheatSheet as section}
                        <section class="rounded-xl bg-card p-4 sm:p-6">
                            <h2 class="mb-3 text-xl font-bold tracking-tight text-card-foreground sm:text-2xl">
                                {section.title}
                            </h2>
                            <p class="mb-5 text-sm text-muted-foreground sm:text-base">
                                {section.description}
                            </p>

                            <!-- Commands List -->
                            <div class="space-y-3">
                                {#each section.commands as item}
                                    <CopyPaste 
                                        command={item.command} 
                                        titleCommand={item.title}
                                    />
                                {/each}
                            </div>
                        </section>
                    {/each}
                </div>


                <section class="m-5 bg-black/80 backdrop-blur-xl px-4 py-5 rounded-lg shadow-lg border border-gray-800 mt-10">
                    <h2 class="mb-3 text-4xl font-bold tracking-tight text-card-foreground sm:text-2xl">
                        Conclusion
                    </h2>
                    <p class="mb-5 text-sm text-muted-foreground sm:text-base">
                        This Git commands essentials cheat sheet covers the most common commands you'll use when working with Git. Practice using these commands to become more comfortable with version control and managing your code effectively.
                    </p>

                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-sm text-left text-muted-foreground">
                            <thead class=" text-card-foreground font-semibold border-b border-gray-700">
                                <tr>
                                    <th class="px-4 py-2">Action</th>
                                    <th class="px-4 py-2">Command</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each gitSummaryTable as commandsTable}
                                    <tr class="border-b border-gray-800 hover:bg-black/30 cursor-pointer">
                                        <td class="px-4 py-2">{commandsTable.action}</td>
                                        <td class="px-4 py-2"><code class=" px-2 py-1 text-xs code-line">{commandsTable.command}</code></td>
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
            

            <!-- Sidebar Section -->
            <aside class="lg:col-span-4 xl:col-span-4">
                <div class="sticky top-24 space-y-6 justify-between">
                    <MoreSectionsCard sections={moreSections} />
                    
                </div>
            </aside>
        </div>
        <ButtonFloatingBottom />
    </div>

    
</div>
