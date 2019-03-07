Vue.component('radio-group', {
	props: ['title', 'name', 'value', 'options', ],
	template:
			`<div>
				<strong>Select {{ title }}:</strong>
				<label v-for="optionName, optionValue in options" >
					<input type="radio"
                            :name="name"
                            :value="optionValue"
                            :checked="value == optionValue"
                            @input="$emit('input', $event.target.value)"
                    >{{ optionName }}
				</label>
			</div>`,
});
