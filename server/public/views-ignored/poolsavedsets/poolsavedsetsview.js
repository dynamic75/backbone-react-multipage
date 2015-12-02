
var PoolsavedsetsView = Backbone.View.extend({

    initialize: function() {
        console.log('poolsavedsetsView initialize()');
    },


    render : function( cssselector ) {
        console.log('poolsavedsetsView render()');

        //  pick up the model that this view renders from
        //   the model in this case is app.status which is derived from the URL
        var category = app.status.currentFragsArray[0];
        var config = SiteConfig.dressshop[category];
        var filter = app.status.currentFragsArray[1];


        // set the $el dynamically
        this.$el = $( cssselector );

        // render the initial structure
        // serves double purpose to wipe out old buttons
        this.$el.html( htmlpartials.poolsavedsets );


        // exit outta here if there are no filters
        if ( !config.filters ) return;

        console.log('building filter buttons');



        /***********************************************/
        /*            RENDER OUT THIS VIEW             */
        /***********************************************/



        // render out the filter buttons according to the config
        // filter button should look something like this
        // <div class="btn btn-all selected-btn" filter="all" >ALL</div>
        var self = this;
        _.each(config.filters,  function(val, i){
            var jObj = $('<div class="btn">' + val.label + '</div>');
            jObj.addClass( val.cssclass );
            // add in the filtername as a data attribute in case of click
            jObj.attr( 'filter', val.key );

            // add a 'selected' highlight class or a click handler
            if (val.key == filter) {
                jObj.addClass( 'selected-btn' );
            } else {
                /***********************************************/
                /*            SETUP THE CONTROLLER             */
                /***********************************************/
                jObj.click(function(){
                    window.location.replace('#/dressshop/'+category+'/'+$(this).attr('filter'));
                });
            }
            // finally append it to the dom
            self.$el.find('.buttons').append(jObj);
        });

    }

});
