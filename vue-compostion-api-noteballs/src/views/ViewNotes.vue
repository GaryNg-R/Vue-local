<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>
    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    <!-- @deleteClicked="deletNote" -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();

const newNote = ref("");
const newNoteRef = ref();

const addNote = () => {
  // let currentDate = new Date().getTime(),
  //   id = currentDate.toString();

  // let note = {
  //   id: id,
  //   content: newNote.value,
  // };
  // //console.log(note);
  // // notes.value.push(note);
  // notes.value.unshift(note);
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  newNoteRef.value.focus();
};

// const deletNote = (idToDelete) => {
//   notes.value = notes.value.filter((note) => {
//     return note.id !== idToDelete;
//   });
// };
</script>
