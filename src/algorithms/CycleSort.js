import mixin from '../mixins/mixin'

export default {
	label: 'Cycle sort',

	methods: {
		async sort() {
			const { arr, n, marks, numbs, wait, swap } = this
			let i = 0
			while (i < n) {
				marks.rose[0] = i
				let j = arr[i]
				marks.amber[0] = j
				if (arr[i] !== arr[j]) {
					swap(i, j)
				} else {
					i++
				}
				await wait()
			}
		}
	},

	extends: mixin
}
