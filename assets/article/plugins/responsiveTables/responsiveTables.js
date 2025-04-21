ArticleEditor.add("plugin", "responsiveTables", {
	start: function () {
		this.app.addbar.add("responsiveTables", {
			title: "Responsive Table",
			icon: '<i class="fa fa-table"></i>',
			command: "responsiveTables.popup",
		})
	},
	popup: function () {
		var stack = this.app.popup.add("responsiveTables", {
			title: "Responsive Table",
			width: "400px",
			command: "addbar.popup",
			form: {
				columns: {
					label: "How many COLUMNS do you want to insert?",
					type: "select",
					options: {
                        1: "1",
						2: "2",
						3: "3",
						4: "4",
						5: "5",
						6: "6",
						7: "7",
						8: "8",
						9: "9",
						10: "10",
                        11: "11",
                        12: "12",
					},
				},
                rows: {
					label: "How many ROWS do you want to insert?",
					type: "select",
					options: {
                        1: "1",
						2: "2",
						3: "3",
						4: "4",
						5: "5",
						6: "6",
						7: "7",
						8: "8",
						9: "9",
						10: "10",
                        11: "11",
                        12: "12",
					},
				},
			},
			footer: {
				insert: {
					title: "Insert",
					command: "responsiveTables.insert",
					type: "primary",
				},
				cancel: { title: "Cancel", command: "popup.close" },
			},
		})

		stack.open({ focus: "responsiveTables" })
	},
	insert: function (stack) {
		var instance = this._buildInstance(stack)
	},
	_buildInstance: function (stack) {
		this.app.popup.close()

		const data = stack.getData()
		const columns = data.columns
        const rows = data.rows
		let responsiveTablesContent = `<div class="table-responsive">
                                        <table class="table">
                                        <tbody>`

		for (let z = 1; z <= rows; z++) {

			responsiveTablesContent += `<tr>`
			responsiveTablesContent += `<th scope="row" role="rowheader"></th>`
			
            for (let x = 1; x < columns; x++) {
                responsiveTablesContent += `<td></td>`
            }

            responsiveTablesContent += `</tr>`
		}

		responsiveTablesContent += `</tbody>
                                    </table>
                                </div> `

		this.app.editor.insertContent({
			html: responsiveTablesContent
		})
	}
})
