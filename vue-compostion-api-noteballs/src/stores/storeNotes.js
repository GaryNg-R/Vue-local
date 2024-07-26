// stores/counter.js
import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis mauris.",
        },
        {
          id: "id2",
          content: " This is a second note",
        },
      ],
    };
  },
  actions: {
    addNote() {
      console.log("addNote");
    },
  },
});
