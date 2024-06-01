<script>
export default {
	props: ['label', 'arr', 'isSorted', 'marks', 'numbs']
}
</script>

<template>
	<div class="flex flex-col text-center">
		<TransitionGroup name="bar" class="flex-1 flex items-end" tag="div">
			<div
				v-for="(int, index) in arr"
				:key="int"
				class="flex-1 bg-white/50"
				:class="{
					'!bg-rose-500':
						!isSorted &&
						(marks.rose.includes(index) ||
							numbs.rose.includes(int)),
					'!bg-amber-500':
						!isSorted &&
						(marks.amber.includes(index) ||
							numbs.amber.includes(int)),
					'!bg-blue-500':
						!isSorted &&
						(marks.blue.includes(index) ||
							numbs.blue.includes(int)),
					'!bg-green-500': isSorted
				}"
				:style="{ height: `${((int + 1) / arr.length) * 100}%` }"
			/>
		</TransitionGroup>
		<div>{{ label }}</div>
	</div>
</template>
