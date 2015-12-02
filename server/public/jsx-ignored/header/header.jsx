
rc.Header = React.createClass({
    render:function(){
        return (

        	React.DOM.ul({ className: 'sh-header clearfix'},
        		React.DOM.li(null, React.DOM.a({href: '#', className: 'giftguide'}, 'the gift guide') ),
        		React.DOM.li(null, React.DOM.a({href: '#'}, 'whishlist') ),
				React.DOM.li(null, React.DOM.a({href: '#'}, 'deals & promotions') ),
				React.DOM.li(null, React.DOM.a({href: '#'}, 'gift cards') ),
				React.DOM.li(null, React.DOM.a({href: '#'}, 'wedding registry') )
        	)

        );
    }
});
