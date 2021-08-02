module.exports = {
    beforeSend: function(req, res, next) {
        console.log(req.prerender.content)
      	if(!req.prerender.content) {
      		  return next();
      	}
        req.prerender.content = req.prerender.content.toString().replace(/(<[\s]*head[^>]*>)/i, '$1<base href="'+req.prerender.url+'">'); 
        next();
    }
};
