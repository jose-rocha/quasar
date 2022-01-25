<template>
    <div class="q-pa-md">
        <q-page padding>
            <p v-for="n in 105" :key="n">
                teste
            </p>
            <q-page-scroller position="bottom-right" :scroll-offset="2020" :offset="[18, 18]">
                <q-btn fab icon="keyboard_arrow_up" color="green" />
            </q-page-scroller>
        </q-page>
    </div>
</template>
