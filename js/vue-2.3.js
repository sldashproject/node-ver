new Vue({
    el: '#vueApp',
    data: {
        configView: 1
    },
    ready: function() {
        // Load some content, run some initializing functions, or whatever.
        console.info('This component is ready for use!');
    },
    methods: {
        ViewPage: function (value) {
            this.configView = value;
            alert(this.configView);
        }
    }

});