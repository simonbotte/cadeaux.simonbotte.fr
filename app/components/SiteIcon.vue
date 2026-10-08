<script setup lang="ts">
defineProps<{ name: string }>();

const paths: Record<string, string[]> = {
    gift: ["M3 8h18v4H3z", "M5 12v9h14v-9", "M12 8v13", "M12 8H8.5A3.5 3.5 0 1 1 12 4.5V8Z", "M12 8h3.5A3.5 3.5 0 1 0 12 4.5V8Z"],
    search: ["M21 21l-5.2-5.2", "M18 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"],
    "arrow-right": ["M4 12h16", "m13 5 7 7-7 7"],
    "arrow-up-right": ["M6 18 18 6", "M6 6h12v12"],
    "arrow-down": ["M12 4v16", "m5 13 7 7 7-7"],
    "arrow-up": ["M12 20V4", "m5 11 7-7 7 7"],
    close: ["m6 6 12 12", "M6 18 18 6"],
    menu: ["M4 8h16", "M4 16h16"],
    sparkles: ["m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"],
    tree: ["m12 2 4 6h-2l5 7h-4l4 5H5l4-5H5l5-7H8l4-6Z", "M12 20v2"],
};
</script>

<template>
    <svg class="site-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path v-for="(path, index) in paths[name] || []" :key="index" :d="path" />
    </svg>
</template>
