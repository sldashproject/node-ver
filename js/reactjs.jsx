
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
    
    var FormGroup = React.createClass({
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
                            <button className="btn btn-success">Add</button>
                        </div>
                    </div>
                </form>
            )
        }
    });
    
    var ListTable = React.createClass({
        render: function() {
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
                        <tr>
                            <td style={{paddingTop: '17px'}}></td>
                            <td style={{paddingTop: '17px'}}></td>
                            <td style={{paddingTop: '17px'}}></td>
                            <td><button className="btn btn-warning" type="button" title="Modify"><i className="fa fa-wrench"></i></button></td>
                            <td><button className="btn btn-danger" type="button" title="Delete"><i className="fa fa-trash"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            )
        }
    });
    
    React.render(<FormGroup/>, document.getElementById('panel'));
    React.render(<ListTable/>, document.getElementById('panel2'));
    
    window.render = function() {
        React.render(   // mounting to panel
            <FormGroup/>, document.getElementById('panel')
        );
        React.render(<ListTable/>, document.getElementById('panel2'));
    }
    
    window.unmount = function(){
        React.unmountComponentAtNode(document.getElementById('panel'));
        React.unmountComponentAtNode(document.getElementById('panel2'));
    }