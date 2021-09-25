<!--
CHILD OF TwootItem (herite attribute)

-->
<template>
    <div class="twoot-item" @click="favouriteTwoot(twoot.id)">
        <div class="user-profile__twoot">
            <div class="twoot-item__user">
                @{{ username }}
            </div>
            <div class="twoot-item__content">
                {{ twoot.content }}
                {{ test2 }}
            </div>
        </div>
    </div>

</template>


<script>
export default {
    name: "TwootItem",
    props: {
        username: {
            type: String,
            required: true
        },
        twoot: {
            type: Object,
            required: true
        },
        test2: {
            type: String,
            required: true
        }
    },
    methods: {
        favouriteTwoot(id) {
            this.$emit('favourite', id) // 
            console.log(id)
            /* 
            Why $emit()?
            Generally, you use $emit() to notify the 
            parent component that something changed. 
            For example, suppose you have a component 
            input-name that takes a prop called name. 
            This component exposes an input form asking 
            the user for their name, and an 'Update'
             button that updates the name.
            */
        }
    }
};
</script>

<style lang="scss" scoped>
.twoot-item {
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25s ease;
    border-top: 1px solid #DFE3E8;
    padding-top: 10px;

    &:hover {
        transform: scale(1.1, 1.1);
    }

    .twoot-item__user {
        font-weight: bold;
    }
}
</style>