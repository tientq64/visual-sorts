import mixin from '../mixins/mixin'

export default {
	label: 'Selection sort',

	methods: {
		async sort() {
			const { arr, n, marks, numbs, wait, swap } = this
			let minI
			for (let i = 0; i < n - 1; i++) {
				minI = i
				marks.blue[0] = minI
				for (let j = i + 1; j < n; j++) {
					marks.amber[0] = j
					if (arr[j] < arr[minI]) {
						minI = j
						marks.blue[0] = minI
					}
					await wait()
				}
				swap(minI, i)
				marks.rose[0] = i
			}
		}
	},

	mixins: [mixin]
}
