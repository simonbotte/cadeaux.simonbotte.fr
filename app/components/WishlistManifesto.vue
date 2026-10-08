<script setup lang="ts">
const badgeStep = ref(0);
const heartReplay = ref(0);
const badgeAnnouncement = ref("");
const interests = [
    { kind: "wallet" as const, label: "Les accessoires du quotidien" },
    { kind: "pickle" as const, label: "Une touche de douceur" },
    { kind: "controller" as const, label: "L’univers GTA VI" },
];
const badges = computed(() => interests.map((_, index) => interests[(index + badgeStep.value) % interests.length]!));

function cycleBadges() {
    badgeStep.value = (badgeStep.value + 1) % interests.length;
    badgeAnnouncement.value = `${badges.value[badges.value.length - 1]!.label} passe au premier plan.`;
}
</script>

<template>
    <section id="manifesto" class="manifesto-section" aria-labelledby="manifesto-title">
        <h2 id="manifesto-title" class="manifesto-eyebrow">Quelques envies au pied du sapin</h2>
        <p class="sr-only">À Noël, une liste de petites envies qui me ressemblent. Du pratique, du doux, du plaisir. Et surtout, le bonheur de se retrouver.</p>

        <div class="manifesto-statement">
            <div class="manifesto-line">
                <span aria-hidden="true">À Noël, </span>
                <a class="manifesto-chip manifesto-arrow" href="#envies" aria-label="Découvrir mes idées de cadeaux de Noël">
                    <SiteIcon name="arrow-right" />
                </a>
                <span aria-hidden="true"> une liste</span>
            </div>
            <div class="manifesto-line">
                <span aria-hidden="true">de petites envies </span>
                <button class="manifesto-chip manifesto-badges" type="button" aria-label="Faire défiler mes univers" aria-describedby="manifesto-universes" @click="cycleBadges">
                    <span v-for="(badge, index) in badges" :key="badge.kind" class="manifesto-badge" :style="{ '--badge-index': index, zIndex: index + 1 }" :data-interest="badge.label">
                        <ManifestoPictogram :kind="badge.kind" />
                    </span>
                </button>
                <span aria-hidden="true"> qui me ressemblent.</span>
            </div>
            <div class="manifesto-line" aria-hidden="true">Du pratique, du doux, du plaisir.</div>
            <div class="manifesto-line manifesto-last-line">
                <span aria-hidden="true">Et surtout, </span>
                <button class="manifesto-chip manifesto-heart" type="button" aria-label="Faire battre le cœur" aria-describedby="manifesto-heart-description" @click="heartReplay++">
                    <ManifestoPictogram :key="heartReplay" kind="heart" :class="{ 'heart-is-beating': heartReplay > 0 }" />
                </button>
                <span aria-hidden="true"> le bonheur</span>
            </div>
            <div class="manifesto-line" aria-hidden="true">de se retrouver.</div>
        </div>

        <span id="manifesto-universes" hidden>Trois envies illustrées : les accessoires du quotidien, un cornichon tout doux et l’univers GTA VI.</span>
        <span id="manifesto-heart-description" hidden>Une petite animation pour célébrer le plaisir de se retrouver à Noël.</span>
        <span class="sr-only" role="status" aria-live="polite">{{ badgeAnnouncement }}</span>
        <p class="manifesto-signature">Quelques cadeaux. Surtout un Noël ensemble.<span>Simon</span></p>
    </section>
</template>

