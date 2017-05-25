new Vue({
    el: '#vueApp',
    data: {
        configView: 1,
        inquiryData: []
    },
    created: function() {
        // Load some content, run some initializing functions, or whatever.
        console.info('This component is ready for use!');

        this.getList().done(this.handleData);
    },
    methods: {
        ViewPage: function (value) {
            this.configView = value;
        },
        getList: function () {
            return $.ajax({
                url: 'https://dashboard-node-ver-sldashproject.c9users.io/getList',
                method: 'GET',
                dataType: 'json',
            });
        },
        handleData: function(data) {
            this.inquiryData = data;
        }
    }

});