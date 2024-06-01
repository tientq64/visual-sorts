import mixin from '../mixins/mixin'

export default {
	label: 'Insertion sort',

	methods: {
		async sort() {
			const { arr, n, marks, numbs, wait, swap } = this
			for (let i = 1; i < n; i++) {
				let j = i - 1
				marks.rose[0] = j + 1
				while (j >= 0 && arr[j] > arr[j + 1]) {
					marks.amber[0] = j
					swap(j, j + 1)
					await wait()
					j--
				}
			}
		}
	},

	mixins: [mixin]
}
