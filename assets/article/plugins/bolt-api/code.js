document.addEventListener('DOMContentLoaded', (e) => {
    async function getContetypesData() {
        const pagesAmount = 10;
		const pageSize = 200;

        if (
            localStorage.getItem('contentTypePeopleData') === null &&
            localStorage.getItem('alreadyGettingPeople') === null
        ) {
            localStorage.setItem('alreadyGettingPeople', true);
            console.log('GettingPeople...............')
            let leaderPosition = 0;
			let peopleItems = {};
			let peopleSelectOptions = {};

			for (let i = 1; i <= pagesAmount; i++) {
				let apiResponse = await fetch(
					`${window.location.origin}/api/contents?page=${i}&contentType=people&status=published&pageSize=${pageSize}`
				);
				let json = await apiResponse.json();

				if (!json.length) {
					break;
				}

				const result = await getLeadersData(json, leaderPosition);
				peopleItems = {
					...peopleItems,
					...result[0],
				}
				peopleSelectOptions = {
					...peopleSelectOptions,
					...result[1],
				}
				leaderPosition = result[2];

				if (json.length < pageSize) {
					// if no data - no need to send more requests
					break;
				}
			}

			const contentTypePeopleData = {
				items: peopleItems,
				selectOptions: peopleSelectOptions
			}

			localStorage.setItem('contentTypePeopleData', JSON.stringify(contentTypePeopleData))
        }


        if (
            localStorage.getItem('contentTypeCsData') === null &&
            localStorage.getItem('alreadyGettingCs') === null
        ) {
            console.log('GettingCs...............')
            localStorage.setItem('alreadyGettingCs', true);
			let csItems = {};
			let csSelectOptions = { none: "-- NONE --" };
			let csItemPosition = 0;

			for (let i = 1; i <= pagesAmount; i++) {
				let apiResponse = await fetch(
					`${window.location.origin}/api/contents?page=${i}&contentType=case-studies&status=published&pageSize=${pageSize}`
				);
				let json = await apiResponse.json();

				if (!json.length) {
					break;
				}

				const result = await getCsItemsData(json, csItemPosition);

				csItems = {
					...csItems,
					...result[0],
				};
				csSelectOptions = {
					...csSelectOptions,
					...result[1],
				};
				csItemPosition = result[2];

				if (json.length < pageSize) {
					// if no data - no need to send more requests
					break;
				}
			}

			const csElements = {
				items: csItems,
				selectOptions: csSelectOptions
			}

			localStorage.setItem('contentTypeCsData', JSON.stringify(csElements))
		}

        if (
            localStorage.getItem('contentTypeInsightsData') === null &&
            localStorage.getItem('alreadyGettingInsights') === null
        ) {
            console.log('GettingInsights...............')
            localStorage.setItem('alreadyGettingInsights', true);
			let insightsItems = {}
			let insightsSelectOptions = { none: "-- NONE --" }
			let insightPosition = 0

			for (let i = 1; i <= pagesAmount; i++) {
				let apiResponse = await fetch(
					`${window.location.origin}/api/contents?page=${i}&contentType%5B%5D=videos&contentType%5B%5D=blog&contentType%5B%5D=whitepapers&contentType%5B%5D=pr&contentType%5B%5D=case-studies&status=published&pageSize=${pageSize}`
				);
				let json = await apiResponse.json();

				if (!json.length) {
					// if no data - no need to send more requests
					break;
				}

				const result = await getInsightsItemsData(json, insightPosition);

				insightsItems = {
					...insightsItems,
					...result[0],
				};
				insightsSelectOptions = {
					...insightsSelectOptions,
					...result[1],
				};
				insightPosition = result[2];

				if (json.length < pageSize) {
					// if no data - no need to send more requests
					break;
				}
			}

			const insightsElements = {
				items: insightsItems,
				selectOptions: insightsSelectOptions
			}

			localStorage.setItem('contentTypeInsightsData', JSON.stringify(insightsElements))
		}
    }

    getContetypesData()

    async function getInsightsItemsData (dataJson, itemPosition) {
		const newItems = {};
		const newSelectOptions = {};
		const isLocal = window.location.hostname === "127.0.0.1";

		for (const single in dataJson) {
			const item = {
				id: dataJson[single].id,
				title: dataJson[single].fieldValues.title,
				description: dataJson[single].fieldValues.preview_description_text,
				slug: dataJson[single].fieldValues.slug,
				photo:
					isLocal
						? "https://www.luxoft.com/upload/medialibrary/563/behavioral_archetypes.png"
						: dataJson[single].fieldValues.photo.url,
				contentType: dataJson[single].contentType,
				industry: dataJson[single].taxonomyValues.industries
					? dataJson[single].taxonomyValues.industries[
							Object.keys(dataJson[single].taxonomyValues.industries)[0]
					  ]
					: "",
			};
			newItems[itemPosition] = item;
			let singleName =
				dataJson[single].contentType === "case-studies"
					? "case study"
					: dataJson[single].contentType === "blog"
					? dataJson[single].contentType
					: dataJson[single].contentType.substring(
							0,
							dataJson[single].contentType.length - 1
					  );
			newSelectOptions[
				itemPosition
			] = `${dataJson[single].fieldValues.name} - ${singleName}`
			itemPosition++;
		}

		return [newItems, newSelectOptions, itemPosition]
	}

    async function getLeadersData (dataJson, leaderPosition) {
		const newItems = {}
		const newSelectOptions = {}
		const isLocal = window.location.hostname === "127.0.0.1"

		for (const leader in dataJson) {
			const item = {
				id: dataJson[leader].id,
				name: dataJson[leader].fieldValues.name,
				title: dataJson[leader].fieldValues.title.en,
				link: dataJson[leader].fieldValues.linkedin_url,
				photo:
					isLocal
						? "https://www.luxoft.com/upload/resize_cache/iblock/303/400_0_1/RinoAriganello.jpg"
						: dataJson[leader].fieldValues.image.url,
				command: "leaders.insert",
			};
			newItems[leaderPosition] = item
			newSelectOptions[
				leaderPosition
			] = `${dataJson[leader].fieldValues.name} - ${dataJson[leader].fieldValues.title.en}`
			leaderPosition++;
		}

		return [newItems, newSelectOptions, leaderPosition]
	}

    async function getCsItemsData (dataJson, itemPosition) {
		const newItems = {}
		const newSelectOptions = {}
		const isLocal = window.location.hostname === "127.0.0.1"

		for (const single in dataJson) {
			const item = {
				id: dataJson[single].id,
				title: dataJson[single].fieldValues.title,
				description: dataJson[single].fieldValues.preview_description_text,
				slug: dataJson[single].fieldValues.slug,
				photo:
					isLocal
						? "https://www.luxoft.com/upload/medialibrary/563/behavioral_archetypes.png"
						: dataJson[single].fieldValues.photo.url,
				contentType: dataJson[single].contentType,
				industry: dataJson[single].taxonomyValues.industries
					? dataJson[single].taxonomyValues.industries[
							Object.keys(dataJson[single].taxonomyValues.industries)[0]
					  ]
					: "",
			};

			newItems[itemPosition] = item;
			newSelectOptions[itemPosition] = `${dataJson[single].fieldValues.name}`
			itemPosition++
		}

		return [newItems, newSelectOptions, itemPosition]
	}
})

window.addEventListener('beforeunload', () => {
    localStorage.removeItem('alreadyGettingCs')
    localStorage.removeItem('alreadyGettingPeople')
    localStorage.removeItem('alreadyGettingInsights')
    localStorage.removeItem('contentTypePeopleData')
    localStorage.removeItem('contentTypeInsightsData')
    localStorage.removeItem('contentTypeCsData')
})
