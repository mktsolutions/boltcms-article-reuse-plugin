// Icon
ArticleEditor.iconjobscards = '<i class="fa fa-user-plus"></i>';

// Plugin
ArticleEditor.add("plugin", "jobscards", {
  translations: {
    en: {
      jobscards: {
        jobscards: "Jobs cards",
        add: "Insert",
        cancel: "Cancel",
        label: "Choose the design you want to insert",
      },
      blocks: {
        jobscards: "Jobs cards",
      },
    },
  },
  init: function () {
    this.elements = {};
    this.locations = {};
  },
  start: async function () {
    const $this = this;
    const storageInterval = setInterval(checkStorage, 5000);

    function checkStorage() {
      if (localStorage.getItem("contentTypeJobsData") !== null) {
        getJobsData();
        getLocationsData();
      }
    }

    function getJobsData() {
      const storageData = JSON.parse(
        localStorage.getItem("contentTypeJobsData")
      );
      
      $this.elements = {
        items: storageData.items,
        selectOptions: storageData.selectOptions,
      };

      $this.app.addbar.add("jobscards", {
        title: "## blocks.jobscards ##",
        icon: ArticleEditor.iconjobscards,
        command: "jobscards.popup",
      });

      clearInterval(storageInterval);
    }

    function getLocationsData() {
      const storageData = JSON.parse(
        localStorage.getItem("contentTypeJobsData")
      );
      
      const uniqueCountries = [...new Set(storageData.items.map(item => item.country))].filter(n => n).sort();
      $this.locations = {
        selectOptions: uniqueCountries
      };

      clearInterval(storageInterval);
    }

  },
  popup: function () {
    var stack = this.app.popup.create("jobscards", {
      title: "## jobscards.jobscards ##",
      width: "400px",
      command: "addbar.popup",
      form: {
        mode: {
          type: "select",
          label: "Choose mode",
          options: {
            automatic: "Automatic",
            manual: "Manual",
          },
        },
        location: {
          type: "select",
          label: "Choose location",
          options: this.locations.selectOptions,
        },
        item1: {
          type: "input",
          label: "Job vacancy code:",
        },
        item2: {
          type: "input",
          label: "Job vacancy code:",
        },
        item3: {
          type: "input",
          label: "Job vacancy code:",
        },
        item4: {
          type: "input",
          label: "Job vacancy code:",
        },
      },
      footer: {
        insert: {
          title: "## jobscards.add ##",
          command: "jobscards.insert",
          type: "primary",
        },
        cancel: { title: "## jobscards.cancel ##", command: "popup.close" },
      },
    });

    stack.open({ focus: "jobscards" });
    const countries = stack.$form.nodes[0].querySelectorAll('select[name="location"]')[0];
    const defaultValueSelected = document.createElement('option');
    defaultValueSelected.value = 'none';
    defaultValueSelected.innerHTML = '';
    defaultValueSelected.setAttribute('selected',true);
    countries.appendChild(defaultValueSelected);
  },
  insert: function (stack) {
    this._buildInstance(stack);
  },
  _buildInstance: function (stack) {
    this.app.popup.close();

    var data = stack.getData();
    var editableType = data.mode;
    var country = this.locations.selectOptions[data.location];
    
    var id1 = data.item1;
    var id2 = data.item2;
    var id3 = data.item3;
    var id4 = data.item4;
    var ids = [id1, id2, id3, id4];

    function findObjectById(mainObject, targetId) {
      for (const key in mainObject) {
        if (
          mainObject.hasOwnProperty(key) &&
          mainObject[key].id === parseInt(targetId)
        ) {
          return mainObject[key];
        }
      }
      return null; // Return null if the object with the specified id is not found
    }

    function getLastFourHotObjects(mainObject) {
      const hotObjects = Object.values(mainObject)
        .filter((innerObject) => innerObject.hot === "YES")
        .reverse() // Reverse the array to get the last four objects
        .slice(0, 4); // Take the first four objects after reversing
      return hotObjects;
    }

    function getHotJobsByCountry(mainObject, country) {
      const hotObjects = Object.values(mainObject)
        .filter((innerObject) => innerObject.hot === "YES" && innerObject.country.includes(country))
        .reverse() // Reverse the array to get the last four objects
        .slice(0, 4); // Take the first four objects after reversing
      return hotObjects;
    }

    var htmlStructure = ``;
    var htmlItems = ``;
    let htmlItemsMobile = "";
    var id = Math.floor(Math.random() * 9999);

    if (editableType === "manual") {
      ids.forEach((id) => {
        const job = findObjectById(this.elements.items, id);
        htmlItems += `
        <a href="/jobs/${
          job.link ?? "null"
        }" class="latest-opportunities__right-col__card">
          <div class="latest-opportunities__right-col__card__description">
            <h3>${job.title}</h3>
            <p>${job.specializatio ?? "null"}</p>
          </div>
          <div class="latest-opportunities__right-col__card__location"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
          <g clip-path="url(#clip0_1153_53722)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.27246 8.7275V8.87083C4.27246 11.755 7.92413 16.0967 9.39579 17.73C9.71996 18.09 10.28 18.09 10.6041 17.73C12.0758 16.0967 15.7275 11.755 15.7275 8.87083V8.7275C15.7275 5.56417 13.1633 3 9.99996 3C6.83663 3 4.27246 5.56417 4.27246 8.7275ZM9.99992 10.4626C9.07909 10.4626 8.33325 9.71672 8.33325 8.79589V8.76506C8.33325 7.84422 9.07909 7.09839 9.99992 7.09839C10.9208 7.09839 11.6666 7.84422 11.6666 8.76506V8.79589C11.6666 9.71672 10.9208 10.4626 9.99992 10.4626Z" fill="#BFBFBF"/>
          </g>
          <defs>
              <clipPath id="clip0_1153_53722">
              <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
          </defs>
      </svg>
      <span>${
        job.working_place_city ?? "null"
      }</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <circle cx="10" cy="10.5" r="1.5" fill="#BFBFBF"/>
  </svg>
  <span>${job.country ?? "null"}</span>
          </div>
        </a>
        `;

        htmlItemsMobile += `
        <div class="splide__slide">
        <a href="/jobs/${job.link ?? "null"}" class="ol-carousel">
          <div class="ol-carousel__title">${job.title ?? "null"}</div>
          <div class="ol-carousel__description">${
            job.specialization ?? "null"
          }</div>
          <div class="ol-carousel__location">
            <svg class="ol-carousel__location__img" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
          <g clip-path="url(#clip0_1153_53722)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.27246 8.7275V8.87083C4.27246 11.755 7.92413 16.0967 9.39579 17.73C9.71996 18.09 10.28 18.09 10.6041 17.73C12.0758 16.0967 15.7275 11.755 15.7275 8.87083V8.7275C15.7275 5.56417 13.1633 3 9.99996 3C6.83663 3 4.27246 5.56417 4.27246 8.7275ZM9.99992 10.4626C9.07909 10.4626 8.33325 9.71672 8.33325 8.79589V8.76506C8.33325 7.84422 9.07909 7.09839 9.99992 7.09839C10.9208 7.09839 11.6666 7.84422 11.6666 8.76506V8.79589C11.6666 9.71672 10.9208 10.4626 9.99992 10.4626Z" fill="#BFBFBF"/>
          </g>
          <defs>
              <clipPath id="clip0_1153_53722">
              <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
          </defs>
      </svg>
            <span class="ol-carousel__location__text">${
              job.working_place_city ?? "null"
            }</span>
            <svg class="ol-carousel__location__img" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <circle cx="10" cy="10.5" r="1.5" fill="#BFBFBF"/>
  </svg>
            <span class="ol-carousel__location__text">${
              job.country ?? "null"
            }</span>
          </div>
        </a>
      </div>
        `;
      });
    } else {
      const latestHotJobs = country === undefined ? getLastFourHotObjects(this.elements.items) : getHotJobsByCountry(this.elements.items, country);
      
      latestHotJobs.forEach((job) => {
        htmlItems += `
        <a href="/jobs/${
          job.link ?? "null"
        }" class="latest-opportunities__right-col__card">
          <div class="latest-opportunities__right-col__card__description">
            <h3>${job.title}</h3>
            <p>${job.specialization || "null"}</p>
          </div>
          <div class="latest-opportunities__right-col__card__location"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
          <g clip-path="url(#clip0_1153_53722)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.27246 8.7275V8.87083C4.27246 11.755 7.92413 16.0967 9.39579 17.73C9.71996 18.09 10.28 18.09 10.6041 17.73C12.0758 16.0967 15.7275 11.755 15.7275 8.87083V8.7275C15.7275 5.56417 13.1633 3 9.99996 3C6.83663 3 4.27246 5.56417 4.27246 8.7275ZM9.99992 10.4626C9.07909 10.4626 8.33325 9.71672 8.33325 8.79589V8.76506C8.33325 7.84422 9.07909 7.09839 9.99992 7.09839C10.9208 7.09839 11.6666 7.84422 11.6666 8.76506V8.79589C11.6666 9.71672 10.9208 10.4626 9.99992 10.4626Z" fill="#BFBFBF"/>
          </g>
          <defs>
              <clipPath id="clip0_1153_53722">
              <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
          </defs>
      </svg>
      <span>${
        job.working_place_city || "null"
      }</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <circle cx="10" cy="10.5" r="1.5" fill="#BFBFBF"/>
  </svg>
  <span>${job.country || "null"}</span>
          </div>
        </a>
        `;

        htmlItemsMobile += `
        <div class="splide__slide">
        <a href="/jobs/${job.link ?? "null"}" class="ol-carousel">
          <div class="ol-carousel__title">${job.title || "null"}</div>
          <div class="ol-carousel__description">${
            job.specialization || "null"
          }</div>
          <div class="ol-carousel__location">
            <svg class="ol-carousel__location__img" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
          <g clip-path="url(#clip0_1153_53722)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.27246 8.7275V8.87083C4.27246 11.755 7.92413 16.0967 9.39579 17.73C9.71996 18.09 10.28 18.09 10.6041 17.73C12.0758 16.0967 15.7275 11.755 15.7275 8.87083V8.7275C15.7275 5.56417 13.1633 3 9.99996 3C6.83663 3 4.27246 5.56417 4.27246 8.7275ZM9.99992 10.4626C9.07909 10.4626 8.33325 9.71672 8.33325 8.79589V8.76506C8.33325 7.84422 9.07909 7.09839 9.99992 7.09839C10.9208 7.09839 11.6666 7.84422 11.6666 8.76506V8.79589C11.6666 9.71672 10.9208 10.4626 9.99992 10.4626Z" fill="#BFBFBF"/>
          </g>
          <defs>
              <clipPath id="clip0_1153_53722">
              <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
          </defs>
      </svg>
            <span class="ol-carousel__location__text">${
              job.working_place_city || "null"
            }</span>
            <svg class="ol-carousel__location__img" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <circle cx="10" cy="10.5" r="1.5" fill="#BFBFBF"/>
  </svg>
            <span class="ol-carousel__location__text">${
              job.country || "null"
            }</span>
          </div>
        </a>
      </div>
        `;
      });
    }

    htmlStructure += `
    <section class="container latest-opportunities">
      <div class="latest-opportunities__left-col">
        <h2>Explore our latest opportunities</h2>
        <p>Advanced core specialization hiring + referral programs + global relocation services – Experience the best (and fastest) hiring process you’ve ever seen. It’s no wonder Luxoft has a 0 rejection rate.</p>
        <section id="splider-latest-opportunities" class="splide">
			<div class="splide__track">
				<ul class="splide__list">
					${htmlItemsMobile}
				</ul>
			</div>
		</section>
        <div class="button-container">
          <a href="/jobs" class="btn-normal d-block">All open roles</a>
        </div>
      </div>
      <div class="latest-opportunities__right-col">
        ${htmlItems}
      </div>
    </section>
    `;

    this.app.editor.insertContent({
      html: htmlStructure,
    });
  },
});
