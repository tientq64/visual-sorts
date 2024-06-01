<script setup>
import { range, shuffle } from 'lodash'

import BubbleSort from './algorithms/BubbleSort'
import CocktailSort from './algorithms/CocktailSort'
import CombSort from './algorithms/CombSort'
import CycleSort from './algorithms/CycleSort'
import HeapSort from './algorithms/HeapSort'
import InsertionSort from './algorithms/InsertionSort'
import MergeSort from './algorithms/MergeSort'
import PancakeSort from './algorithms/PancakeSort'
import PigeonHoleSort from './algorithms/PigeonHoleSort'
import QuickSort from './algorithms/QuickSort'
import RadixSort from './algorithms/RadixSort'
import SelectionSort from './algorithms/SelectionSort'
import ShellSort from './algorithms/ShellSort'

const initArr = shuffle(range(64))
const time = -1
const n = initArr.length
const isAnimate = time >= 100

const algorithms = [
	BubbleSort,
	InsertionSort,
	SelectionSort,
	CocktailSort,
	PancakeSort,
	CombSort,
	ShellSort,
	HeapSort,
	MergeSort,
	QuickSort,
	CycleSort,
	RadixSort,
	PigeonHoleSort
]

document.documentElement.classList.add(isAnimate ? 'animate-on' : 'animate-off')
if (isAnimate) {
	document.documentElement.style.setProperty('--time', `${time}ms`)
}
</script>

<template>
	<div
		class="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] auto-rows-[140px] gap-8 p-8 h-full"
	>
		<component
			v-for="(algorithm, index) in algorithms"
			:key="index"
			:is="algorithm"
			:initArr
			:n
			:time
		/>
	</div>
</template>
