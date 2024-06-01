import mixin from '../mixins/mixin'

export default {
	label: 'Comb sort',

	methods: {
		async sort() {
			const { arr, n, marks, numbs, wait, swap } = this
			let gap = n
			let swapped = true
			while (gap !== 1 || swapped) {
				gap = this.getGap(gap)
				swapped = false
				for (let i = 0; i < n - gap; i++) {
					marks.amber[0] = i
					marks.rose[0] = i + gap
					if (arr[i] > arr[i + gap]) {
						swap(i, i + gap)
						swapped = true
					}
					await wait()
				}
			}
		},

		getGap(prevGap) {
			let gap = Math.floor(prevGap / 1.3)
			if (gap < 1) {
				return 1
			}
			return gap
		}
	},

	extends: mixin
}
