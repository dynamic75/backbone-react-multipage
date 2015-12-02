rc.Form.Select = React.createClass({
    getInitialState: function () {
        return {            
            value: [this.props.children[0].props.value]
        };
    },

    componentWillMount: function () {
        this.props.attachToForm(this);
    },

    componentWillUnmount: function () {
        if ( this.props ) {
            if ( this.props.detachFromForm ) {
                this.props.detachFromForm( this );
            }
        }
    },

    handleChange: function (event) {
        var selectedValue = event.currentTarget.value;
        this.setState( {value: [selectedValue]} );        
    },

    render: function () {
        var className = '' || this.props.cl;
        var errorMessage = this.state.errorMessage || "";
        var errorClass = this.state.errorClass || "";

        return (
    <div>        
        <select className={className +" "+ errorClass} name={this.props.name} onChange={this.handleChange} value={this.state.value}>
            {this.props.children}   
        </select>
        {/*{this.props.required ? <span className="error">{errorMessage}</span> : null }*/}
    </div>
        );
    }
});

