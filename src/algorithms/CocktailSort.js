import mixin from '../mixins/mixin'

export default {
	label: 'Cocktail sort',

	methods: {
		async sort() {
			const { arr, n, marks, numbs, wait, swap } = this
			let swapped = true
			let start = 0
			let end = n
			while (swapped) {
				swapped = false
				for (let i = start; i < end - 1; i++) {
					marks.amber[0] = i + 1
					if (arr[i] > arr[i + 1]) {
						swap(i, i + 1)
						swapped = true
					}
					await wait()
				}
				marks.rose[0] = end - 1
				if (!swapped) break
				swapped = false
				end--
				for (let i = end - 1; i >= start; i--) {
					marks.amber[0] = i
					if (arr[i] > arr[i + 1]) {
						swap(i, i + 1)
						swapped = true
					}
					await wait()
				}
				marks.rose[1] = start
				start++
			}
		}
	},

	mixins: [mixin]
}
