import { LightningElement } from 'lwc';

export default class Lifecycle extends LightningElement {
    connectedCallback(){
        console.log('connectedCallback');
    }
    renderedCallback(){
        console.log('renderedCallback');
    }
    disconnectedCallback(){
        console.log('disconnectedCallback');
    }
    renderedCallback(){
        console.log('renderedCallback');
}