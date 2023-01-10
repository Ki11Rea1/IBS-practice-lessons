import { API_URL } from "./API/constants.js";
import { GetDetailedPageData } from "./API/GetDetailedPageData.js";

const renderDetailedPage = async () => {
  let details = document.querySelector(".details");

  let url = new URL(location.href);
  let content = await GetDetailedPageData(url.searchParams.get("id"));

  details.innerHTML = `
  <div class="photo">
        <img src=${API_URL}${content.picture.path} alt=${content.picture.alt}/>
      </div>
      <div class="info">
        <p class="info__title">${content.name}</p>
        <p class="info__description">
          ${content.description}
        </p>
        <p class="info__subtitle">Details</p>
        <p class="info__description">
        ${content.details}
        </p>
        <div class="price">
          <div class="price__left-half">
            <p class="price__summ">${
              content.price.value + " " + content.price.currency
            }</p>
            <div class="price__count">
              <div class="price__differ">-</div>
              <div class="price__ammount">1</div>
              <div class="price__differ">+</div>
            </div>
          </div>
          <div class="price__right-half">
            <button>Add to cart</button>
            <div class="price__favorite">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
                  fill="#959595"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>`;
};

renderDetailedPage();
