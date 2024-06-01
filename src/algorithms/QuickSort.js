import mixin from '../mixins/mixin'

export default {
	label: 'Quick sort',

	methods: {
		async sort(low, high) {
			const { arr, n, marks, numbs, wait, swap } = this
			if (low < high) {
				const pi = await this.partition(low, high)
				marks.rose[0] = pi
				await this.sort(low, pi - 1)
				await this.sort(pi + 1, high)
			}
		},

		async partition(low, high) {
			const { arr, n, marks, numbs, wait, swap } = this
			let i = low - 1
			for (let j = low; j <= high - 1; j++) {
				if (arr[j] < arr[high]) {
					marks.amber[0] = j
					i++
					swap(i, j)
					await wait()
				}
			}
			marks.amber[1] = i + 1
			swap(i + 1, high)
			return i + 1
		},

		async run() {
			await this.sort(0, this.n - 1)
		}
	},

	mixins: [mixin]
}
