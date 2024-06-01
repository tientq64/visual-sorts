import mixin from '../mixins/mixin'

export default {
	label: 'Bubble sort',

	methods: {
		async sort() {
			const { arr, n, marks, numbs, wait, swap } = this
			for (let i = 0; i < n - 1; i++) {
				marks.rose[0] = n - i
				let swapped = false
				for (let j = 0; j < n - i - 1; j++) {
					marks.amber[0] = j + 1
					if (arr[j] > arr[j + 1]) {
						swap(j, j + 1)
						swapped = true
					}
					await wait()
				}
				if (!swapped) break
			}
		}
	},

	extends: mixin
}
