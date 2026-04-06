// Minimal flat config for Orion (single-file IIFE, no build system).
// Run locally with: npx eslint@9 index.js
export default [
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "script",
            globals: {
                // Browser globals used by Orion
                window: "readonly",
                document: "readonly",
                navigator: "readonly",
                location: "readonly",
                console: "readonly",
                fetch: "readonly",
                Notification: "readonly",
                setTimeout: "readonly",
                clearTimeout: "readonly",
                setInterval: "readonly",
                clearInterval: "readonly",
                requestAnimationFrame: "readonly",
                cancelAnimationFrame: "readonly",
                MutationObserver: "readonly",
                URL: "readonly",
                URLSearchParams: "readonly",
                // Discord-injected
                webpackChunkdiscord_app: "readonly",
            },
        },
        rules: {
            "no-undef": "error",
            "no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_|^e$|^err$|^error$|^ex$",
                    varsIgnorePattern: "^_",
                },
            ],
            "no-empty": ["error", { allowEmptyCatch: true }],
            "no-constant-condition": ["error", { checkLoops: false }],
            "no-unsafe-optional-chaining": "error",
        },
    },
];
