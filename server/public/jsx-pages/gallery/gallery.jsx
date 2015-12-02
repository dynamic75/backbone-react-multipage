
rc.Gallery = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        //console.log(this.constructor.displayName+' render()');
        {/* pass in components for content modules as properties */} 
        return (    
    <div className="content-wrapper">    
        <rc.MainContent id={"gallerypage"} midComponent={<rc.GalleryComp />} sideComponent={<rc.FormComponent />} />
    </div>
        );
    }
});