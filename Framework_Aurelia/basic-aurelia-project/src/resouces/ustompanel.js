import { customElement, useView, bindable } from 'aurelia-framework';

//nombre del elemento en la vista <custom-panel></custom-panel>
@customElement('custom-panel')
    //vista que vamos a utilizar, por si queremos cambiar la ruta
@useView("resouces/test-element.html")
export class CustomPanel {
    //propiedad type para hacer databinding
    @bindable type;
    //propiedad title para hacer databinding
    @bindable title;
    //propiedad body para hacer databinding
    @bindable body;

    //si dispará cada que el valor de la propiedad type cambia, contiene el valor anterior y el nuevo
    typeChanged(oldValue, newValue) {
        console.log("Old: " + oldValue, "New: " + newValue);
    }

    //si dispará cada que el valor de la propiedad title cambia, contiene el valor anterior y el nuevo
    titleChanged(oldValue, newValue) {
        console.log("title changed");
    }

    //si dispará cada que el valor de la propiedad body cambia, contiene el valor anterior y el nuevo
    bodyChanged(oldValue, newValue) {
        console.log("body changed");
    }
}