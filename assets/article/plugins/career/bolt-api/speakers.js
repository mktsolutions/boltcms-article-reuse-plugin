document.addEventListener('DOMContentLoaded', (e) => {
    async function getContetypesData() {
        const pagesAmount = 10;
		const pageSize = 200;
        
        if (
            localStorage.getItem('contentTypePeopleData') === null &&
            localStorage.getItem('alreadyGettingPeople') === null
        ) {
            localStorage.setItem('alreadyGettingPeople', true);
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
    }

    getContetypesData()

    async function getLeadersData (dataJson, leaderPosition) {
		const newItems = {}
		const newSelectOptions = {}
		const isLocal = window.location.hostname === "127.0.0.1"

		for (const leader in dataJson) {
			const item = {
				id: dataJson[leader].id,
				name: dataJson[leader].fieldValues.name,
				title: dataJson[leader].fieldValues.title,
				link: dataJson[leader].fieldValues.linkedin_url,
				bio: dataJson[leader].fieldValues.biography,
				photo:
					isLocal
						? "https://www.luxoft.com/files/people/2022/12/Rino-Ariganello.jpg"
						: dataJson[leader].fieldValues.image.url,
				command: "leaders.insert",
			};
			newItems[leaderPosition] = item
			newSelectOptions[
				leaderPosition
			] = `${dataJson[leader].fieldValues.name} - ${dataJson[leader].fieldValues.title}`
			leaderPosition++;
		}

		return [newItems, newSelectOptions, leaderPosition]
	}
})

window.addEventListener('beforeunload', () => {
    localStorage.removeItem('alreadyGettingPeople')
    localStorage.removeItem('contentTypePeopleData')
})
