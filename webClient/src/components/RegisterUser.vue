<template>
  <div>
    <label for="firstName">First Name</label>
    <input
      id="firstName"
      v-model="firstName"
      type="text"
      name="firstName"
    >
    <label for="lastName">Last Name</label>
    <input
      id="lastName"
      v-model="lastName"
      type="text"
      name="lastName"
    >
    <label for="email">Email</label>
    <input
      id="email"
      v-model="email"
      type="text"
      name="email"
    >
    <label for="role">Role</label>
    <input
      id="role"
      v-model="role"
      type="text"
      name="role"
    >
    <label for="password">Password</label>
    <input
      id="password"
      v-model="password"
      type="password"
      name="password"
    >
    <input
      type="button"
      value="Submit"
      @click="create"
    >
  </div>
</template>

<script>
import axios from 'axios';
import querystring from 'querystring';

export default {
  data() {
    return {
      errors: [],
      success: [],
      email: null,
      password: null,
      firstName: null,
      lastName: null,
      role: null,
    };
  },
  methods: {
    status(response) {
      /* eslint-disable no-console */
      console.log('tessssst');
      let promise;
      if (response.status >= 200 && response.status < 300) {
        promise = Promise.resolve(response);
      } else {
        promise = Promise.reject(new Error(response));
      }
      return (promise);
    },
    create() {
      if (!this.email || !this.password || !this.firstName || !this.lastName || !this.role) {
        return;
      }
      // this.$store.commit('loginRequest');
      // const requestOptions = {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      //   body: new FormData({ username: this.username, password: this.password }),
      //   mode: 'no-cors',
      // };
      // axios.post('http://localhost:8084/api/login', querystring.stringify({
      //   email: this.email,
      //   password: this.password,
      // }))

      // const url = 'http://localhost:8084/api/login';
      // const config = {
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      // };

      // const requestBody = {
      //   username: this.username,
      //   password: this.password,
      // };

      // axios({
      //   method: 'post',
      //   url: 'http://localhost:8084/api/login',
      //   data: {
      //     username: this.username,
      //     password: this.password,
      //   },
      //   config,
      // })

      const config = {
        headers: { Authorization: `Bearer ${this.token}` },
      };
      axios.post('http://localhost:8084/api/users', querystring.stringify({
        email: this.email,
        password: this.password,
        role: this.role,
        first_name: this.firstName,
        last_name: this.lastName,
      }), config)
        .then(this.status)
        .then((res) => {
          /* eslint-disable no-console */
          console.log(res);
          // this.$store.commit('loginSuccess', { token: res.data.token, user: res.data.user });

          // location.reload();
        })
        .catch((err) => {
          /* eslint-disable no-console */
          console.log(err);
          // this.$store.commit('loginFailure');
          this.errors.push(err);
        });
    },
  },
};
</script>
