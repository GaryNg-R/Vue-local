<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light">
          <small>{{ characterLength }} </small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <!-- <a href="#" class="card-footer-item" @click.prevent="handleDelete">Delete</a> -->
      <a
        href="#"
        class="card-footer-item"
        @click.prevent="storeNotes.deleteNote(note.id)"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});
// const emit = defineEmits(["deleteClicked"]);

const characterLength = computed(() => {
  let description = props.note.content.length > 1 ? "characters" : "charcter";
  return `${props.note.content.length} ${description}`;
});

const handleDelete = () => {
  console.log("hanldeDelete????");
  emit("deleteClicked", props.note.id);
};
</script>
