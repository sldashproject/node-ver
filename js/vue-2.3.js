new Vue({
    el: '#vueApp',
    data: {
        configView: 1,
        inquiryData: []
    },
    created: function() {
        // Load some content, run some initializing functions, or whatever.
        console.info('This component is ready for use!');
        this.getList().done(this.getData);
    },
    methods: {
        ViewPage: function (value) {
            this.configView = value;
        },
        getList: function () {
            return $.ajax({
                url: 'https://dashboard-node-ver-sldashproject.c9users.io/getList',
                method: 'GET',
                dataType: 'json'
            });
        },
        getData: function(data) {
            this.inquiryData = data;
        },
        addList: function() {
            var input_data = {name: $('#naming').val(), email: $('#emails').val() };
            return $.ajax({
                url: 'https://dashboard-node-ver-sldashproject.c9users.io/addList',
                method: 'POST',
                data: input_data,
                dataType: 'text',
                done: function(data) {
                    console.log(data);
                }
            });
        },
        Modifying: function(index, id, name, email) {
            var checkModify = $('#modify--'+index);
            if(checkModify.hasClass('btn-warning')) {
                $('#name--'+index).html("<input type='text' id='mname-"+index+"' value='"+name+"'/>");
                $('#email--'+index).html("<input type='text' id='memail-"+index+"' value='"+email+"'/>");
                $('#modify--'+index).addClass('btn-primary').removeClass('btn-warning');
            }
            else {
                var nameValue = $('#mname-'+index).val();
                var emailValue = $('#memail-'+index).val();
                console.log(nameValue);
                $('#name--'+index).html(nameValue);
                $('#email--'+index).html(emailValue);
                $('#modify--'+index).addClass('btn-warning').removeClass('btn-primary');
                var input_data = {name: nameValue, email: emailValue, id: id };
                return $.ajax({
                    url: 'https://dashboard-node-ver-sldashproject.c9users.io/updateList',
                    method: 'POST',
                    data: input_data,
                    dataType: 'text',
                    done: function(data) {
                        console.log(data);
                    }
                });
            }
        },
        Deleting: function(index, id) {
            console.log(index+":"+id);
            this.inquiryData.splice(index);
            var input_data = {id: id};
            return $.ajax({
                url: 'https://dashboard-node-ver-sldashproject.c9users.io/deleteList',
                method: 'POST',
                data: input_data,
                dataType: 'text',
                done: function(data) {
                    console.log(data);
                }
            });
        }
    }

});