$(function(){
	window.app = {};

	app.Blog = Backbone.Model.extend({
		urlRoot: '/api/users'
	});

	app.BlogView = Backbone.View.extend({
		el: $("#app"),
		
		model: new app.Blog({id: '1'}),

		template: _.template($('#template').html()),		

		initialize: function() {			
			this.listenTo(this.model, 'change', this.render);
			this.model.fetch({
			    success: function (model) {
			        console.log(JSON.stringify(model));
			    }
			});								
		},

		render: function() {			
			console.log(this.model);
					
			this.$el.html(this.template(this.model.attributes[0]));
			
		}
	});

	
	(function(){
		new app.BlogView();			
	})();
	
});

