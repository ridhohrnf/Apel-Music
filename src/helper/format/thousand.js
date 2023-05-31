if (!Number.hasOwnProperty("thousand"))
	Number.prototype.thousand = function (decimal = 0) {
		const thousand = new Intl.NumberFormat("id-ID");
		return thousand.format(this);
	};
