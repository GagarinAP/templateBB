$(function () {
    window.app = {};

    app.User = Backbone.Model.extend({
        defaults : {
            name : 'empty'
        }
    });
    
    app.Users = Backbone.Collection.extend({        
        url: '/users'
    });

    app.viewUser = Backbone.View.extend({        
        model: new app.User(),        
        initialize: function() {
            this.template = _.template($('#Template').html());            
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    app.viewUsers = Backbone.View.extend({
        model: new app.Users(),
        el: $('#app'),
        initialize: function() {            
            this.model.fetch();
        },
        render: function() {
            var self = this;
            this.$el.html('');
            _.each(this.model.toArray(), function(model) {
                self.$el.append((new userView({model: name})).render().$el);
            },this);            
        }
    });

    (function(){
        //new app.Users();
        new app.viewUsers();
    })();
    
});