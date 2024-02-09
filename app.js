const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: ['Заметка 1']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')