var Blog = Backbone.Model.extend();

var Blogs = Backbone.Collection.extend({	
	url: '/api/blogs'
});

var BlogView = Backbone.View.extend({
	model: new Blog(),
	tagName: 'tr',
	initialize: function() {
		this.template = _.template($('.blogs-list-template').html());
	},	
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

var BlogsView = Backbone.View.extend({
	model: new Blogs(),
	el: $('#blist'),
	initialize: function() {		
		this.model.on('add', this.render, this);
		this.model.fetch();
	},
	render: function() {
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(blog) {
			self.$el.append((new BlogView({model: blog})).render().$el);
		},this);		
	}
});

var blogsView = new BlogsView();
