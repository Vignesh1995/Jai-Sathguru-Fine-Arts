new Vue({
  el: '#app',
  data: {
    pageTitle: 'About Us - Vue.js Website',
    pageSubtitle: 'Learn more about our company and team',
    aboutUsText: 'Welcome to our company! We are dedicated to providing high-quality services...',
    team: [
      { id: 1, name: 'John Doe', position: 'CEO' },
      { id: 2, name: 'Jane Smith', position: 'CTO' },
      { id: 3, name: 'Bob Johnson', position: 'Lead Developer' }
    ],
    showMoreInfo: false,
    showTeamModal: false
  },
  methods: {
    toggleMoreInfo() {
      this.showMoreInfo = !this.showMoreInfo;
    },
    showModal() {
      this.showTeamModal = true;
    },
    closeModal() {
      this.showTeamModal = false;
    }
  }
});
