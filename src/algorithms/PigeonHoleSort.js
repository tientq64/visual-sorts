import mixin from '../mixins/mixin'

export default {
	label: 'Pigeon hole sort',

	methods: {
		async sort() {
			const { arr, n, marks, numbs, wait, swap } = this
			let min = arr[0]
			let max = arr[0]
			marks.rose[0] = 0
			marks.blue[0] = 0
			for (let i = 0; i < n; i++) {
				marks.amber[0] = i
				if (arr[i] < min) {
					min = arr[i]
					marks.rose[0] = i
				}
				if (arr[i] > max) {
					max = arr[i]
					marks.blue[0] = i
				}
				await wait()
			}
			marks.rose = []
			marks.blue = []
			const range = max - min + 1
			const holes = Array(n).fill(0)
			for (let i = 0; i < n; i++) {
				marks.amber[0] = i
				holes[arr[i] - min]++
				await wait()
			}
			marks.amber = []
			let i = 0
			for (let j = 0; j < range; j++) {
				while (holes[j] > 0) {
					marks.rose[0] = i
					arr[i] = j + min
					holes[j]--
					i++
					await wait()
				}
			}
		}
	},

	extends: mixin
}
