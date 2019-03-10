Vue.component('multiple-choice', {
	props: [ 'options', 'value', ],
	data() {
		return {
			checkedList: this.value,
		}
	},
	template: `
		<div>
			<label v-for="optionName, optionValue in options" >
		        <input type="checkbox"
		        		:value="optionValue"
		        		@change="$emit('input', checkedList)"
		        		v-model="checkedList" >{{ optionName }}
		    </label>
		</div>
	`,
});
