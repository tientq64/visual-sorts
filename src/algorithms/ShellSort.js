import mixin from '../mixins/mixin'

export default {
	label: 'Shell sort',

	methods: {
		async sort() {
			const { arr, n, marks, numbs, wait, swap } = this
			let gap = Math.floor(n / 2)
			while (gap > 0) {
				let i = gap
				while (i < n) {
					marks.rose[0] = i
					let j = i - gap
					while (j >= 0) {
						marks.amber[0] = j
						if (arr[j + gap] > arr[j]) break
						else {
							swap(j, j + gap)
						}
						j -= gap
						await wait()
					}
					i++
					await wait()
				}
				gap = Math.floor(gap / 2)
			}
		}
	},

	extends: mixin
}
