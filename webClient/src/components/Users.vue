<template>
  <div>
    <table>
      <thead>
        <tr>
          <th @click="sort('first_name')">First Name</th>
          <th @click="sort('last_name')">Last Name</th>
          <th @click="sort('email')">Email</th>
          <th @click="sort('role')">Role</th>
          <th @click="sort('created_at')">Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="user.id" v-for="user in this.$store.state.users.users">
          <td>{{user.first_name}}</td>
          <td>{{user.last_name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.role}}</td>
          <td>{{user.created_at}}</td>
        </tr>
      </tbody>
    </table>
    <p>
      <button @click="prevPage">Previous</button>
      <button @click="nextPage">Next</button>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: this.$store.state.users.users,
      currentSort: 'compnos',
      currentSortDir: 'asc',
      token: this.$store.state.auth.token,
      // pageSize: this.$store.state.users.pageSize,
      // pageSize: 25,
      // currentPage: this.$store.state.users.currentPage,
    };
  },
  created() {
    const config = {
      headers: { Authorization: `Bearer ${this.token}` },
    };

    this.$store.commit('getUsersRequest');

    axios.get('http://localhost:8084/api/users', config)
      .then((res) => {
        /* eslint-disable no-console */
        console.log(res);
        this.$store.commit('getUsersSuccess', { status: { loading: false }, users: res.data.Users.data, currentPage: 1, lastPage: res.data.Users.last_page });
        /* eslint-disable no-console */
        this.users = res.data.Users.data;
        console.log(this.$store.state.users.users);
        /* eslint-disable no-console */
        console.log(res.data.Users.next_page_url);
        // this.users = res.data.Users.data;
        // this.pageSize: res.data.Crime.last_page;
      }).catch((error) => {
        console.log(error);
        this.$store.commit('getUsersFailure');
      });
    // fetch('http://localhost:8084/api/users')
    //   .then(res => res.json())
    //   .then(res => {
    //     this.users = res.Users.data;
    //   });
  },
  methods: {
    nextPage() {
      /* eslint-disable no-console */
      console.log(this.$store.state.users.currentPage);
      /* eslint-disable no-console */
      console.log(this.$store.state.users.lastPage);
      /* eslint-disable no-console */
      console.log(this.$store.state.auth.token);
      if (this.$store.state.users.currentPage < this.$store.state.users.lastPage) {
        const config = {
          headers: { Authorization: `Bearer ${this.token}` },
        };

        this.$store.commit('getUsersRequest');

        axios.get(`http://localhost:8084/api/users?page=${this.$store.state.users.currentPage + 1}`, config)
          .then((res) => {
            /* eslint-disable no-console */
            console.log(res);
            this.$store.commit('getUsersSuccess', { status: { loading: false }, users: res.data.Users.data, currentPage: this.$store.state.users.currentPage + 1, lastPage: res.data.Users.last_page });
            /* eslint-disable no-console */
            console.log(this.$store.state.users.users);
            // this.users = res.data.Users.data;
            // this.pageSize: res.data.Crime.last_page;
          }).catch((error) => {
            console.log(error);
            this.$store.commit('getUsersFailure');
          });
      }
    },
    prevPage() {
      if (this.$store.state.users.currentPage > 1) {
        const config = {
          headers: { Authorization: `Bearer ${this.token}` },
        };

        this.$store.commit('getUsersRequest');

        axios.get(`http://localhost:8084/api/users?page=${this.$store.state.users.currentPage - 1}`, config)
          .then((res) => {
            /* eslint-disable no-console */
            console.log(res);
            this.$store.commit('getUsersSuccess', { status: { loading: false }, users: res.data.Users.data, currentPage: this.$store.state.users.currentPage - 1, lastPage: res.data.Users.last_page });
            /* eslint-disable no-console */
            console.log(this.$store.state.users.users);
            // this.users = res.data.Users.data;
            // this.pageSize: res.data.Crime.last_page;
          }).catch((error) => {
            console.log(error);
            this.$store.commit('getUsersFailure');
          });
      }
    },

  },
};
</script>
