function Card(id, name) {
	var self = this;

	this.id = id;
	this.name = name;
	this.element = generateTemplate('card-template', { description: this.name }, 'li');

	this.element.querySelector('.card').addEventListener('click', function (event) {
		event.stopPropagation();

		if (event.target.classList.contains('btn-delete')) {
			self.removeCard();
		}
	});
}

Card.prototype = {
	removeCard: function () {
		var self = this;

		fetch(baseUrl + '/card/' + self.id, { method: 'DELETE', headers: myHeaders })
			.then(function (resp) {
				return resp
			})
			.then(function (resp) {
				self.element.parentNode.removeChild(self.element);
			})
	}
}