document.addEventListener("DOMContentLoaded", (e) => {
  async function getContenTypesData() {
    const pagesAmount = 20;

    if (
        localStorage.getItem('contentTypeBlogData') === null &&
        localStorage.getItem('alreadyGettingBlog') === null
    ) {
      console.log('GettingBlog...............')
      localStorage.setItem('alreadyGettingBlog', true);
      let blogItems = {}
      let blogSelectOptions = { none: "-- NONE --" }
      let blogPosition = 0

      let trainersItems = {}
      let trainersSelectOptions = { none: "-- NONE --" }
      let trainersPosition = 0

      for (let i = 1; i <= pagesAmount; i++) {
        let apiResponse = await fetch(`${window.location.origin}/api/contents?page=${i}&contentType=blog&status=published`)
        let json = await apiResponse.json()

        if (!json.length) {
          // if no data - no need to send more requests
          break;
        }

        const result = await getBlogItemData(json, blogPosition, trainersPosition);

        blogItems = {
          ...blogItems,
          ...result[0],
        };
        blogSelectOptions = {
          ...blogSelectOptions,
          ...result[1],
        };
        blogPosition = result[2];


        trainersItems = {
          ...trainersItems,
          ...result[3],
        };
        trainersSelectOptions = {
          ...trainersSelectOptions,
          ...result[4],
        };
        trainersPosition = result[5];

        if (json.length < 30) {
          // if no data - no need to send more requests
          break;
        }
      }

      const insightsElements = {
        items: blogItems,
        selectOptions: blogSelectOptions
      }

      const trainersElements = {
        items: trainersItems,
        selectOptions: trainersSelectOptions
      }

      localStorage.setItem('contentTypeBlogData', JSON.stringify(insightsElements))
      localStorage.setItem('contentTypeTrainersData', JSON.stringify(trainersElements))
    }
  }

  getContenTypesData()

  async function getBlogItemData(dataJson, itemPosition, trainerPosition) {
    const newItems = {};
    const newSelectOptions = {};
    const newTrainerItems = {};
    const newTrainerSelectOptions = {};
    const isLocal = window.location.hostname === "127.0.0.1";
    
    for (const single in dataJson) {
      
      if (dataJson[single].contentType == "trainers") {
        console.log(dataJson[single].contentType)
        const item = {
          id: dataJson[single].id,
          name: dataJson[single].fieldValues.name,
          title: dataJson[single].fieldValues.position,
          link: dataJson[single].fieldValues.linkedin_url,
          bio: dataJson[single].fieldValues.biography,
          photo:
            isLocal
              ? "https://i.pravatar.cc/300"
              : dataJson[single].fieldValues.image.url,
        };
        newTrainerItems[trainerPosition] = item
        newTrainerSelectOptions[trainerPosition] = `${dataJson[single].fieldValues.name} - ${dataJson[single].fieldValues.position}`
        trainerPosition++;
      }

      if (dataJson[single].contentType == "blog") {
        console.log(dataJson[single].contentType)
        const item = {
          id: dataJson[single].id,
          title: dataJson[single].extras.title,
          description: dataJson[single].fieldValues.preview_text,
          slug: dataJson[single].fieldValues.slug,
          photo: isLocal
              ? "/theme/luxoft-2024/assets/images/others/blog-banner.jpg"
              : dataJson[single].fieldValues?.detail_picture?.url !== null
                  ? dataJson[single].fieldValues?.detail_picture?.url
                  : "/theme/luxoft-2024/assets/images/others/blog-banner.jpg",
          contentType: dataJson[single].contentType
        };
        newItems[itemPosition] = item;
        let itemContentType = dataJson[single].contentType
        newSelectOptions[itemPosition] = `${dataJson[single].extras.title} - ${itemContentType}`;
        itemPosition++;
      }
    }

    return [newItems, newSelectOptions, itemPosition, newTrainerItems, newTrainerSelectOptions, trainerPosition];
  }
})

window.addEventListener("beforeunload", () => {
  localStorage.removeItem("alreadyGettingBlog")
  localStorage.removeItem("contentTypeBlogData")
  localStorage.removeItem("contentTypeTrainersData")
});
