<template>
  <div>
    <table>
      <thead>
        <tr>
          <th @click="sort('compnos')">compnos</th>
          <th @click="sort('naturecode')">Nature Code</th>
          <th @click="sort('incident_type_description')">Incident Description</th>
          <th @click="sort('main_crimecode')">Crime Code</th>
          <th @click="sort('reptdistrict')">Rept District</th>
          <th @click="sort('reportingarea')">Reporting Area</th>
          <th @click="sort('fromdate')">From Date</th>
          <th @click="sort('weapontype')">Weapon Type</th>
          <th @click="sort('shooting')">Shooting</th>
          <th @click="sort('domestic')">Domestic</th>
          <th @click="sort('shift')">Shift</th>
          <th @click="sort('year')">Year</th>
          <th @click="sort('month')">Month</th>
          <th @click="sort('day_week')">Day Week</th>
          <th @click="sort('ucrpart')">Ucr Part</th>
          <th @click="sort('x')">x</th>
          <th @click="sort('y')">Geynder</th>
          <th @click="sort('streetname')">Street Name</th>
          <th @click="sort('xstreetname')">X Street Name</th>
          <th @click="sort('location')">Location</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="crime._id" v-for="crime in this.$store.state.crimes.crimes">
          <td>{{crime.compnos}}</td>
          <td>{{crime.naturecode}}</td>
          <td>{{crime.incident_type_description}}</td>
          <td>{{crime.main_crimecode}}</td>
          <td>{{crime.reptdistrict}}</td>
          <td>{{crime.reportingarea}}</td>
          <td>{{crime.fromdate}}</td>
          <td>{{crime.weapontype}}</td>
          <td>{{crime.shooting}}</td>
          <td>{{crime.domestic}}</td>
          <td>{{crime.shift}}</td>
          <td>{{crime.year}}</td>
          <td>{{crime.month}}</td>
          <td>{{crime.day_week}}</td>
          <td>{{crime.ucrpart}}</td>
          <td>{{crime.x}}</td>
          <td>{{crime.y}}</td>
          <td>{{crime.streetname}}</td>
          <td>{{crime.xstreetname}}</td>
          <td>{{crime.location}}</td>
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
      crimes: this.$store.state.crimes.crimes,
      currentSort: 'compnos',
      currentSortDir: 'asc',
      token: this.$store.state.auth.token,
      // pageSize: this.$store.state.crimes.pageSize,
      // pageSize: 25,
      // currentPage: this.$store.state.crimes.currentPage,
    };
  },
  created() {
    const config = {
      headers: { Authorization: `Bearer ${this.token}` },
    };

    this.$store.commit('getCrimesRequest');

    axios.get('http://localhost:8084/api/crimes', config)
      .then((res) => {
        /* eslint-disable no-console */
        console.log(res);
        this.$store.commit('getCrimesSuccess', { status: { loading: false }, crimes: res.data.Crimes.data, currentPage: 1, lastPage: res.data.Crimes.last_page });
        /* eslint-disable no-console */
        this.crimes = res.data.Crimes.data;
        console.log(this.$store.state.crimes.crimes);
        /* eslint-disable no-console */
        console.log(res.data.Crimes.next_page_url);
        this.$nextTick(function () {
        console.log(this.$el.textContent) // => 'mis à jour'
      })
        // this.crimes = res.data.Crimes.data;
        // this.pageSize: res.data.Crime.last_page;
      }).catch((error) => {
        console.log(error);
        this.$store.commit('getCrimesFailure');
      });
    // fetch('http://localhost:8084/api/crimes')
    //   .then(res => res.json())
    //   .then(res => {
    //     this.crimes = res.Crimes.data;
    //   });
  },
  methods: {
    nextPage() {
      /* eslint-disable no-console */
      console.log(this.$store.state.crimes.currentPage);
      /* eslint-disable no-console */
      console.log(this.$store.state.crimes.lastPage);
      /* eslint-disable no-console */
      console.log(this.$store.state.auth.token);
      if (this.$store.state.crimes.currentPage < this.$store.state.crimes.lastPage) {
        const config = {
          headers: { Authorization: `Bearer ${this.token}` },
        };

        this.$store.commit('getCrimesRequest');

        axios.get(`http://localhost:8084/api/crimes?page=${this.$store.state.crimes.currentPage + 1}`, config)
          .then((res) => {
            /* eslint-disable no-console */
            console.log(res);
            this.$store.commit('getCrimesSuccess', { status: { loading: false }, crimes: res.data.Crimes.data, currentPage: this.$store.state.crimes.currentPage + 1, lastPage: res.data.Crimes.last_page });
            /* eslint-disable no-console */
            console.log(this.$store.state.crimes.crimes);
            // this.crimes = res.data.Crimes.data;
            // this.pageSize: res.data.Crime.last_page;
          }).catch((error) => {
            console.log(error);
            this.$store.commit('getCrimesFailure');
          });
      }
    },
    prevPage() {
      if (this.$store.state.crimes.currentPage > 1) {
        const config = {
          headers: { Authorization: `Bearer ${this.token}` },
        };

        this.$store.commit('getCrimesRequest');

        axios.get(`http://localhost:8084/api/crimes?page=${this.$store.state.crimes.currentPage - 1}`, config)
          .then((res) => {
            /* eslint-disable no-console */
            console.log(res);
            this.$store.commit('getCrimesSuccess', { status: { loading: false }, crimes: res.data.Crimes.data, currentPage: this.$store.state.crimes.currentPage - 1, lastPage: res.data.Crimes.last_page });
            /* eslint-disable no-console */
            console.log(this.$store.state.crimes.crimes);
            // this.crimes = res.data.Crimes.data;
            // this.pageSize: res.data.Crime.last_page;
          }).catch((error) => {
            console.log(error);
            this.$store.commit('getCrimesFailure');
          });
      }
    },

  },
};
</script>
