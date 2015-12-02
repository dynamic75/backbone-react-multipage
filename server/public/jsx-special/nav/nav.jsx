rc.Nav = React.createClass({
	getInitialState:function(){
        return {
        	currentPage : ''
        }
    },
	componentDidMount : function(){
		var self= this;
	    grandCentral.off('pagechange').on('pagechange', function(data){
			self.setState({
				currentPage: data.currentPage
			});
	    });
	},
	getClassNameWithActive : function(arg){
		var className = 'navitem';
		if (arg == this.state.currentPage) {
			className = className + ' active';
		}
		return className;
	},
    render:function(){
        return (

<div className="shop-nav-wrapper clearfix">
	<div className="col brand-category">
		<a href="#/home" data-track="backtohome"><img src={assetsDirectory+"images/custom-window-logo.jpg"} alt="CUSTOM WINDOW FASHIONS" /></a>
	</div>
	<div className="col">
		<a href="#/home" data-track="backtohome" className="home-link"><h1><img src={assetsDirectory+"images/shop-at-home-logo.png"} alt="MACY'S SHOP AT HOME" /></h1></a>
	</div>
	<div className="col">
		<nav>
			<div className="row">
			<a className={this.getClassNameWithActive('productoverview')}  href="#/productoverview" data-track="nav.productoverview">Product Overview</a>
			<a className={this.getClassNameWithActive('offers')}  href="#/offers" data-track="nav.offers">Offers</a>
			<a className={this.getClassNameWithActive('services')}  href="#/services" data-track="nav.services">Services</a>
			<a className={this.getClassNameWithActive('blinds')}  href="#/blinds" data-track="nav.blinds">Blinds</a>
			<a className={this.getClassNameWithActive('shades')}  href="#/shades" data-track="nav.shades">Shades</a>
			</div>
			<div className="row">
			<a className={this.getClassNameWithActive('shutters')}  href="#/shutters" data-track="nav.shutters">Shutters</a>
			<a className={this.getClassNameWithActive('motorization')}  href="#/motorization" data-track="nav.motorization">Motorization</a>
			<a className={this.getClassNameWithActive('specialtyshapes')}  href="#/specialtyshapes" data-track="nav.specialtyshapes">Specialty Shapes</a>
			<a className={this.getClassNameWithActive('drapery')}  href="#/drapery" data-track="nav.drapery">Drapery</a>
			</div>
		</nav>
	</div>
</div>

        );
    }
});
	