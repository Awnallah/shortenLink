import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
    Meteor.publish('links', function() {
        return Links.find({});
    });
});

// exexute when user visits a routel such as 'localhost:300/abcd'
function onRoute(req, res, next ){
	//find a matching link
	const link = Links.findOne({ token: req.params.token });
	//redirect user to long URL if link is found
	if (link){
		res.writeHead(307, {'Location':link.url});
		res.end();

	} else {
	//No link object => send user to front page
		next();
	}

}

const middleware = ConnectRoute(function(router) {
    router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);
