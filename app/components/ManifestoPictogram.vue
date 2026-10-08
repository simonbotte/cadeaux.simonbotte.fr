<script setup lang="ts">
defineProps<{ kind: "wallet" | "pickle" | "controller" | "heart" }>();
</script>

<template>
    <svg class="manifesto-pictogram" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <template v-if="kind === 'wallet'">
            <circle cx="36" cy="36" r="35" fill="#142A59" />
            <circle cx="36" cy="36" r="30.5" stroke="#A9BDE1" stroke-opacity=".45" />
            <ellipse cx="36" cy="56" rx="19" ry="3" fill="#000C1F" fill-opacity=".3" />
            <rect x="22" y="17" width="33" height="28" rx="4" transform="rotate(9 22 17)" fill="#FFF0C9" stroke="#D4A34A" stroke-width="1.2" />
            <path d="m26 23 19 3" stroke="#D4A34A" stroke-width="2" stroke-linecap="round" />
            <rect x="16" y="26" width="40" height="28" rx="5" fill="#E6AD45" stroke="#BB7A24" stroke-width="1.5" />
            <path d="M20 30h31M20 50h31" stroke="#FFF0C9" stroke-opacity=".6" stroke-linecap="round" />
            <path d="M44 34h13v12H44a6 6 0 0 1 0-12Z" fill="#CF8D28" stroke="#BB7A24" stroke-width="1.2" />
            <circle cx="46" cy="40" r="2" fill="#FFF0C9" />
            <path d="M14 18h4m-2-2v4" stroke="#FCE8B3" stroke-linecap="round" />
        </template>

        <template v-else-if="kind === 'pickle'">
            <circle cx="36" cy="36" r="35" fill="#D8E5E3" />
            <circle cx="36" cy="36" r="30.5" stroke="#789D98" stroke-opacity=".65" />
            <ellipse cx="36" cy="57" rx="18" ry="3" fill="#426F68" fill-opacity=".12" />
            <path d="M21 24c-9 3-8 18 1 24 10 7 31 0 34-13 3-11-6-17-12-9-7 8-15 3-23-2Z" fill="#A7B55C" stroke="#667536" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M20 28c-3 4-2 10 1 13" stroke="#D9E2A3" stroke-width="2.5" stroke-linecap="round" />
            <path d="M28 47v7m15-10v9" stroke="#895D43" stroke-width="3" stroke-linecap="round" />
            <ellipse cx="26" cy="55" rx="5" ry="3" fill="#B08360" stroke="#895D43" />
            <ellipse cx="42" cy="54" rx="5" ry="3" fill="#B08360" stroke="#895D43" />
            <path d="M30 37v2m10-5v2" stroke="#263C26" stroke-width="2.5" stroke-linecap="round" />
            <path d="M33 41c2 3 5 2 6-1" stroke="#263C26" stroke-width="1.8" stroke-linecap="round" />
            <path d="m24 33 1 1m22-4 1 1m-1 8 1 1m-22 2 1 1" stroke="#71813C" stroke-width="2.4" stroke-linecap="round" />
            <path d="M53 17h4m-2-2v4" stroke="#638B80" stroke-linecap="round" />
        </template>

        <template v-else-if="kind === 'controller'">
            <circle cx="36" cy="36" r="35" fill="#F4DED0" />
            <circle cx="36" cy="36" r="30.5" stroke="#BC7F60" stroke-opacity=".55" />
            <ellipse cx="36" cy="56" rx="20" ry="3" fill="#A6684E" fill-opacity=".12" />
            <path d="M25 24h22c7 0 11 8 13 20 1 9-6 13-12 6l-6-7H30l-6 7c-6 7-13 3-12-6 2-12 6-20 13-20Z" fill="#C56B4B" stroke="#884831" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M20 28c-3 2-5 7-6 12" stroke="#FCEADA" stroke-width="2.2" stroke-linecap="round" />
            <path d="M23 30v10m-5-5h10" stroke="#FCEADA" stroke-width="3" stroke-linecap="round" />
            <circle cx="48" cy="31" r="2.3" fill="#FCEADA" />
            <circle cx="53" cy="36" r="2.3" fill="#FCEADA" />
            <circle cx="43" cy="36" r="2.3" fill="#FCEADA" />
            <circle cx="48" cy="41" r="2.3" fill="#FCEADA" />
            <path d="M33 32h6m-7 6h2m4 0h2" stroke="#884831" stroke-width="1.8" stroke-linecap="round" />
            <path d="M50 17h4m-2-2v4" stroke="#BC7F60" stroke-linecap="round" />
        </template>

        <template v-else>
            <circle cx="36" cy="36" r="35" fill="#F9E8EF" />
            <circle cx="36" cy="36" r="29" stroke="#D79CAE" stroke-opacity=".5" />
            <g class="heart-core">
                <path d="M36 53 21 38c-11-12 5-26 15-13 10-13 26 1 15 13L36 53Z" fill="#F2C9D8" stroke="#B74770" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24 31c0-4 4-6 7-3" stroke="#FFF8FC" stroke-width="2.5" stroke-linecap="round" />
            </g>
            <g class="heart-rays" stroke="#B74770" stroke-width="1.8" stroke-linecap="round">
                <path d="M36 10v5M36 59v4M10 36h5M57 36h5m-7-19-3 3m-33 33-3 3m2-38 3 3m33 32 3 3" />
            </g>
        </template>
    </svg>
</template>
