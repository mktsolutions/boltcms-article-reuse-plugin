document.addEventListener("DOMContentLoaded", (e) => {
  async function getContetypesData() {
    const pagesAmount = 10;
    const pageSize = 200;

    if (
      localStorage.getItem("contentTypeLocationsData") === null &&
      localStorage.getItem("alreadyGettingLocations") === null
    ) {
      console.log("GettingLocations...............");
      localStorage.setItem("alreadyGettingLocations", true);
      let locationsItems = {};
      let locationsSelectOptions = { none: "-- NONE --" };
      let locationPosition = 0;

      for (let i = 1; i <= pagesAmount; i++) {
        let apiResponse = await fetch(
          `${window.location.origin}/api/contents?page=${i}&contentType=locations&status=published&pageSize=${pageSize}`
        );
        let json = await apiResponse.json();

        if (!json.length) {
          // if no data - no need to send more requests
          break;
        }

        const result = await getLocationsItemsData(json, locationPosition);

        locationsItems = {
          ...locationsItems,
          ...result[0],
        };
        locationsSelectOptions = {
          ...locationsSelectOptions,
          ...result[1],
        };
        locationPosition = result[2];

        if (json.length < pageSize) {
          // if no data - no need to send more requests
          break;
        }
      }

      const locationsElements = {
        items: locationsItems,
        selectOptions: locationsSelectOptions,
      };

      localStorage.setItem(
        "contentTypeLocationsData",
        JSON.stringify(locationsElements)
      );
    }

    if (
      localStorage.getItem("contentTypeEventsData") === null &&
      localStorage.getItem("alreadyGettingEvents") === null
    ) {
      console.log("GettingEvents...............");
      localStorage.setItem("alreadyGettingEvents", true);
      let eventsItems = {};
      let eventsSelectOptions = { none: "-- NONE --" };
      let eventPosition = 0;

      for (let i = 1; i <= pagesAmount; i++) {
        let apiResponse = await fetch(
          `${window.location.origin}/api/contents?page=${i}&contentType=events&status=published&pageSize=${pageSize}`
        );
        let json = await apiResponse.json();

        if (!json.length) {
          // if no data - no need to send more requests
          break;
        }

        const result = await getEventsItemsData(json, eventPosition);

        eventsItems = {
          ...eventsItems,
          ...result[0],
        };
        eventsSelectOptions = {
          ...eventsSelectOptions,
          ...result[1],
        };
        eventPosition = result[2];

        if (json.length < pageSize) {
          // if no data - no need to send more requests
          break;
        }
      }

      const eventsElements = {
        items: eventsItems,
        selectOptions: eventsSelectOptions,
      };

      localStorage.setItem(
        "contentTypeEventsData",
        JSON.stringify(eventsElements)
      );
    }

    if (
      localStorage.getItem('contentTypeBlogsData') === null &&
      localStorage.getItem('alreadyGettingBlogs') === null
    ) {
      console.log('GettingBlogs...............')
      localStorage.setItem('alreadyGettingBlogs', true);
      let insightsItems = {}
      let insightsSelectOptions = { none: "-- NONE --" }
      let insightPosition = 0

      for (let i = 1; i <= pagesAmount; i++) {
        let apiResponse = await fetch(
          `${window.location.origin}/api/contents?page=${i}&contentType%5B%5D=blog&status=published&pageSize=${pageSize}`
        );
        let json = await apiResponse.json();

        if (!json.length) {
          // if no data - no need to send more requests
          break;
        }

        const result = await getBlogItemData(json, insightPosition);

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

      localStorage.setItem('contentTypeBlogsData', JSON.stringify(insightsElements))
    }

    if (
      localStorage.getItem("contentTypeJobsData") === null &&
      localStorage.getItem("alreadyGettingJobs") === null
    ) {
      console.log("GettingJobs...............");
      localStorage.setItem("alreadyGettingJobs", true);

      let apiResponse = await fetch("/bolt/api/all-jobs");
      let jobs = await apiResponse.json();

      localStorage.setItem("contentTypeJobsData", JSON.stringify(jobs));
    }
  }

  getContetypesData()

  async function getBlogItemData(dataJson, itemPosition) {
    const newItems = {};
    const newSelectOptions = {};
    const isLocal = window.location.hostname === "127.0.0.1";

    for (const single in dataJson) {
      const item = {
        id: dataJson[single].id,
        title: dataJson[single].fieldValues.title,
        description: dataJson[single].fieldValues.preview_description_text,
        slug: dataJson[single].fieldValues.slug,
        photo: isLocal
          ? "https://www.luxoft.com/upload/medialibrary/563/behavioral_archetypes.png"
          : dataJson[single].fieldValues.photo.url,
        contentType: dataJson[single].contentType
      };
      newItems[itemPosition] = item;
      let singleName = dataJson[single].contentType
      newSelectOptions[
        itemPosition
      ] = `${dataJson[single].fieldValues.name} - ${singleName}`;
      itemPosition++;
    }

    return [newItems, newSelectOptions, itemPosition];
  }

  async function getLocationsItemsData(dataJson, itemPosition) {
    const newItems = {};
    const newSelectOptions = {};
    const isLocal = window.location.hostname === "127.0.0.1";

    for (const single in dataJson) {
      const item = {
        id: dataJson[single].id,
        title: dataJson[single].fieldValues.title,
        code: dataJson[single].fieldValues.country_code,
        slug: dataJson[single].fieldValues.slug,
        contentType: dataJson[single].contentType,
        photo: dataJson[single].fieldValues.image.url,
      };
      newItems[itemPosition] = item;
      let singleName = "location";

      newSelectOptions[
        itemPosition
      ] = `${dataJson[single].fieldValues.title} - ${singleName}`;
      itemPosition++;
    }

    return [newItems, newSelectOptions, itemPosition];
  }

  async function getJobsItemsData(dataJson, itemPosition) {
    const newItems = {};
    const newSelectOptions = {};
    const isLocal = window.location.hostname === "127.0.0.1";

    for (const single in dataJson) {
      const item = {
        title: dataJson[single].fieldValues.summary,
        specialization: dataJson[single].fieldValues.vacancy_specialization,
        vacancy_code: dataJson[single].fieldValues.vacancy_code,
        working_place_city: dataJson[single].fieldValues.working_place_city,
        country: dataJson[single].fieldValues.countryname,
        contentType: dataJson[single].contentType,
        id: dataJson[single].id,
        link: dataJson[single].extras.link,
        hot: dataJson[single].fieldValues.hot,
      };
      newItems[itemPosition] = item;
      let singleName = "job";

      newSelectOptions[
        itemPosition
      ] = `${dataJson[single].fieldValues.summary} - ${singleName}`;
      itemPosition++;
    }

    return [newItems, newSelectOptions, itemPosition];
  }

  async function getEventsItemsData(dataJson, itemPosition) {
    const newItems = {};
    const newSelectOptions = {};
    const isLocal = window.location.hostname === "127.0.0.1";

    for (const single in dataJson) {
      const item = {
        id: dataJson[single].id,
        title: dataJson[single].fieldValues.title,
        description: dataJson[single].fieldValues.description,
        slug: dataJson[single].fieldValues.slug,
        contentType: dataJson[single].contentType,
        photo: dataJson[single].fieldValues.image.url,
      };
      newItems[itemPosition] = item;
      let singleName = "event";

      newSelectOptions[
        itemPosition
      ] = `${dataJson[single].fieldValues.title} - ${singleName}`;
      itemPosition++;
    }

    return [newItems, newSelectOptions, itemPosition];
  }

});

window.addEventListener("beforeunload", () => {
  localStorage.removeItem("alreadyGettingLocations")
  localStorage.removeItem("alreadyGettingEvents")
  localStorage.removeItem("alreadyGettingJobs")
  localStorage.removeItem("contentTypeLocationsData")
  localStorage.removeItem("contentTypeEventsData")
  localStorage.removeItem("contentTypeJobsData")
  localStorage.removeItem("alreadyGettingBlogs")
  localStorage.removeItem("contentTypeBlogsData")
});
