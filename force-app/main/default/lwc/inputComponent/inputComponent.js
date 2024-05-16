import { LightningElement } from 'lwc';

export default class InputComponent extends LightningElement {
    value = ['option1'];

    get options() {
        return [
            { label: 'Batch1', value: 'option1' },
            { label: 'Btach2', value: 'option2' },
        ];
    }

    get selectedValues() {
        return this.value.join(',');
    }

    handleChange(e) {
        this.value = e.detail.value;
    }
    //Radio button
    value = '';

    get options() {
        return [
            { label: 'Tooth', value: 'option1' },
            { label: 'Paste', value: 'option2' },
        ];
    }
    //picklist
    value = 'inProgress';

    get options() {
        return [
            { label: 'Start', value: 'start' },
            { label: 'in progress', value: 'inProgress' },
            { label: 'Completed', value: 'completed' },
        ];

    }
    ampm = false;
}