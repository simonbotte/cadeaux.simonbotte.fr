<template>
    <div>
        <div class="custom-shape-divider-bottom-1673040333 horizontal">
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    opacity=".25"
                    class="shape-fill"
                ></path>
                <path
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                    opacity=".5"
                    class="shape-fill"
                ></path>
                <path
                    d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                    class="shape-fill"
                ></path>
            </svg>
        </div>

        <div class="custom-shape-divider-bottom-1673093835 vertical">
            <svg width="120" height="900" viewBox="0 0 120 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_121_279)">
                    <path
                        opacity="0.25"
                        d="M120 -300H73.71C51.51 -252.21 41.54 -196.41 45.71 -142C51.08 -71.64 79.02 -5.67001 83.21 64.8C87.57 138.64 66.33 212.34 47.95 283C29.95 352.27 23.07 421.3 34.87 492.4C40.87 528.55 52.71 562.25 64.21 596.85C95 689.49 134.29 813 67.53 900H120L120 -300Z"
                        fill="#1D3557"
                    />
                    <path
                        opacity="0.5"
                        d="M120 -300H104.19C83.08 -287 63.14 -272.36 47.95 -252.31C8.73 -200.59 9 -135 28.42 -75.42C38.57 -44.27 54.49 -15.33 68.22 14.25C87.22 55.17 114.22 98.98 117.89 145.08C120.74 181.34 108.47 215.98 86.33 243.68C60.94 275.45 24.33 306 13.33 347.31C2.54 387.75 20.02 428.66 37.61 466.44C55.2 504.22 76.61 541.6 80.66 583.36C86.51 643.09 57.78 696.64 41.82 752.26C33.16 782.46 35.65 811.26 49.32 839.35C60.21 861.78 76.25 887.35 98.56 900H120L120 -300Z"
                        fill="#1D3557"
                    />
                    <path
                        d="M120 -300H114.37C61 -150.07 48.68 14.09 77.43 175.83C85.07 218.83 97.55 260.06 103.89 303.44C112.52 362.44 91.65 415.92 68.49 469C42.78 527.93 24.76 586 30 651.2C37 737.73 75.71 823.66 114.81 900H120L120 -300Z"
                        fill="#1D3557"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_121_279">
                        <rect width="1200" height="120" fill="white" transform="translate(120 -300) rotate(90)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    orientation: {
        type: String,
        default: "horizontal",
    },
});
</script>

<style scoped lang="scss">
.custom-shape-divider-bottom-1673040333 {
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1673040333 svg {
    display: block;
    width: calc(100% + 1.3px);
}

.custom-shape-divider-bottom-1673040333 .shape-fill {
    fill: #1d3557;
}
.horizontal {
    display: block;
}
.vertical {
    display: none;
}
@media screen and (min-width: 1200px) {
    .horizontal {
        display: none;
    }
    .vertical {
        display: block;
        position: absolute;
        top: 0;
        left: 15px;
        transform: translateX(-100%);
        height: 100%;
        line-height: 0;
        overflow: hidden;
        svg {
            height: 100%;
        }
    }
}
</style>
