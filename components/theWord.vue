<template>
    <div class="container theWord">
        <article>
            <h2>{{ word.attributes.title }}</h2>
            <p v-html="word.attributes.paragraphe">
            </p>
        </article>
        
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "TheWord",
    created() {
        axios
            .get("/api/word")
            .then((res) => {
                this.word = res.data.data;
            })
            .catch((error) => {});
    },
    data() {
        return {
            word: {
                attributes: {
                    title: "",
                    paragraphe: "",
                },
            },
        };
    },
};
</script>

<style scoped lang="scss">
    .theWord{
        margin-top: 50px;
        h2{
            font-size: 1.5rem;
            margin-bottom: 16px;
        }
        p{
            font-size: 1rem;
            line-height: 1.5rem;
            max-width: 1000px;
        }
        h2,p{
            color: var(--blue);
        }
    }

</style>
