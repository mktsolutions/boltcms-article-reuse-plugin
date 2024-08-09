document.addEventListener("DOMContentLoaded", (e) => {
  async function getContenTypesData() {
    const pagesAmount = 20;

    if (
        localStorage.getItem('contentTypeBlogData') === null &&
        localStorage.getItem('alreadyGettingBlog') === null
    ) {
      console.log('GettingBlog...............')
      localStorage.setItem('alreadyGettingBlog', true);
      let insightsItems = {}
      let insightsSelectOptions = { none: "-- NONE --" }
      let insightPosition = 0

      for (let i = 1; i <= pagesAmount; i++) {
        let apiResponse = await fetch(`${window.location.origin}/api/contents?page=${i}&contentType%5B%5D=blog&status=published`)
        let json = await apiResponse.json()

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

        if (json.length < 30) {
          // if no data - no need to send more requests
          break;
        }
      }

      const insightsElements = {
        items: insightsItems,
        selectOptions: insightsSelectOptions
      }

      localStorage.setItem('contentTypeBlogData', JSON.stringify(insightsElements))
    }
  }

  getContenTypesData()

  async function getBlogItemData(dataJson, itemPosition) {
    const newItems = {};
    const newSelectOptions = {};
    const isLocal = window.location.hostname === "127.0.0.1";

    for (const single in dataJson) {
      const item = {
        id: dataJson[single].id,
        title: dataJson[single].extras.title,
        description: dataJson[single].fieldValues.preview_text,
        slug: dataJson[single].fieldValues.slug,
        photo: isLocal
            ? "/theme/luxoft-2024/assets/images/others/blog-banner.jpg"
            : dataJson[single].fieldValues.detail_picture.url,
        contentType: dataJson[single].contentType
      };
      newItems[itemPosition] = item;
      let itemContentType = dataJson[single].contentType
      newSelectOptions[
          itemPosition
          ] = `${dataJson[single].extras.title} - ${itemContentType}`;
      itemPosition++;
    }

    return [newItems, newSelectOptions, itemPosition];
  }
})

window.addEventListener("beforeunload", () => {
  localStorage.removeItem("alreadyGettingBlog")
  localStorage.removeItem("contentTypeBlogData")
});
