Vue.component('radio-group', {
	props: ['name', 'value', 'options', ],
	template:
			`<div>
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
