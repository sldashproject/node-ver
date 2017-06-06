
    // var ActionButton = React.createClass({
    //     render: function() {
    //         return (
    //                 <button className="ActionButton" onClick={this.props.onAction}>
    //                     <span>{this.props.text}</span>
    //                 </button>
    //         );
    //     }
    // });
    // var APP = React.createClass({
    //     getInitialState: function() {
    //         return {count: this.props.initialCount};
    //     },
    //     addToCount: function(delta) {
    //         this.setState({count: this.state.count + delta})
    //     },
    //     componentWillMount : function() {
    //         console.log("componentWillMount");
    //     },
    //     render: function () {
    //         console.log('render')
    //         return (
    //                 <div>
    //                     <h3>Count: {this.state.count}</h3>
    //                     <ActionButton text="+1" onAction={this.addToCount.bind(this, 1)}></ActionButton>
    //                     <ActionButton text="-1" onAction={this.addToCount.bind(this, -1)}></ActionButton>
    //                 </div>
    //         )
    //     },
    //     componentDidMount : function() {
    //         console.log("componentDidMount");
    //     },
    //     componentWillUnmount : function(){
    //         console.log("componentWillUnmount");
    //     }
    // });
    // React.render(<APP initialCount={0}/>, document.getElementById('panel'));
    
    // window.render = function() {
    //     React.render(   // mounting to panel
    //         <APP initialCount = {0} />, document.getElementById('panel')
    //     )
    // }
    
    // window.unmount = function(){
    //     React.unmountComponentAtNode(document.getElementById('panel'))
    // }
    
    var ActionButton = React.createClass({
        render: function() {
            return (
                <button className="btn btn-success" onClick={this.props.onAction}>{this.props.text}</button>
            );
        }
    });
    
    var FormGroup = React.createClass({
        addData: function() {
            var userName = $('#naming').val();
            var email = $('#emails').val();
            console.log("updateUser userName : "+userName);
            console.log("updateUser email : "+email);
            
            var input_data = {name: userName, email: email};
            $.ajax({
                url: 'https://dashboard-node-ver-sldashproject.c9users.io/addList',
                method: 'POST',
                dataType: 'text',
                data: input_data,
                done: function(data) {
                    console.log(data);
                }
            });
        },
        render: function() {
            return (
                <form id="db-form" data-parsley-validate className="form-horizontal form-label-left">
                    <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="name">Name <span className="required">*</span>
                        </label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <input type="text" required="required" id="naming" name="name" className="form-control col-md-7 col-xs-12" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="email">Email <span className="required">*</span>
                        </label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <input type="text" name="email" id="emails" required="required" className="form-control col-md-7 col-xs-12" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12 col-sm-12 col-xs-12" style={{textAlign: 'center'}}>
						    <button className="btn btn-primary" type="reset">Reset</button>
                            <ActionButton text="Add" onAction={this.addData.bind()}></ActionButton>
                        </div>
                    </div>
                </form>
            )
        }
    });
    
    getList().done(getData);
   
    function getList()
    {
        console.log("getList");
        return $.ajax({
            url: 'https://dashboard-node-ver-sldashproject.c9users.io/getList',
            method: 'GET',
            dataType: 'json'
        });
    }
    
    var inquiryData = [];
    function getData(data)
    {
        inquiryData = data;
        React.render(<ListTable data={inquiryData}/>, document.getElementById('panel2'));
    }

    var ListTable = React.createClass({
        componentWillMount: function() {
            console.log("componentWillMount");
            console.log(this.props.data);
        },
        modifying: function(index, id, name, email) {
            console.log("Modify: "+index+", name: "+name+", email: "+email+", id: "+id);
            let realIndex = index-1;
            var checkModify = $('#modify--'+realIndex);
            if(checkModify.hasClass('btn-warning')) {
                console.log("have btn-warning");
                $('#name--'+realIndex).html("<input type='text' id='mname-"+realIndex+"' value='"+name+"'/>");
                $('#email--'+realIndex).html("<input type='text' id='memail-"+realIndex+"' value='"+email+"'/>");
                $('#modify--'+realIndex).addClass('btn-primary').removeClass('btn-warning');
            }
            else {
                var nameValue = $('#mname-'+realIndex).val();
                var emailValue = $('#memail-'+realIndex).val();
                console.log(nameValue);
                $('#name--'+realIndex).html(nameValue);
                $('#email--'+realIndex).html(emailValue);
                $('#modify--'+realIndex).addClass('btn-warning').removeClass('btn-primary');
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
        deleting: function(id) {
            console.log("Delete: "+id);
            var getRow = $('#'+id);
            getRow.remove();
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
        },
        render: function() {
            var realData = [];
            var count = 1;
            var nameId = 'name--';
            var emailId = 'email--';
            var modifyId = 'modify--';
            var deleteId = 'delete--';
            this.props.data.forEach(function(item) {
                console.log("id: "+item.id+",name: "+item.name+",email: "+item.email);
                let naming = nameId+count;
                let emailing = emailId+count;
                let modifyNaming = modifyId+count;
                let deleteNaming = deleteId+count;
                realData.push(
                    <tr key={item.id} id={item.id}>
                        <td style={{paddingTop:'17px'}}>{count++}</td>
                        <td style={{paddingTop:'17px'}} id={naming}>{item.name}</td>
                        <td style={{paddingTop:'17px'}} id={emailing}>{item.email}</td>
                        <td><button className="btn btn-warning" type="button" title="Modify" id={modifyNaming} onClick={this.modifying.bind(this, count, item.id, item.name, item.email)}><i className="fa fa-wrench"></i></button></td>
                        <td><button className="btn btn-danger" type="button" title="Delete" id={deleteNaming} onClick={this.deleting.bind(this, item.id)}><i className="fa fa-trash"></i></button></td>
                    </tr>
                )
            }.bind(this));
            return (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Modify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {realData}
                    </tbody>
                </table>
            )
        }
    });
    
    React.render(<FormGroup/>, document.getElementById('panel'));

    window.render = function(data) {
        React.render(   // mounting to panel
            <FormGroup/>, document.getElementById('panel')
        );
        React.render(<ListTable/>, document.getElementById('panel2'));
    }
    
    window.unmount = function(){
        React.unmountComponentAtNode(document.getElementById('panel'));
        React.unmountComponentAtNode(document.getElementById('panel2'));
    }