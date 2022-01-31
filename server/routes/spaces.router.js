const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', (req, res) => {
  console.log ('in router.spaces GET:');
  const query = `SELECT * FROM spaces`;
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
  const addSpacesQuery = `INSERT INTO "spaces" ("user_id", "space_name", "image_path", "is_complete", "space_goal") VALUES ($1, $2, $3, $4, $5)`;
  values = [req.body.user_id, req.body.space_name, req.body.image_path, req.body.is_complete, req.body.space_goal];
  pool.query( addSpacesQuery, values).then( (results)=>{
    res.sendStatus( 200);
  }).catch( (err)=>{
    console.log( err);
    res.send( 500);
  })
});

router.delete('/delete/:id', (req, res) => {
  console.log("delete space", req.params.id)
  const deleteSpace = `DELETE FROM spaces WHERE id=$1`;
  values= [req.params.id]
  pool.query(deleteSpace, values).then((result) => {
      res.sendStatus(200);
  }).catch((error) => {
      console.log('Error DELETE /api/spaces', error);
      res.sendStatus(500);
  })
});

module.exports = router;