<style scoped>
.manifesto-section {
    --chip-size: clamp(44px, 5.2vw, 68px);
    padding: 96px 40px 84px;
    background: #fff;
    text-align: center;
    scroll-margin-top: 24px;
}
.manifesto-eyebrow {
    margin-bottom: 36px;
    color: var(--muted);
    font-family: var(--font-body);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
}
.manifesto-statement {
    max-width: 1120px;
    margin: auto;
    color: var(--ink);
    font-family: var(--font-heading);
    font-size: clamp(36px, 4.3vw, 60px);
    font-weight: 300;
    line-height: 1.65;
    letter-spacing: -2.4px;
    text-wrap: balance;
}
.manifesto-line { display: block; }
.manifesto-chip {
    position: relative;
    display: inline-flex;
    width: var(--chip-size);
    height: var(--chip-size);
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    margin: 0 .05em;
    padding: 0;
    border: 0;
    border-radius: 50%;
    vertical-align: -.15em;
    font: inherit;
    line-height: 1;
    -webkit-tap-highlight-color: transparent;
}
.manifesto-chip:focus-visible { outline: 3px solid var(--focus); outline-offset: 5px; }
.manifesto-arrow {
    background: var(--navy);
    color: #fff;
    box-shadow: 0 6px 14px #10245b18;
    transition: background 220ms ease, transform 220ms ease;
}
.manifesto-arrow .site-icon { width: 48%; height: 48%; transition: transform 220ms ease; }
.manifesto-arrow:hover { background: var(--navy-hover); transform: rotate(-8deg); }
.manifesto-arrow:hover .site-icon { transform: translateX(3px); }
.manifesto-badges {
    width: calc(var(--chip-size) * 1.88);
    background: transparent;
    border-radius: 40px;
}
.manifesto-badge {
    position: absolute;
    top: 0;
    left: calc(var(--badge-index) * var(--chip-size) * .44);
    width: var(--chip-size);
    height: var(--chip-size);
    filter: drop-shadow(0 3px 3px #001b3820);
    transform: rotate(calc((var(--badge-index) - 1) * 8deg));
    transition: left 450ms cubic-bezier(.22, 1, .36, 1), transform 450ms cubic-bezier(.22, 1, .36, 1);
}
.manifesto-badges:hover .manifesto-badge { transform: rotate(calc((var(--badge-index) - 1) * 12deg)) translateY(-3px); }
.manifesto-heart { background: #f9e8ef; box-shadow: 0 4px 16px #b7477014; transition: transform 220ms ease; }
.manifesto-heart:hover { transform: rotate(5deg); }
:deep(.manifesto-pictogram) { width: 100%; height: 100%; display: block; overflow: visible; }
:deep(.heart-core) { transform-box: fill-box; transform-origin: center; }
:deep(.heart-rays) { opacity: 0; transform-box: fill-box; transform-origin: center; }
:deep(.heart-is-beating .heart-core) { animation: heartbeat 1100ms ease-in-out; }
:deep(.heart-is-beating .heart-rays) { animation: heart-sparkle 1100ms ease-out; }
.manifesto-signature { margin-top: 38px; color: var(--muted); font-family: var(--font-body); font-size: 14px; }
.manifesto-signature span { display: block; margin-top: 12px; color: var(--navy); font-family: var(--font-heading); font-size: 21px; font-weight: 300; }

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    18%, 48% { transform: scale(1.14); }
    32%, 64% { transform: scale(.96); }
}
@keyframes heart-sparkle {
    0% { opacity: 0; transform: scale(.7); }
    30% { opacity: 1; }
    100% { opacity: 0; transform: scale(1.15); }
}

@media (max-width: 1100px) {
    .manifesto-section { padding: 76px 32px 64px; }
    .manifesto-statement { font-size: clamp(34px, 4.3vw, 48px); letter-spacing: -1.7px; }
}
@media (max-width: 800px) {
    .manifesto-section { padding: 64px 24px 52px; }
    .manifesto-eyebrow { max-width: 260px; margin: 0 auto 28px; line-height: 1.7; font-size: 10px; }
    .manifesto-statement { max-width: 620px; font-size: clamp(30px, 4.6vw, 38px); line-height: 1.75; letter-spacing: -1.3px; }
    .manifesto-line { display: inline; }
    .manifesto-line::after { content: " "; }
    .manifesto-last-line::before { content: ""; display: block; height: 20px; }
    .manifesto-signature { margin-top: 28px; font-size: 13px; }
}
@media (max-width: 520px) {
    .manifesto-section { padding: 52px 20px 44px; }
    .manifesto-statement { font-size: clamp(27px, 7.8vw, 36px); line-height: 1.75; letter-spacing: -1.2px; }
    .manifesto-chip { margin: 0 .02em; vertical-align: -.3em; }
    .manifesto-signature { max-width: 240px; margin-right: auto; margin-left: auto; }
}
@media (prefers-reduced-motion: reduce) {
    .manifesto-chip, .manifesto-badge, .manifesto-arrow .site-icon { transition: none; }
    .manifesto-chip:hover, .manifesto-badges:hover .manifesto-badge, .manifesto-arrow:hover .site-icon { transform: none; }
    :deep(.heart-is-beating .heart-core), :deep(.heart-is-beating .heart-rays) { animation: none; }
}
</style>
