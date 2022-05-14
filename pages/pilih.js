export default function Pilih() {
  return (
    <>
      <div class="container mx-auto wrapper">
        <div class="title">
          <h1 class="text-5xl font-Josefin inline-block justify-start mb-8 font-bold">
            Pilih <span class="text-primer">Lapangan</span>
          </h1>
          <div class="float-right inline-block">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              class="border-2 w-36 border-primer text-primer bg-white focus:ring-4 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              Filter
              <svg
                class="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div
              id="dropdown"
              class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
            >
              <ul class="py-1" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Bintang 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="grid grid-cols-2 gap-2">
            <div class="py-6">
              <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div
                  class="w-1/3 bg-cover"
                  style="
                    background-image: url('https://images.unsplash.com/photo-1612768875331-0447b960fa40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80');
                  "
                ></div>
                <div class="w-2/3 p-4">
                  <h1 class="text-gray-900 font-bold text-2xl">
                    Homecourt Basketball
                  </h1>
                  <div class="flex item-center mt-2">
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  </div>
                  <p class="mt-2 text-sm">
                    📍Jl. Jln. Ir. H. Juanda Dago no. 84 Bandung
                  </p>
                  <p class="mt-2 text-sm">◷ 08.00-09-00</p>
                  <p class="mt-2 text-sm">Rp. 30000 - 35000/Jam</p>
                  <div class="flex item-center justify-between mt-3">
                    <button class="px-3 py-2 bg-primer text-white text-xs font-bold uppercase rounded w-full">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-6">
              <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div
                  class="w-1/3 bg-cover"
                  style="
                    background-image: url('https://images.unsplash.com/photo-1612768875331-0447b960fa40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80');
                  "
                ></div>
                <div class="w-2/3 p-4">
                  <h1 class="text-gray-900 font-bold text-2xl">
                    Homecourt Basketball
                  </h1>
                  <div class="flex item-center mt-2">
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  </div>
                  <p class="mt-2 text-sm">
                    📍Jl. Jln. Ir. H. Juanda Dago no. 84 Bandung
                  </p>
                  <p class="mt-2 text-sm">◷ 08.00-09-00</p>
                  <p class="mt-2 text-sm">Rp. 30000 - 35000/Jam</p>
                  <div class="flex item-center justify-between mt-3">
                    <button class="px-3 py-2 bg-primer text-white text-xs font-bold uppercase rounded w-full">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-6">
              <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div
                  class="w-1/3 bg-cover"
                  style="
                    background-image: url('https://images.unsplash.com/photo-1612768875331-0447b960fa40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80');
                  "
                ></div>
                <div class="w-2/3 p-4">
                  <h1 class="text-gray-900 font-bold text-2xl">
                    Homecourt Basketball
                  </h1>
                  <div class="flex item-center mt-2">
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  </div>
                  <p class="mt-2 text-sm">
                    📍Jl. Jln. Ir. H. Juanda Dago no. 84 Bandung
                  </p>
                  <p class="mt-2 text-sm">◷ 08.00-09-00</p>
                  <p class="mt-2 text-sm">Rp. 30000 - 35000/Jam</p>
                  <div class="flex item-center justify-between mt-3">
                    <button class="px-3 py-2 bg-primer text-white text-xs font-bold uppercase rounded w-full">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-6">
              <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div
                  class="w-1/3 bg-cover"
                  style="
                    background-image: url('https://images.unsplash.com/photo-1612768875331-0447b960fa40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80');
                  "
                ></div>
                <div class="w-2/3 p-4">
                  <h1 class="text-gray-900 font-bold text-2xl">
                    Homecourt Basketball
                  </h1>
                  <div class="flex item-center mt-2">
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  </div>
                  <p class="mt-2 text-sm">
                    📍Jl. Jln. Ir. H. Juanda Dago no. 84 Bandung
                  </p>
                  <p class="mt-2 text-sm">◷ 08.00-09-00</p>
                  <p class="mt-2 text-sm">Rp. 30000 - 35000/Jam</p>
                  <div class="flex item-center justify-between mt-3">
                    <button class="px-3 py-2 bg-primer text-white text-xs font-bold uppercase rounded w-full">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-6">
              <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div
                  class="w-1/3 bg-cover"
                  style="
                    background-image: url('https://images.unsplash.com/photo-1612768875331-0447b960fa40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80');
                  "
                ></div>
                <div class="w-2/3 p-4">
                  <h1 class="text-gray-900 font-bold text-2xl">
                    Homecourt Basketball
                  </h1>
                  <div class="flex item-center mt-2">
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-primer"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  </div>
                  <p class="mt-2 text-sm">
                    📍Jl. Jln. Ir. H. Juanda Dago no. 84 Bandung
                  </p>
                  <p class="mt-2 text-sm">◷ 08.00-09-00</p>
                  <p class="mt-2 text-sm">Rp. 30000 - 35000/Jam</p>
                  <div class="flex item-center justify-between mt-3">
                    <button class="px-3 py-2 bg-primer text-white text-xs font-bold uppercase rounded w-full">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
