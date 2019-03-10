Vue.component('textfield', {
	props: [ 'title', 'value', ],
	template: `
        <div>
            <input type="text"
                    :placeholder="title"
                    :value="value"
                    @input="$emit('input', $event.target.value)" >
        </div>
	`,
});
