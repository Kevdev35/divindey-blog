export const gitCommandsCheatSheet = [
    {
        title: "Basics",
        description: "Fundamentals of Git commands.",
        commands: [
            { title: "Initialize repo", command: "git init ." },
            { title: "Check status", command: "git status" },
            { title: "View commits history", command: "git log" }
        ]
    },
    {
        title: "Staging & Committing",
        description: "Add and save changes to your project.",
        commands: [
            { title: "Add all files", command: "git add ." },
            { title: "Add specific file", command: "git add archivo.txt" },
            { title: "Commit changes", command: 'git commit -m "mensaje"' }
        ]
    },
    {
        title: "Branches",
        description: "Commands for working with branches.",
        commands: [
            { title: "List branches", command: "git branch" },
            { title: "Create branch", command: "git branch feature-x" },
            { title: "Switch branch", command: "git checkout feature-x" },
            { title: "Create and switch branch", command: "git checkout -b feature-x" }
        ]
    },
    {
        title: "Merging",
        description: "Combine changes from two branches.",
        commands: [
            { title: "Merge branch into current", command: "git merge feature-x" }
        ]
    },
    {
        title: "Remote Repositories (GitHub)",
        description: "Connect Git with GitHub repositories.",
        commands: [
            { title: "Add remote origin", command: "git remote add origin https://github.com/usuario/repo.git" },
            { title: "Push first time", command: "git push -u origin main" },
            { title: "Push changes", command: "git push" },
            { title: "Pull changes", command: "git pull" },
            { title: "Clone repository", command: "git clone https://github.com/usuario/repo.git" }
        ]
    },
    {
        title: "Useful Commands",
        description: "Extra commands for common tasks.",
        commands: [
            { title: "Delete branch", command: "git branch -d feature-x" },
            { title: "Restore file", command: "git checkout -- archivo.txt" },
            { title: "Switch to main branch", command: "git checkout main" }
        ]
    }
];

export const gitSummaryTable = [
    {
        action: "Create repo",
        command: "git init"
    },
    {
        action: "Check status",
        command: "git status"
    },
    {
        action: "Add all",
        command: "git add ."
    },
    {
        action: "Commit changes",
        command: 'git commit -m "message"'
    },
    {
        action: "Create branch",
        command: "git branch name"
    },
    {
        action: "Switch branch",
        command: "git checkout name"
    },
    {
        action: "Create & switch branch",
        command: "git checkout -b name"
    },
    {
        action: "Merge branch",
        command: "git merge branch-name"
    },
    {
        action: "Push changes",
        command: "git push"
    },
    {
        action: "Pull changes",
        command: "git pull"
    }
];


