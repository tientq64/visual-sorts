import mixin from '../mixins/mixin'

export default {
	label: 'Radix sort',

	methods: {
		async sort() {
			const { arr, n, marks, numbs, wait, swap } = this
			const max = await this.getMax()
			for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
				await this.countSort(exp)
			}
		},

		async countSort(exp) {
			const { arr, n, marks, numbs, wait, swap } = this
			const output = Array(n).fill(0)
			const count = Array(10).fill(0)
			for (let i = 0; i < n; i++) {
				marks.amber[0] = i
				count[Math.floor(arr[i] / exp) % 10]++
				await wait()
			}
			for (let i = 1; i < 10; i++) {
				count[i] += count[i - 1]
			}
			for (let i = n - 1; i >= 0; i--) {
				marks.amber[0] = i
				output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i]
				count[Math.floor(arr[i] / exp) % 10]--
				await wait()
			}
			for (let i = 0; i < n; i++) {
				marks.amber[0] = i
				arr[i] = output[i]
				await wait()
			}
		},

		async getMax() {
			const { arr, n, marks, numbs, wait, swap } = this
			let max = arr[0]
			marks.blue[0] = 0
			for (let i = 1; i < n; i++) {
				marks.amber[0] = i
				if (arr[i] > max) {
					marks.blue[0] = i
					max = arr[i]
				}
				await wait()
			}
			marks.blue = []
			marks.amber = []
			return max
		}
	},

	extends: mixin
}
