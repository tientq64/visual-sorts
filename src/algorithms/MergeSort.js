import mixin from '../mixins/mixin'

export default {
	label: 'Merge sort',

	methods: {
		async sort(l, r) {
			const { arr, n, marks, numbs, wait, swap } = this
			if (l >= r) return
			const mid = l + Math.floor((r - l) / 2)
			await this.sort(l, mid)
			await this.sort(mid + 1, r)
			await this.merge(l, mid, r)
		},

		async merge(l, mid, r) {
			const { arr, n, marks, numbs, wait, swap } = this
			const n1 = mid - l + 1
			const n2 = r - mid
			const L = Array(n1)
			const R = Array(n2)
			for (let i = 0; i < n1; i++) {
				L[i] = arr[l + i]
			}
			for (let j = 0; j < n2; j++) {
				R[j] = arr[mid + 1 + j]
			}
			let i = 0
			let j = 0
			let k = l
			marks.rose = []
			while (i < n1 && j < n2) {
				marks.amber[0] = k
				if (L[i] <= R[j]) {
					arr[k] = L[i]
					i++
				} else {
					arr[k] = R[j]
					j++
				}
				k++
				await wait()
			}
			while (i < n1) {
				marks.amber[0] = k
				arr[k] = L[i]
				i++
				k++
				await wait()
			}
			while (j < n2) {
				marks.amber[0] = k
				arr[k] = R[j]
				j++
				k++
				await wait()
			}
		},

		async run() {
			await this.sort(0, this.n - 1)
		}
	},

	extends: mixin
}
