
rc.Services = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        {/* pass in components for content modules as properties */} 
        return (    
    <div className="content-wrapper">    
        <rc.MainContent id={"servicespage"} midComponent={<rc.ServicesComp />} sideComponent={<rc.FormComponent />} />        
    </div>
        );
    }
});