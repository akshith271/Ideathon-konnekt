class Slider {
    element;
    currentMin;
    currentMax;
    constructor(selector, options) {
        this.element = $(selector);
        const { min, max, values } = options;
        const _self = this;
        this.currentMin = values[0];
        this.currentMax = values[1];
        this.element.slider({
            range: true,
            min: min,
            max: max,
            values: values,
            slide: function (event, ui) {
                // $( "#amount" ).val( "Rs " + ui.values[ 0 ] + " - Rs " + ui.values[ 1 ] );
                _self.currentMin = ui.values[0];
                _self.currentMax = ui.values[1];
                // _self.onSlide((callBack) => callBack(ui.values[0], ui.values[1]));
                // Function.call(_self)
                if (_self.callBack && _self.callBack instanceof Function)
                    _self.callBack(ui.values[0], ui.values[1]);
            },
        });
    }
    onSlide(func) {
        this.callBack = func;
    }

    getMin() {
        return this.currentMin;
    }
    getMax() {
        return this.currentMax;
    }
}

export default Slider;
