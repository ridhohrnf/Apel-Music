if (!Number.hasOwnProperty("currency"))
	Number.prototype.currency = function (decimal = 0) {
		const currency = new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			currencyDisplay: "symbol",
			minimumFractionDigits: decimal,
			maximumFractionDigits: decimal,
		});
		return currency.format(this).replace("Rp", "IDR");
	};
