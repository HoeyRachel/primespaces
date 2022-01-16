const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', (req, res) => {
  console.log ('in router.spaces GET:');
  const query = `SELECT * FROM "spaces";`
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all spaces', err);
      res.sendStatus(500)
    })

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log ('in spacesRouter.POST')
  const addSpacesQuery = `INSERT INTO "spaces" ("user_id", "room_name", "image_path", "is_complete") VALUES ($1, $2, $3, $4)`;
  values = [req.body.user_id, req.body.room_name, req.body.image_path, req.body.is_complete];
  pool.query( addSpacesQuery, values).then( (results)=>{
    res.sendStatus( 200);
  }).catch( (err)=>{
    console.log( err);
    res.send( 500);
  })
});

module.exports = router;
