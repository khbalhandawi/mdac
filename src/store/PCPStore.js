import { defineStore } from 'pinia'

export const usePCPStore = defineStore('pcp', {
    state: () => ({
            horizontalOffset: 100,
            axisLength: 100,
            colorScaleCategory: null,
            colorScaleFunction: () => 'black',
            resolution: 2,

            // Bounds
            plotXBounds: [0, 500],
            plotYBounds: [0, 500]
        }),
    getters: {},
    actions: {},
})
