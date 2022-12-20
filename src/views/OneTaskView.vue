<!-- <template>
    <div class="container mx-auto mt-[64px]">
      <h1 class="font-extrabold text-black mb-6 text-3xl">{{ title }}</h1>
      <h1 class="">{{ detail }}</h1>

    </div>
</template>

<script>
  import { initializeApp } from "firebase/app";
  import { getFirestore, collection, getDocs, addDoc, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyBsUhezcNfQfvCkW7F7IkLml0SBzRhp17c",
    authDomain: "vuejs-todo-ead65.firebaseapp.com",
    projectId: "vuejs-todo-ead65",
    storageBucket: "vuejs-todo-ead65.appspot.com",
    messagingSenderId: "921865366399",
    appId: "1:921865366399:web:23f567f6a0f9c9df02c84a"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export default {
    data() {
      return {
        id: '',
        category: this.$route.params.category,
        title: '',
        detail: ''
      }
    },
    created() {
      this.id = this.$route.params.id;
      this.getData();
    },
    mounted() {

    },
    methods: {
      async getData() {
        const querySnap = await getDoc(doc(db, this.category, this.id));
        let temp = querySnap.data()
        this.title = temp.title
        this.detail = temp.detail
      }
    }
  }
</script> -->