// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

export default axios.create({
  badeURL: 'http://localhost:3500'
})