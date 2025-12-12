interface VSCodeExtension {
    name: string;
    description: string;
    url: string;
    recommended?: recommendedExtension;
}

type recommendedExtension = "Recommended" |  "Not Recommended" | "Optional" ;

export const vscodeExtensions: VSCodeExtension[] = [
    {
        name: "Icons Viewer - Kevdev35",
        description: "Easily browse, search, and preview thousands of icons directly in VS Code, with support for copy-paste or inserting them into your projects.",
        url: "https://marketplace.visualstudio.com/items?itemName=Kevdev35.icons-viewer",
        recommended: "Recommended"
    },
    {
        name: "Prettier - Code formatter",
        description: "An opinionated code formatter that supports many languages and integrates with VS Code.",
        url: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
        recommended: "Recommended"
    },
    {
        name: "ESLint",
        description: "Integrates ESLint JavaScript into VS Code, helping to find and fix problems in your JavaScript code.",
        url: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
        recommended: "Recommended"
    },
    {
        name: "Live Server",
        description: "Launch a local development server with live reload feature for static & dynamic pages.",
        url: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",
        recommended: "Optional"
    },
    {
        name: "GitLens — Git supercharged",
        description: "Enhances the built-in Git capabilities of VS Code with features like blame annotations, code lens, and repository insights.",
        url: "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
    }
]