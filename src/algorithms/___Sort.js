import mixin from '../mixins/mixin'

export default {
	label: '___ sort',

	methods: {
		async sort() {
			const { arr, n, marks, numbs, wait, swap } = this
			for (let i = 0; i < n - 1; i++) {}
		},

		async run() {
			await this.sort()
		}
	},

	extends: mixin
}
