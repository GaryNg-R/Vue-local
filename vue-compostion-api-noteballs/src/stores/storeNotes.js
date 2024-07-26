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
    addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();

      let note = {
        id: id,
        content: newNoteContent,
      };
      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      console.log("id to delete ", idToDelete);
      this.notes = this.notes.filter((note) => {
        return note.id !== idToDelete;
      });
    },
  },
});
