rc.Form.Option = React.createClass({
    
    render: function () {
        
        return (
            <option value={this.props.value}>{this.props.txt}</option>
        );
    }
});
