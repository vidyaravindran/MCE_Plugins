(function() {
	tinymce.create('tinymce.plugins.Images', {
		init : function(ed, url) {
			ed.addCommand('mceImages', function() {
				ed.windowManager.open({
					file : url + '/images.htm',
					width : 700,
					height : 550,
					inline : 0
				}, {
					plugin_url : url
				});
			});

			ed.addButton('images', {
				title : 'images.desc',
				cmd : 'mceImages',
				image : url + '/images/icon.gif'
			});

			ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('images', n.nodeName == 'IMG');
			});
		},

		getInfo : function() {
			return {
				longname : 'Images',
				author : 'Antonov Andrey',
				authorurl : 'http://dustweb.ru/',
				infourl : 'http://dustweb.ru/log/projects/tinymce_images/',
				version : "1.0"
			};
		}
	});

	tinymce.PluginManager.add('images', tinymce.plugins.Images);
})();