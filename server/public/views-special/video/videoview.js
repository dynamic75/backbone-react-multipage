

var VideoView = Backbone.View.extend({

    initialize: function() {
        // set controller for the video view
        var self = this;
    },

    render: function( cssselector ) {
        // on desktop this renders a still image
        // on tablet this embeds the video which pauses on the first frame
        var self = this;
        this.$el = $( cssselector );
        this.$el.html( htmlpartials.video );
    },

    // wipe out the video player and rebuild it
    buildVideo:function( videoid ){
        // rebuild the video player every time
        // jam in the brightcove object with new video id
        $("#videoAI").html('<object id="myExperience' + videoid + '" class="BrightcoveExperience">' +
            '<param name="wmode" value="transparent" />' +
            '<param name="bgcolor" value="#FFFFFF" />' +
            '<param name="width" value="628" />' +
            '<param name="height" value="400" />' +
            '<param name="playerID" value="1826416110001" />' +
            '<param name="playerKey" value="AQ~~,AAABUzm-8EE~,juVXQaEV_xDmmCAse2IGwptoP0ZcbMqR" />' +
            '<param name="isVid" value="true" />' +
            '<param name="isUI" value="true" />' +
            '<param name="forceHTML" value="true" />' +
            '<param name="dynamicStreaming" value="true" />' +
            '<param name="@videoPlayer" value="' + videoid + '" /></object>'


        );
        // this is the brightcove code to run the player
        setTimeout(function() {
            brightcove.createExperiences();
        }, 100);

    },

    close: function() {
        $("#videoAI").empty();
    }

});