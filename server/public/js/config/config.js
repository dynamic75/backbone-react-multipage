var assetsDirectory = '';


try {
    assetsDirectory = FILES_ROOT + 'ipad/';
} catch (e) {
    assetsDirectory = '';
}

var webRoot = DEEPLINK_DIR;
var MyInput = PlaceholderShim.Input;
var MyTextarea = PlaceholderShim.Textarea;

var SiteConfig = {

	quickView: {
        catId: "this is the cat id",
        position: [null, 10, 658, 603],
        bgColor: "#000000"
    },

    //defaultPage: 'home',
    assetsDirectory: assetsDirectory,
    webRoot: DEEPLINK_DIR

};
