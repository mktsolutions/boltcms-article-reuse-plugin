document.addEventListener("DOMContentLoaded", (e) => {
  async function getContetypesData() {
    const pagesAmount = 10;
    const pageSize = 200;

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
        path: dataJson[single].extras.link,
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
})

window.addEventListener("beforeunload", () => {
  localStorage.removeItem("alreadyGettingBlogs")
  localStorage.removeItem("contentTypeBlogsData")
});
