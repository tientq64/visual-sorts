import mixin from '../mixins/mixin'

export default {
	label: 'Heap sort',

	methods: {
		async sort() {
			const { arr, n, marks, numbs, wait, swap } = this
			for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
				marks.amber[0] = i
				await this.heapify(n, i)
			}
			for (let i = n - 1; i > 0; i--) {
				marks.rose[0] = i
				swap(0, i)
				await this.heapify(i, 0)
			}
		},

		async heapify(N, i) {
			const { arr, n, marks, numbs, wait, swap } = this
			let largest = i
			let l = 2 * i + 1
			let r = 2 * i + 2
			if (l < N && arr[l] > arr[largest]) {
				largest = l
			}
			if (r < N && arr[r] > arr[largest]) {
				largest = r
			}
			await wait()
			if (largest !== i) {
				marks.amber[0] = largest
				swap(i, largest)
				await this.heapify(N, largest)
			}
		}
	},

	extends: mixin
}
