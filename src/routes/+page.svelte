<script lang="ts">
    import { Link2, Code2, FileCode, BookOpen, Sparkles } from "lucide-svelte";

    const heroTitle = "Divindey Dev Blog";
    const heroSubtitle = "El mejor recurso para desarrolladores, potenciado por la comunidad y la experiencia.";
    const heroDescription = "Explora cheat sheets, extensiones de VS Code, y recursos curados especialmente para programadores que buscan optimizar su flujo de trabajo.";

    const sections = [
        { 
            title: "VS Code Extensions", 
            description: "Las mejores extensiones para potenciar tu editor y acelerar tu desarrollo diario.",
            route: "/resources/vs-code-extensions",
            icon: Code2,
            color: "from-blue-600 to-cyan-600"
        },
        { 
            title: "Git Cheat Sheet", 
            description: "Comandos esenciales de Git organizados y explicados para desarrolladores de todos los niveles.",
            route: "/resources/git-commands-essentials-cheat-sheet",
            icon: FileCode,
            color: "from-purple-600 to-pink-600"
        },
        { 
            title: "Recursos Developer", 
            description: "Contenido curado y herramientas que mejorarán tu experiencia como desarrollador.",
            route: "/resources",
            icon: BookOpen,
            color: "from-orange-600 to-red-600"
        }
    ];

    const features = [
        { text: "Cheat sheets actualizados", icon: Sparkles },
        { text: "Recursos curados", icon: BookOpen },
        { text: "Tips prácticos", icon: Code2 },
        { text: "Comunidad activa", icon: Link2 }
    ];
</script>

<svelte:head>
    <title>Divindey Dev - Blog para Programadores</title>
    <meta name="description" content="Blog especializado en desarrollo web con cheat sheets, recursos y tips para programadores." />
</svelte:head>

<div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-20">
        <!-- Starfield/particle background effect -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]"></div>
        <div class="absolute inset-0" style="background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 50px 50px;"></div>
        
        <!-- Subtle glow effects -->
        <div class="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div class="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl"></div>
        
        <div class="relative mx-auto max-w-5xl">
            <div class="text-center">
                <!-- Small intro text -->
                <div class="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-5 py-2.5 text-sm font-medium backdrop-blur-sm">
                    <Sparkles size={16} class="text-purple-400 animate-pulse" />
                    <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Blog para programadores modernos
                    </span>
                </div>
                
                <!-- Main title - large and centered like AuthKit -->
                <h1 class="text-balance mb-8 text-6xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
                    {heroTitle}
                </h1>
                
                <!-- Subtitle -->
                <p class="text-pretty mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
                    {heroSubtitle}
                </p>

                <!-- CTA buttons -->
                <div class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                    <a 
                        href="#" 
                        class="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-purple-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105"
                    >
                        <span class="relative z-10">Explorar Recursos</span>
                        <Link2 size={18} class="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                        <div class="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </a>
                    
                    <a 
                        href="/about" 
                        class="inline-flex items-center gap-2 rounded-lg border border-gray-800 px-8 py-4 text-base font-semibold text-foreground transition-all duration-200 bg-black/80 backdrop-blur-xl"
                    >
                        Sobre el Blog
                    </a>
                </div>
            </div>

            <!-- Features grid -->
            <div class="mt-24 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
                {#each features as feature}
                    <div class="flex flex-col items-center gap-3 rounded-xl border border-gray-800 bg-black/70 p-6 text-center backdrop-blur-xl transition-all duration-200 hover:border-border hover:bg-card/50">
                        <div class="rounded-lg bg-accent p-2.5">
                            <feature.icon size={20} class="text-foreground" />
                        </div>
                        <span class="text-sm font-medium text-foreground/90">{feature.text}</span>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Sections Preview -->
    <section class="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div class="mx-auto max-w-7xl">
            <div class="mb-12 text-center">
                <h2 class="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Explora nuestro contenido
                </h2>
                <p class="text-pretty mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                    Recursos organizados y listos para usar en tu día a día como desarrollador
                </p>
            </div>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {#each sections as section}
                    <a 
                        href={section.route}
                        class="group relative overflow-hidden rounded-xl border border-gray-800 bg-black/80 backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-xl"
                    >
                        <div class="absolute inset-0 bg-gradient-to-br {section.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5"></div>
                        
                        <div class="relative p-6">
                            <div class="mb-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-br {section.color} p-3">
                                <section.icon size={24} class="text-white" />
                            </div>
                            
                            <h3 class="mb-2 text-xl font-bold text-foreground group-hover:text-purple-600 transition-colors duration-200">
                                {section.title}
                            </h3>
                            
                            <p class="mb-4 text-sm text-muted-foreground">
                                {section.description}
                            </p>
                            
                            <div class="inline-flex items-center gap-2 text-sm font-medium text-purple-600 transition-transform duration-200 group-hover:translate-x-1">
                                Ver más
                                <Link2 size={16} />
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div class="mx-auto max-w-7xl">
            <div class="relative overflow-hidden rounded-2xl  border border-gray-800 bg-black/80 backdrop-blur-xl bg-gradient-to-br from-purple-900/20 via-card to-card p-8 shadow-xl sm:p-12">
                <div class="relative z-10 text-center">
                    <h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        ¿Listo para optimizar tu desarrollo?
                    </h2>
                    <p class="text-pretty mx-auto mb-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
                        Únete a cientos de desarrolladores que ya están usando nuestros recursos para mejorar su flujo de trabajo.
                    </p>
                    <a 
                        href="/git-commands" 
                        class="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-purple-700 hover:shadow-xl"
                    >
                        Comenzar ahora
                        <Link2 size={18} />
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>
