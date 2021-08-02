<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'app',
    created () {
        if (sessionStorage.getItem("store")) {
            this.$store.replaceState(Object.assign({}, JSON.parse(sessionStorage.getItem("store"))))
        }

        window.addEventListener("beforeunload", () => {
            let cache = []
            sessionStorage.setItem("store", JSON.stringify(this.$store.state, function (key, value) {
                if (typeof value === 'object' && value !== null) {
                    if (cache.indexOf(value) !== -1) {
                        // Circular reference found, discard key
                        return;
                    }
                    // Store value in our collection
                    cache.push(value);
                }
                return value;
            }))
            cache = null
        })
    }
}
</script>
