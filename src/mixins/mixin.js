import { h } from 'vue'
import Sorter from '../components/Sorter.vue'

export default {
	props: ['initArr', 'n', 'time'],

	data() {
		return {
			isSorted: false,
			arr: [...this.initArr],
			marks: {
				rose: [],
				amber: [],
				blue: []
			},
			numbs: {
				rose: [],
				amber: [],
				blue: []
			}
		}
	},

	methods: {
		swap(i, j) {
			const temp = this.arr[i]
			this.arr[i] = this.arr[j]
			this.arr[j] = temp
		},

		async wait() {
			return new Promise((resolve) => {
				if (this.time === -1) {
					requestAnimationFrame(resolve)
				} else {
					setTimeout(resolve, this.time)
				}
			})
		}
	},

	render() {
		return h(Sorter, {
			arr: this.arr,
			isSorted: this.isSorted,
			marks: this.marks,
			numbs: this.numbs,
			label: this.$options.label
		})
	},

	async created() {
		const run = this.run || this.sort
		await run()
		this.isSorted = true
	}
}
