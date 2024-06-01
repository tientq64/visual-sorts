import mixin from '../mixins/mixin'

export default {
	label: 'Pancake sort',

	methods: {
		async sort(N) {
			const { arr, n, marks, numbs, wait, swap } = this
			marks.rose[0] = N
			marks.amber = []
			if (N === 1) return
			let maxI = 0
			numbs.blue[0] = arr[maxI]
			for (let i = 0; i < N; i++) {
				marks.amber[0] = i
				if (arr[i] > arr[maxI]) {
					maxI = i
					numbs.blue[0] = arr[maxI]
				}
				await wait()
			}
			if (maxI !== 0) {
				await this.flip(maxI)
			}
			await this.flip(N - 1)
			await this.sort(N - 1)
		},

		async flip(i) {
			const { arr, n, marks, numbs, wait, swap } = this
			let start = 0
			while (start < i) {
				marks.amber[0] = start
				swap(start, i)
				await wait()
				start++
				i--
			}
		},

		async run() {
			await this.sort(this.n)
		}
	},

	mixins: [mixin]
}
