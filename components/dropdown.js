Vue.component('dropdown', {
	props: [ 'name', 'title', 'options', 'value', ],
	template: `
		<div>
			<select :name="this.name" @input="$emit('input', $event.target.value)" >
				<option selected disabled value="" >Select {{ title }}</option>
				<option v-for="optionName, optionValue in options"
						:value="optionValue"
						:selected="value == optionValue"
						v-text="optionName" ></option>
			</select>
		</div>
	`,
});
