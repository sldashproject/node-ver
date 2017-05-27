
    var ActionButton = React.createClass({
        render: function() {
            return (
                    <button className="ActionButton" onClick={this.props.onAction}>
                        <span>{this.props.text}</span>
                    </button>
            );
        }
    });
    var APP = React.createClass({
        getInitialState: function() {
            return {count: this.props.initialCount};
        },
        addToCount: function(delta) {
            this.setState({count: this.state.count + delta})
        },
        componentWillMount : function() {
            console.log("componentWillMount");
        },
        render: function () {
            console.log('render')
            return (
                    <div>
                        <h3>Count: {this.state.count}</h3>
                        <ActionButton text="+1" onAction={this.addToCount.bind(this, 1)}></ActionButton>
                        <ActionButton text="-1" onAction={this.addToCount.bind(this, -1)}></ActionButton>
                    </div>
            )
        },
        componentDidMount : function() {
            console.log("componentDidMount");
        },
        componentWillUnmount : function(){
            console.log("componentWillUnmount");
        }
    });
    React.render(<APP initialCount={0}/>, document.getElementById('panel'));
    
    window.render = function() {
        React.render(   // mounting to panel
            <APP initialCount = {0} />, document.getElementById('panel')
        )
    }
    
    window.unmount = function(){
        React.unmountComponentAtNode(document.getElementById('panel'))
    }