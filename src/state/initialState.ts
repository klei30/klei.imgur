import { TypeState } from "@/utils/types";

const initialState: TypeState = {
  finishedLazyLoading: false,
  galleryTags: {},
  items: [],
  requestArgs: {
    filter: true,
    method: "search",
    newSearch: true,
    page: 1,
    query: "dog",
    selectedItemID: "",
    sort: "top",
    tagName: "",
    window: "all",
  },
  requestError: false,
  selectedItem: undefined,
  selectedItemComments: [],
  selectedTag: {},
};

export { initialState };
