<template>
    <div class="container">
        <div>
            <!-- <span class="p-float-label"> -->
                <InputText placeholder="Code" id="code" type="text" v-model="value" />
                <!-- <label for="code">Code</label> -->
            <!-- </span> -->
        </div>
        <div>
            <Button label="Validate" />
        </div>
        <div>
            <Button class="p-button-warning" label="Buy" icon="pi pi-external-link" iconPos="right" />
        </div>
    </div>
</template>


<style scoped>
.container {
margin-top: 0.3rem;
    /* min-height: 8rem; */
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: auto;
}
.container > div {
margin: 0 0.5rem;
}

</style>


<script>
export default {
    data() {
        return {
        value: "",
        };
    },
}
</script>