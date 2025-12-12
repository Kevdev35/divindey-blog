<script lang="ts">
  import { vscodeExtensions } from "$lib/cheat-sheets/vscode-extensions";
  import MoreSectionsCard from "$lib/components/MoreSectionsCard.svelte";
  import { moreSections } from "$lib/cheat-sheets/more-sections";
  import { Link2 } from "lucide-svelte";
</script>

<div class="min-h-screen bg-background px-4 py-8 md:px-6 lg:px-8">
  <div class="mx-auto max-w-7xl">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">

      <!-- Main Content Section -->
      <div class="space-y-6 lg:col-span-8 xl:col-span-8">

        <!-- Header -->
        <header class="space-y-3">
          <h1 class="text-balance mt-10 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Extensions for VS Code
          </h1>
          <p class="text-pretty text-base text-muted-foreground sm:text-lg">
            A curated list of useful Visual Studio Code extensions to enhance your development workflow.
          </p>
        </header>

        <!-- What is Extensions Section -->
        <section class="bg-black/80 backdrop-blur-xl rounded-xl shadow-lg border border-gray-800 p-6 mt-10">
            <h2 class="text-2xl font-bold text-card-foreground mb-3">
                What are VS Code Extensions?
            </h2>
            <p class="text-sm text-muted-foreground mb-4">
                Visual Studio Code extensions are add-ons that enhance the functionality of the VS Code editor, allowing you to customize and improve your development experience.
            </p>
            <ul class="list-disc list-inside space-y-2 text-sm sm:text-base ml-5">
                <li>Enhance your coding workflow with tools and utilities</li>
                <li>Improve code quality with linters and formatters</li>
                <li>Add support for new languages and frameworks</li>
                <li>Visualize and manage project resources easily</li>
                <li>Integrate with external services like Git, Docker, and databases</li>
            </ul>
        </section>


        <!-- Recommended Extensions -->
        <section class="space-y-6 mt-10">
          <h2 class="text-2xl font-bold text-card-foreground mb-3">
            Recommended VS Code Extensions
          </h2>

          {#each vscodeExtensions as extension}
            <div class="rounded-xl bg-black/80 backdrop-blur-xl shadow-lg border border-gray-800 p-6 mt-6">
              <div class="flex items-center justify-between mb-4">
                <div class="flex">
                    <h3 class="text-xl font-bold text-card-foreground">{extension.name}</h3>
                    {#if extension.recommended}
                        <span class="ml-4 inline-block border border-gray-900 bg-black text-white text-xs font-semibold px-2 py-1 rounded-lg ">{extension.recommended}</span>
                    {/if}
                </div>
                <a 
                  href={extension.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${extension.name} VS Code extension`}
                  class="group flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-800 text-xs font-medium bg-black text-blue-500 hover:text-blue-400 hover:underline transition-colors duration-200"
                >
                  Visit Extension
                  <Link2 size={18} class="transition-colors group-hover:text-blue-400" />
                </a>
                
              </div>
              <p class="text-sm text-muted-foreground">{extension.description}</p>
            </div>
          {/each}
        </section>

      </div>

      <!-- Sidebar Section -->
      <aside class="lg:col-span-4 xl:col-span-4">
        <div class="sticky top-24 space-y-6 lg:top-24 sm:top-16">
          <MoreSectionsCard sections={moreSections} />
        </div>
      </aside>

    </div>
  </div>
</div>
